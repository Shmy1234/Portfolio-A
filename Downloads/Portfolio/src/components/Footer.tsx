import { Github, Linkedin, Heart } from "lucide-react";
import { Container } from "@/components/Section";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} {personal.firstName}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-primary" /> using React & Tailwind
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personal.socialLinks.find((l) => l.platform === "github")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personal.socialLinks.find((l) => l.platform === "linkedin")?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
