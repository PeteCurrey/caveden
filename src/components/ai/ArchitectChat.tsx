"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Loader2, Minimize2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ArchitectChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Welcome to the CaveDen Architectural Lab. I am The Architect. How can I help you engineer your perfect garden space today?" 
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const chatRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.content) {
        setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] font-dm-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brass text-obsidian rounded-none flex items-center justify-center shadow-2xl hover:bg-amber transition-all group relative"
        >
          <div className="absolute inset-0 border border-white/20 scale-110 group-hover:scale-125 transition-transform duration-500" />
          <MessageSquare className="w-6 h-6" />
          <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-brass animate-pulse" />
        </button>
      ) : (
        <div 
          ref={chatRef}
          className={cn(
            "bg-slate-900 border border-slate-800 shadow-2xl flex flex-col transition-all duration-500 overflow-hidden",
            isMinimized ? "w-80 h-16" : "w-[400px] h-[600px] max-h-[80vh]"
          )}
        >
          {/* Header */}
          <div className="bg-slate-800 p-4 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brass flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-obsidian" />
              </div>
              <div>
                <div className="text-white font-bold text-sm font-syne uppercase tracking-wider">The Architect</div>
                {!isMinimized && <div className="text-[10px] text-brass uppercase font-dm-mono">Claude 3.5 Sonnet</div>}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-steel hover:text-white p-1"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-steel hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth scrollbar-thin scrollbar-thumb-slate-700"
              >
                {messages.map((m, i) => (
                  <div 
                    key={i}
                    className={cn(
                      "flex flex-col gap-2 max-w-[85%]",
                      m.role === "user" ? "ml-auto items-end" : "items-start"
                    )}
                  >
                    <div className={cn(
                      "p-4 text-sm leading-relaxed",
                      m.role === "user" 
                        ? "bg-brass text-obsidian" 
                        : "bg-slate-800 text-concrete border border-slate-700"
                    )}>
                      {m.content}
                    </div>
                    <span className="text-[10px] text-steel uppercase font-dm-mono">
                      {m.role === "user" ? "Client" : "Architect"}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-3 text-steel">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-[10px] font-dm-mono uppercase tracking-widest">Architect is thinking...</span>
                  </div>
                )}
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 bg-slate-950 border-t border-slate-800">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about planning, systems, or specs..."
                    className="w-full bg-slate-900 border border-slate-800 py-3 pl-4 pr-12 text-white text-sm focus:outline-none focus:border-brass transition-colors"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-brass disabled:opacity-30"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}
