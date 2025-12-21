import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { getPortfolioContext, portfolioData, getAllSkills } from "@/data/portfolio";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const quickSuggestions = [
  "Summarize Sahil",
  "What projects has he done?",
  "What skills does he have?",
  "What's his experience with AI?",
];

// Local fallback logic for answering questions about the portfolio
function generateLocalResponse(query: string): string {
  const q = query.toLowerCase();
  const { personal, projects, experiences } = portfolioData;
  const allSkills = getAllSkills();

  // Summarize Sahil
  if (q.includes("summarize") || q.includes("about") || q.includes("who is") || q.includes("tell me about")) {
    return `${personal.name} is an upcoming software engineer studying at the ${personal.chips[0]}. ${personal.statement}\n\nHe has worked on ${projects.length} notable projects and has experience across ${experiences.length} different roles, ranging from AI research to web development and IT management. His skills span across full-stack development, machine learning, and research.`;
  }

  // Projects
  if (q.includes("project")) {
    const projectList = projects
      .map((p) => `• **${p.title}**: ${p.description.slice(0, 100)}...`)
      .join("\n");
    return `Sahil has worked on ${projects.length} projects:\n\n${projectList}`;
  }

  // Skills
  if (q.includes("skill")) {
    const topSkills = allSkills.slice(0, 20).join(", ");
    return `Sahil has a diverse skill set including: ${topSkills}, and ${allSkills.length - 20} more. His strongest areas are in Python, JavaScript/TypeScript, React, AI/ML, and Java.`;
  }

  // AI experience
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml")) {
    const aiExperiences = experiences.filter(
      (e) =>
        e.skills.some((s) => s.toLowerCase().includes("ai") || s.toLowerCase().includes("tensorflow") || s.toLowerCase().includes("python")) ||
        e.company.toLowerCase().includes("inspirit") ||
        e.company.toLowerCase().includes("outamation")
    );
    const details = aiExperiences
      .map((e) => `• **${e.company}** (${e.roles[0].title}): ${e.summary || e.bullets?.[0] || "AI-related work"}`)
      .join("\n");
    return `Sahil has significant AI/ML experience:\n\n${details}\n\nHe's worked with TensorFlow, scikit-learn, LlamaIndex, RAG pipelines, NLP, and various deep learning architectures.`;
  }

  // Experience
  if (q.includes("experience") || q.includes("work") || q.includes("job")) {
    const expList = experiences
      .slice(0, 5)
      .map((e) => `• **${e.roles[0].title}** at ${e.company} (${e.roles[0].dates})`)
      .join("\n");
    return `Sahil has ${experiences.length} professional experiences. Some highlights:\n\n${expList}\n\n...and more!`;
  }

  // Education
  if (q.includes("education") || q.includes("university") || q.includes("school") || q.includes("study")) {
    return `Sahil is currently studying at the ${personal.chips[0]}. He holds USA & Canada citizenship and is based in Toronto, Ontario.`;
  }

  // Contact
  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    const email = personal.socialLinks.find((l) => l.platform === "email")?.url;
    const linkedin = personal.socialLinks.find((l) => l.platform === "linkedin")?.url;
    return `You can reach Sahil at:\n• Email: ${email}\n• LinkedIn: ${linkedin}`;
  }

  // Default - unrelated question
  if (!q.includes("sahil") && !q.includes("portfolio") && !q.includes("he") && !q.includes("his")) {
    return "I can only answer questions about Sahil's portfolio, projects, skills, and experience. Try asking something like 'What projects has Sahil worked on?' or 'What are his skills?'";
  }

  return `I'd be happy to help you learn more about Sahil! Here's a quick overview:\n\n${personal.name} is a software engineer with experience in web development, AI/ML, and research. He's worked on ${projects.length} projects and has ${experiences.length} professional experiences.\n\nTry asking about his specific projects, skills, or AI experience!`;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm here to answer questions about Sahil's portfolio. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate typing delay for local mode
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500));

    const response = generateLocalResponse(messageText);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className={cn(
            "h-14 w-14 rounded-full shadow-glow",
            "bg-primary hover:bg-primary/90",
            "transition-all duration-300",
            isOpen && "scale-0 opacity-0"
          )}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "fixed z-50 bg-card border-l border-border shadow-card",
                "inset-y-0 right-0 w-full sm:w-96 md:w-[420px]",
                "flex flex-col"
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-blob flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chat about Sahil</h3>
                    <p className="text-xs text-muted-foreground">Ask anything about the portfolio</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <ScrollArea ref={scrollRef} className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" && "flex-row-reverse"
                      )}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                          message.role === "assistant"
                            ? "gradient-blob"
                            : "bg-secondary"
                        )}
                      >
                        {message.role === "assistant" ? (
                          <Sparkles className="h-4 w-4 text-primary-foreground" />
                        ) : (
                          <User className="h-4 w-4 text-secondary-foreground" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "rounded-2xl px-4 py-3 max-w-[80%]",
                          message.role === "assistant"
                            ? "bg-muted text-foreground"
                            : "bg-primary text-primary-foreground"
                        )}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full gradient-blob flex items-center justify-center">
                        <Sparkles className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="rounded-2xl px-4 py-3 bg-muted">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              {/* Quick Suggestions */}
              <div className="px-4 py-2 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {quickSuggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSend(suggestion)}
                      disabled={isLoading}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-full",
                        "bg-secondary text-secondary-foreground",
                        "hover:bg-secondary/80 transition-colors",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                      )}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about Sahil..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    onClick={() => handleSend()}
                    disabled={!input.trim() || isLoading}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
