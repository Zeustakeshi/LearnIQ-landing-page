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
    Clock,
    Clock3,
    Plus,
    Send,
    Sparkles
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

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

const mockResponses = [
  "Xin chào! Rất vui được gặp bạn. Bạn có cần tôi giúp đỡ điều gì hôm nay không?",
  "Mình hiểu rồi! Để mình giải thích cho bạn nhé. Đây là một chủ đề thú vị và mình sẽ cố gắng giải thích một cách dễ hiểu nhất.",
  "Câu hỏi hay đấy! Theo những gì mình biết, có một vài điểm quan trọng cần lưu ý...",
  "Mình có thể giúp bạn với điều này! Trước tiên, hãy cùng phân tích vấn đề nhé...",
];

export default function DemoChatPage() {
  const { user, isLoaded } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | undefined>();
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
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
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
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

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
        <div className="animate-pulse flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
          <span className="text-[var(--color-text-muted)]">Đang tải...</span>
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
      <SidebarInset className="bg-[var(--color-bg)] flex flex-col h-screen">
        {/* Header with trigger */}
        <header className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] flex-shrink-0">
          <SidebarTrigger className="cursor-pointer" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="font-medium text-[var(--color-text)]">Bạn học ảo</span>
          </div>
        </header>

        {/* Chat area - scrollable */}
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 mb-6">
                  <Sparkles className="w-8 h-8 text-[var(--color-accent)]" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text)] mb-2">
                  {getGreeting()}, {user?.firstName || "bạn"}
                </h1>
                <p className="text-lg text-[var(--color-text-muted)] mb-8">
                  Mình có thể giúp gì cho bạn hôm nay?
                </p>

                {/* Quick actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { icon: BookOpen, text: "Giải thích bài học" },
                    { icon: Clock, text: "Lập kế hoạch học tập" },
                  ].map((action, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(action.text)}
                      className="flex items-center gap-3 p-4 bg-[var(--color-card-bg)] hover:bg-white border border-[var(--color-border)] rounded-xl text-left transition-colors group cursor-pointer"
                    >
                      <action.icon className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-text)]">{action.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            /* Messages - Claude style */
            <div className="max-w-3xl mx-auto py-6 px-4">
              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6"
                  >
                    {message.role === "user" ? (
                      /* User message - bubble aligned right */
                      <div className="flex justify-end">
                        <div className="max-w-[85%] bg-white text-[var(--color-text)] px-4 py-2.5 rounded-2xl rounded-br-sm shadow-sm border border-[var(--color-border)]">
                          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        </div>
                      </div>
                    ) : (
                      /* AI message - just text with avatar, no bubble */
                      <div className="flex gap-3">
                        <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0 mt-1">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[var(--color-text)] whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3 mb-6"
                  >
                    <div className="w-7 h-7 rounded-full bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex gap-1.5 py-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-muted)]"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.2,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input area - Claude style */}
        <div className="flex-shrink-0 px-4 pb-4 pt-2">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[var(--color-card-bg)] border border-[var(--color-border)] rounded-2xl shadow-sm overflow-hidden focus-within:border-[var(--color-text-muted)] transition-colors">
              {/* Input field */}
              <div className="px-4 pt-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Trả lời..."
                  rows={1}
                  className="w-full bg-transparent text-[var(--color-text)] placeholder-[var(--color-text-muted)] resize-none focus:outline-none text-[15px] leading-relaxed"
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
              
              {/* Actions bar */}
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-[var(--color-bg)] rounded-lg transition-colors cursor-pointer">
                    <Plus className="w-4 h-4 text-[var(--color-text-muted)]" />
                  </button>
                  <button className="p-2 hover:bg-[var(--color-bg)] rounded-lg transition-colors cursor-pointer">
                    <Clock3 className="w-4 h-4 text-[var(--color-text-muted)]" />
                  </button>
                </div>
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="p-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            
            <p className="text-center text-[11px] text-[var(--color-text-muted)] mt-2">
              Đây là bản demo. Phản hồi được tạo tự động.
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
