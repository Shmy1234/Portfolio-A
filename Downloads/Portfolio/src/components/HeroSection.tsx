import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";
import { useState } from "react";
import { toast } from "sonner";

export function HeroSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    const emailLink = personal.socialLinks.find((l) => l.platform === "email");
    if (emailLink) {
      navigator.clipboard.writeText(emailLink.url);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const iconMap = {
    linkedin: Linkedin,
    github: Github,
    email: Mail,
  };

  return (
    <Section id="hero" fullHeight className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full gradient-blob opacity-20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full gradient-blob opacity-10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Info chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <GraduationCap className="h-4 w-4 text-primary" />
                {personal.chips[0]}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <MapPin className="h-4 w-4 text-primary" />
                {personal.chips[1]}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              {personal.headline.split("Sahil")[0]}
              <span className="gradient-text">Sahil</span>.
            </motion.h1>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              {personal.statement}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {personal.socialLinks.map((link) => {
                const Icon = iconMap[link.platform];
                const isEmail = link.platform === "email";

                if (isEmail) {
                  return (
                    <div key={link.platform} className="flex gap-2">
                      <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="gap-2 hover:border-primary hover:text-primary"
                      >
                        <a href={`mailto:${link.url}`}>
                          <Icon className="h-5 w-5" />
                          {link.label}
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={copyEmail}
                        className="hover:text-primary"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  );
                }

                return (
                  <Button
                    key={link.platform}
                    variant="outline"
                    size="lg"
                    asChild
                    className="gap-2 hover:border-primary hover:text-primary"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Portrait Placeholder - Abstract blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 gradient-blob rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />
              
              {/* Main blob container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl gradient-blob p-1 animate-float">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-2">
                      S
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground font-medium">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-accent backdrop-blur-sm border border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
