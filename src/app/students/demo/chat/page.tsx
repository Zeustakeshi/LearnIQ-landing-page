"use client";

import { ChatSidebar } from "@/components/demo/ChatSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
  Loader2,
  Plus,
  Send,
  Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

// Message types
interface BaseMessage {
  id: string;
  timestamp: Date;
}

interface UserMessage extends BaseMessage {
  role: "user";
  content: string;
}

interface AssistantMessage extends BaseMessage {
  role: "assistant";
  content: string;
}

interface ThinkingMessage extends BaseMessage {
  role: "thinking";
  content: string;
}

interface ToolRequestMessage extends BaseMessage {
  role: "tool_request";
  tool_calls: {
    id: string;
    name: string;
    args: Record<string, any>;
  }[];
}

interface ToolResultMessage extends BaseMessage {
  role: "tool_result";
  name: string;
  content: string;
  tool_call_id: string | null;
}

type Message = UserMessage | AssistantMessage | ThinkingMessage | ToolRequestMessage | ToolResultMessage;

interface ChatItem {
  id: string;
  title: string;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Chào buổi sáng";
  if (hour < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
};

// Thinking Component - Collapsible, simple style
function ThinkingCard({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer"
      >
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        <span className="italic">Suy nghĩ...</span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 pl-5 border-l-2 border-neutral-200">
              <p className="text-sm text-neutral-500 whitespace-pre-wrap leading-relaxed">
                {content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Combined Tool Card - Shows both request and result together (Claude style)
function ToolCard({ 
  name, 
  args, 
  result,
  isExecuting 
}: { 
  name: string; 
  args: Record<string, any>;
  result?: string;
  isExecuting?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="my-3 border border-neutral-200 rounded-lg overflow-hidden bg-white">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-3 py-2 hover:bg-neutral-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600">
            F
          </span>
          <span className="text-sm font-mono text-neutral-700">{name}</span>
          {isExecuting && <Loader2 className="w-3.5 h-3.5 text-neutral-400 animate-spin" />}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-neutral-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 space-y-3">
              {/* Request */}
              <div>
                <p className="text-xs text-neutral-500 mb-1">Request</p>
                <pre className="text-xs bg-neutral-50 rounded p-2 overflow-x-auto text-neutral-700">
{JSON.stringify(args, null, 2)}
                </pre>
              </div>

              {/* Response */}
              {result && (
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Response</p>
                  <pre className="text-xs bg-neutral-50 rounded p-2 overflow-x-auto text-neutral-700">
{result}
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DemoChatPage() {
  const { user, isLoaded } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | undefined>();
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [pendingToolCalls, setPendingToolCalls] = useState<Map<string, { name: string; args: Record<string, any> }>>(new Map());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isProcessing]);

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;

    const userMessage: UserMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    // Create new chat if first message
    if (!currentChatId) {
      const newChatId = Date.now().toString();
      setCurrentChatId(newChatId);
      setChatHistory(prev => [{
        id: newChatId,
        title: input.trim().slice(0, 30) + (input.length > 30 ? "..." : "")
      }, ...prev]);
    }

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);
    setPendingToolCalls(new Map());

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No response body");
      }

      const decoder = new TextDecoder();
      let buffer = "";
      let currentAssistantContent = "";
      let assistantMessageId: string | null = null;
      const toolCallsMap = new Map<string, { name: string; args: Record<string, any>; result?: string }>();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            
            if (data === "[DONE]") {
              break;
            }

            try {
              const parsed = JSON.parse(data);

              switch (parsed.type) {
                case "thinking": {
                  const thinkingMsg: ThinkingMessage = {
                    id: `thinking-${Date.now()}`,
                    role: "thinking",
                    content: parsed.content,
                    timestamp: new Date(),
                  };
                  setMessages((prev) => [...prev, thinkingMsg]);
                  break;
                }

                case "tool_request": {
                  // Store tool calls for later pairing with results
                  for (const tc of parsed.tool_calls) {
                    toolCallsMap.set(tc.id, { name: tc.name, args: tc.args });
                  }
                  setPendingToolCalls(new Map(toolCallsMap));
                  break;
                }

                case "tool_result": {
                  // Find the matching tool call and create combined card
                  const toolCallId = parsed.tool_call_id;
                  const toolCall = toolCallsMap.get(toolCallId);
                  
                  if (toolCall) {
                    toolCall.result = parsed.content;
                    toolCallsMap.set(toolCallId, toolCall);
                  }

                  // Add combined tool message
                  const toolMsg: ToolResultMessage = {
                    id: `tool-${toolCallId || Date.now()}`,
                    role: "tool_result",
                    name: toolCall?.name || parsed.name,
                    content: parsed.content,
                    tool_call_id: toolCallId,
                    timestamp: new Date(),
                  };
                  
                  // Remove from pending and update messages
                  const newPending = new Map(toolCallsMap);
                  newPending.delete(toolCallId);
                  setPendingToolCalls(newPending);
                  
                  setMessages((prev) => {
                    // Add tool request if not added yet
                    const hasToolRequest = prev.some(m => m.role === "tool_request" && (m as ToolRequestMessage).tool_calls.some(tc => tc.id === toolCallId));
                    if (!hasToolRequest && toolCall) {
                      return [...prev, {
                        id: `tool-req-${toolCallId}`,
                        role: "tool_request" as const,
                        tool_calls: [{ id: toolCallId, name: toolCall.name, args: toolCall.args }],
                        timestamp: new Date(),
                      }, toolMsg];
                    }
                    return [...prev, toolMsg];
                  });
                  break;
                }

                case "agent": {
                  if (parsed.content && parsed.content.trim()) {
                    if (!assistantMessageId) {
                      assistantMessageId = `assistant-${Date.now()}`;
                      currentAssistantContent = parsed.content;
                      const assistantMsg: AssistantMessage = {
                        id: assistantMessageId,
                        role: "assistant",
                        content: currentAssistantContent,
                        timestamp: new Date(),
                      };
                      setMessages((prev) => [...prev, assistantMsg]);
                    } else {
                      currentAssistantContent = parsed.content;
                      setMessages((prev) =>
                        prev.map((msg) =>
                          msg.id === assistantMessageId
                            ? { ...msg, content: currentAssistantContent }
                            : msg
                        )
                      );
                    }
                  }
                  break;
                }

                case "error": {
                  const errorMsg: AssistantMessage = {
                    id: `error-${Date.now()}`,
                    role: "assistant",
                    content: `Đã xảy ra lỗi: ${parsed.content}`,
                    timestamp: new Date(),
                  };
                  setMessages((prev) => [...prev, errorMsg]);
                  break;
                }
              }
            } catch (e) {
              console.error("Failed to parse SSE data:", e);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMsg: AssistantMessage = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: "Đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsProcessing(false);
      setPendingToolCalls(new Map());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setCurrentChatId(undefined);
  };

  // Find result for a tool call
  const findToolResult = (toolCallId: string) => {
    const resultMsg = messages.find(
      (m) => m.role === "tool_result" && (m as ToolResultMessage).tool_call_id === toolCallId
    );
    return resultMsg ? (resultMsg as ToolResultMessage).content : undefined;
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse flex items-center gap-2">
          <Loader2 className="w-5 h-5 text-neutral-400 animate-spin" />
          <span className="text-neutral-500">Đang tải...</span>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <ChatSidebar 
        chatHistory={chatHistory}
        onNewChat={startNewChat}
        currentChat={currentChatId}
      />
      <SidebarInset className="bg-white flex flex-col h-screen">
        {/* Header */}
        <header className="flex items-center gap-2 px-4 py-3 border-b border-neutral-100 flex-shrink-0">
          <SidebarTrigger className="cursor-pointer text-neutral-500 hover:text-neutral-700" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="font-medium text-neutral-800">Bạn học ảo</span>
          </div>
        </header>

        {/* Chat area */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth"
        >
          {messages.length === 0 ? (
            /* Welcome state */
            <div className="min-h-full flex flex-col items-center justify-center px-4 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 mb-6">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                </div>
                <h1 className="text-2xl md:text-3xl font-medium text-neutral-800 mb-2">
                  {getGreeting()}, {user?.firstName || "bạn"}
                </h1>
                <p className="text-neutral-500 mb-8">
                  Mình có thể giúp gì cho bạn hôm nay?
                </p>

                {/* Quick actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Thời tiết ở Hà Nội?",
                    "Tính 25 * 4 + 100",
                    "Bây giờ là mấy giờ?",
                    "Giải thích bài học",
                  ].map((text, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(text)}
                      className="flex items-center gap-3 p-3 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-lg text-left transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-700">{text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            /* Messages */
            <div className="max-w-3xl mx-auto py-6 px-4">
              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => {
                  // Skip tool_result if we're rendering it inside tool_request
                  if (message.role === "tool_result") {
                    const prevMsg = messages[index - 1];
                    if (prevMsg?.role === "tool_request") {
                      return null; // Will be rendered inside the tool card
                    }
                  }

                  return (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mb-4"
                    >
                      {message.role === "user" ? (
                        /* User message - beige bubble, right aligned */
                        <div className="flex justify-end">
                          <div className="max-w-[80%] bg-amber-50 text-neutral-800 px-4 py-2.5 rounded-2xl rounded-br-md">
                            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                          </div>
                        </div>
                      ) : message.role === "thinking" ? (
                        /* Thinking */
                        <ThinkingCard content={message.content} />
                      ) : message.role === "tool_request" ? (
                        /* Tool Card - combined request/result */
                        <div>
                          {message.tool_calls.map((tc) => (
                            <ToolCard
                              key={tc.id}
                              name={tc.name}
                              args={tc.args}
                              result={findToolResult(tc.id)}
                              isExecuting={pendingToolCalls.has(tc.id)}
                            />
                          ))}
                        </div>
                      ) : message.role === "tool_result" ? (
                        /* Standalone tool result (if no matching request) */
                        <ToolCard
                          name={message.name}
                          args={{}}
                          result={message.content}
                        />
                      ) : (
                        /* AI message - markdown rendered */
                        <div className="prose prose-neutral prose-sm max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                              // Custom components for better styling
                              p: ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>,
                              ul: ({ children }) => <ul className="list-disc pl-4 mb-3 space-y-1">{children}</ul>,
                              ol: ({ children }) => <ol className="list-decimal pl-4 mb-3 space-y-1">{children}</ol>,
                              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                              code: ({ className, children, ...props }) => {
                                const isInline = !className;
                                return isInline ? (
                                  <code className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                                    {children}
                                  </code>
                                ) : (
                                  <code className={`${className} block bg-neutral-900 text-neutral-100 p-3 rounded-lg overflow-x-auto text-sm`} {...props}>
                                    {children}
                                  </code>
                                );
                              },
                              pre: ({ children }) => <pre className="mb-3 overflow-hidden rounded-lg">{children}</pre>,
                              a: ({ href, children }) => (
                                <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                  {children}
                                </a>
                              ),
                              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                              blockquote: ({ children }) => (
                                <blockquote className="border-l-2 border-neutral-300 pl-4 italic text-neutral-600 my-3">
                                  {children}
                                </blockquote>
                              ),
                              h1: ({ children }) => <h1 className="text-xl font-bold mt-4 mb-2">{children}</h1>,
                              h2: ({ children }) => <h2 className="text-lg font-bold mt-4 mb-2">{children}</h2>,
                              h3: ({ children }) => <h3 className="text-base font-bold mt-3 mb-2">{children}</h3>,
                              table: ({ children }) => (
                                <div className="overflow-x-auto mb-3">
                                  <table className="min-w-full border border-neutral-200 rounded-lg overflow-hidden">{children}</table>
                                </div>
                              ),
                              th: ({ children }) => <th className="bg-neutral-100 px-3 py-2 text-left font-medium border-b border-neutral-200">{children}</th>,
                              td: ({ children }) => <td className="px-3 py-2 border-b border-neutral-100">{children}</td>,
                            }}
                          >
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Processing indicator */}
              <AnimatePresence>
                {isProcessing && pendingToolCalls.size === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-neutral-400 mb-4"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Đang suy nghĩ...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input area - simple, clean */}
        <div className="flex-shrink-0 px-4 pb-4 pt-2 border-t border-neutral-100">
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden focus-within:border-neutral-300 focus-within:bg-white transition-all">
              <div className="px-4 pt-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Nhập tin nhắn..."
                  rows={1}
                  disabled={isProcessing}
                  className="w-full bg-transparent text-neutral-800 placeholder-neutral-400 resize-none focus:outline-none text-[15px] leading-relaxed disabled:opacity-50"
                  style={{ 
                    minHeight: "24px", 
                    maxHeight: "200px",
                    height: "auto"
                  }}
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = Math.min(target.scrollHeight, 200) + "px";
                  }}
                />
              </div>
              
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer">
                    <Plus className="w-4 h-4 text-neutral-400" />
                  </button>
                  <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer">
                    <Clock3 className="w-4 h-4 text-neutral-400" />
                  </button>
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isProcessing}
                  className="p-2 bg-neutral-800 hover:bg-neutral-700 disabled:bg-neutral-200 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                >
                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 text-white animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
            </div>
            
            <p className="text-center text-[11px] text-neutral-400 mt-2">
              AI có thể mắc lỗi. Hãy kiểm tra thông tin quan trọng.
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
