// Safe Chat Tool Component
// Chat interface with cheating prevention and learning focus

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Lightbulb, User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSafeChat } from "@/hooks/useAITools";
import { TypingIndicator } from "@/components/ui/TypingIndicator";
import type { ChatMessage } from "@/types/ai-tools";

export function SafeChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { mutate, isPending } = useSafeChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isPending]);

  const handleSend = () => {
    if (!input.trim() || isPending) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    mutate(
      {
        message: input.trim(),
        context: "homework",
        previousMessages: messages,
      },
      {
        onSuccess: (response) => {
          const assistantMessage: ChatMessage = {
            role: "assistant",
            content: response.message,
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, assistantMessage]);
        },
        onError: () => {
          const errorMessage: ChatMessage = {
            role: "assistant",
            content: "Lo siento, ocurrio un error. Intenta de nuevo.",
            timestamp: Date.now(),
          };
          setMessages((prev) => [...prev, errorMessage]);
        },
      }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Explicame que es una ecuacion",
    "Como puedo mejorar mi comprension lectora?",
    "Dame un ejemplo de fotosintesis",
    "Ayudame a entender las fracciones",
  ];

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" />
          Ayudante de Tareas
        </h3>
        <p className="text-sm text-muted-foreground">
          Preguntame sobre tus estudios. Recuerda: te ayudo a APRENDER, no a copiar.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-bounce-loop">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Como puedo ayudarte?</h4>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Soy tu asistente de estudio. Puedo explicarte conceptos, ayudarte a entender problemas y guiarte en tu aprendizaje.
            </p>

            {/* Suggested Questions */}
            <div className="space-y-2 w-full max-w-sm">
              <p className="text-xs text-muted-foreground">Prueba preguntar:</p>
              {suggestedQuestions.map((question, index) => (
                <button
                  key={question}
                  onClick={() => setInput(question)}
                  className={cn(
                    "w-full text-left text-sm p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all text-muted-foreground hover:text-foreground hover:translate-x-1 opacity-0 animate-slide-up",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 animate-scale-in">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl p-3",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground chat-message-user"
                      : "bg-muted chat-message-assistant"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 animate-scale-in">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isPending && (
              <div className="flex gap-3 justify-start animate-message-in">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Tip Banner */}
      <div className="px-4 py-2 bg-salvora-orange/10 border-t border-salvora-orange/20">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lightbulb className="w-4 h-4 text-salvora-orange shrink-0 animate-pulse-subtle" />
          <span>Tip: Pide explicaciones en lugar de respuestas directas para aprender mejor.</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta..."
            rows={1}
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary input-glow resize-none transition-all"
          />
          <Button
            onClick={handleSend}
            disabled={isPending || !input.trim()}
            className="shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <Send className={cn(
              "w-4 h-4 transition-transform",
              input.trim() && !isPending && "animate-bounce-small"
            )} />
          </Button>
        </div>
      </div>
    </div>
  );
}
