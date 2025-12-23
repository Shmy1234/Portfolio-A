import { useState } from "react";
import { Menu, X, Linkedin, Github, Mail, Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import alanImage from "@/assets/alan.png";

const navLinks = [
  { label: "Summary", href: "#summary" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={alanImage} alt={profile.name} />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-foreground">{profile.name}</span>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Social Icons + Resume + Theme Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2"
              asChild
            >
              <a
                href="/Alan_Lu_Resume.pdf"
                download="Alan_Lu_Resume.pdf"
                aria-label="Download Resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
                <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
                  <a href={`mailto:${profile.email}`} aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2 gap-2" asChild>
                <a href="/Alan_Lu_Resume.pdf" download="Alan_Lu_Resume.pdf" aria-label="Download Resume">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
