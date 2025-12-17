import { ChatOllama } from "@langchain/ollama";
import { createAgent, HumanMessage, tool } from "langchain";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define available tools
const getWeather = tool(
  ({ location }) => `Thời tiết tại ${location}: Nắng, nhiệt độ 28°C, độ ẩm 75%`,
  {
    name: "get_weather",
    description: "Lấy thông tin thời tiết cho một địa điểm",
    schema: z.object({
      location: z.string().describe("Địa điểm cần xem thời tiết"),
    }),
  }
);

const calculate = tool(
  ({ expression }) => {
    try {
      // Simple safe math eval
      const result = Function('"use strict"; return (' + expression + ')')();
      return `Kết quả của ${expression} = ${result}`;
    } catch {
      return `Không thể tính toán biểu thức: ${expression}`;
    }
  },
  {
    name: "calculate",
    description: "Tính toán một biểu thức toán học",
    schema: z.object({
      expression: z.string().describe("Biểu thức toán học cần tính (ví dụ: 2 + 2, 10 * 5)"),
    }),
  }
);

const getCurrentTime = tool(
  () => {
    const now = new Date();
    return `Thời gian hiện tại: ${now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}`;
  },
  {
    name: "get_current_time",
    description: "Lấy thời gian hiện tại",
    schema: z.object({}),
  }
);

// All available tools
const tools = [getWeather, calculate, getCurrentTime];

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const llm = new ChatOllama({
      model: "qwen3:8b",
      temperature: 0.7,
      maxRetries: 1,
      baseUrl: process.env.OLLAMA_BASE_URL,
    });

    const agent = createAgent({
      model: llm,
      tools: tools,
    });

    const stream = await agent.stream({
      messages: [new HumanMessage({ content: message })],
    });

    const encoder = new TextEncoder();

    // Track sent items to avoid duplicates
    const sentToolRequestIds = new Set<string>();
    const sentToolResultIds = new Set<string>();
    const sentThinkingHashes = new Set<string>();
    let lastAgentContent = "";

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            // Debug logging
            console.log("=== CHUNK ===");
            console.log(JSON.stringify(chunk, null, 2));

            let jsonResponse;

            // Inspect the chunk structure to determine the type
            const key = Object.keys(chunk)[0];
            const nodeOutput = (chunk as any)[key];

            if (key === "tools") {
              // Tool execution output
              const messages = nodeOutput.messages;
              const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1] : null;
              
              // Deduplicate by tool_call_id
              const toolCallId = lastMessage?.tool_call_id;
              if (toolCallId && sentToolResultIds.has(toolCallId)) {
                continue; // Skip duplicate
              }
              if (toolCallId) {
                sentToolResultIds.add(toolCallId);
              }

              jsonResponse = {
                type: "tool_result",
                name: lastMessage?.name ?? "unknown",
                content: lastMessage?.content ?? "",
                tool_call_id: toolCallId ?? null,
              };
            } else if (key === "model_request" || key === "agent") {
              // Agent/Model output
              const messages = nodeOutput.messages;
              const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1] : null;
              
              // Extract reasoning/thinking content from additional_kwargs (Qwen3/Ollama style)
              const additionalKwargs = lastMessage?.additional_kwargs;
              const reasoningContent = additionalKwargs?.reasoning_content;
              
              // Send thinking first if exists and not already sent
              if (reasoningContent && typeof reasoningContent === "string" && reasoningContent.trim()) {
                // Use first 100 chars as hash to deduplicate
                const thinkingHash = reasoningContent.trim().slice(0, 100);
                if (!sentThinkingHashes.has(thinkingHash)) {
                  sentThinkingHashes.add(thinkingHash);
                  const thinkData = `data: ${JSON.stringify({ type: "thinking", content: reasoningContent.trim() })}\n\n`;
                  controller.enqueue(encoder.encode(thinkData));
                }
              }

              if (lastMessage?.tool_calls && lastMessage.tool_calls.length > 0) {
                // Model is asking to call a tool - deduplicate
                const newToolCalls = lastMessage.tool_calls.filter((tc: any) => !sentToolRequestIds.has(tc.id));
                
                if (newToolCalls.length === 0) {
                  continue; // All tool calls already sent
                }
                
                // Mark as sent
                newToolCalls.forEach((tc: any) => sentToolRequestIds.add(tc.id));
                
                jsonResponse = {
                  type: "tool_request",
                  tool_calls: newToolCalls.map((tc: any) => ({
                    id: tc.id,
                    name: tc.name,
                    args: tc.args,
                  })),
                };
              } else {
                // Model text response
                let content = lastMessage?.content;
                
                if (typeof content === "string") {
                  // Also check for <think> tags (fallback)
                  const thinkMatch = content.match(/<think>([\s\S]*?)<\/think>/);
                  if (thinkMatch) {
                    const thinkingContent = thinkMatch[1].trim();
                    if (thinkingContent) {
                      const thinkData = `data: ${JSON.stringify({ type: "thinking", content: thinkingContent })}\n\n`;
                      controller.enqueue(encoder.encode(thinkData));
                    }
                    content = content.replace(/<think>[\s\S]*?<\/think>/, "").trim();
                  }
                  
                  // Deduplicate agent responses
                  if (content && content !== lastAgentContent) {
                    lastAgentContent = content;
                    jsonResponse = {
                      type: "agent",
                      content: content,
                    };
                  } else {
                    continue; // Skip duplicate or empty
                  }
                } else if (content) {
                  const contentStr = JSON.stringify(content);
                  if (contentStr !== lastAgentContent) {
                    lastAgentContent = contentStr;
                    jsonResponse = {
                      type: "agent",
                      content: contentStr,
                    };
                  } else {
                    continue;
                  }
                } else {
                  continue;
                }
              }
            } else {
              // Fallback/Unknown - skip to avoid noise
              console.log("Unknown chunk type:", key);
              continue;
            }

            // Send as Server-Sent Events format for easier parsing
            if (jsonResponse) {
              const data = `data: ${JSON.stringify(jsonResponse)}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
          }

          // Send done signal
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          const errorData = `data: ${JSON.stringify({ type: "error", content: "Đã xảy ra lỗi khi xử lý yêu cầu" })}\n\n`;
          controller.enqueue(encoder.encode(errorData));
          controller.close();
        }
      },
    });

    return new NextResponse(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};