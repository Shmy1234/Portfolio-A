import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail, Linkedin, Github, Palette, Globe } from "lucide-react";
import { profile } from "@/data/portfolio";
import profileImage from "@/assets/profile.png";
import { PaintCanvas } from "./PaintCanvas";
import { SkillsCarousel } from "./SkillsCarousel";
import { AnimatedProfileRing } from "./AnimatedProfileRing";
export function HeroSection() {
  return (
    <section
      id="summary"
      className="min-h-fit pt-24 pb-8 scroll-mt-nav relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-paint-gold/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-paint-teal/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-paint-sienna/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          {/* Left Column: About Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1"
          >
            <div className="painted-card oil-frame p-4 flex flex-col">
              {/* Profile Header - Compact */}
              <div className="flex items-center gap-3 mb-3">
                <AnimatedProfileRing className="w-16 h-16 shrink-0">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </AnimatedProfileRing>
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-heading text-xl md:text-2xl font-bold text-primary leading-tight"
                  >
                    {profile.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="font-body text-accent text-sm font-medium"
                  >
                    {profile.tagline}
                  </motion.p>
                </div>
              </div>

              {/* Info Row - Horizontal with separators */}
              <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-body font-medium text-foreground">{profile.location}</span>
                </div>
                <span className="text-foreground/40">|</span>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-body font-medium text-foreground">{profile.citizenship}</span>
                </div>
                <span className="text-foreground/40">|</span>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="font-body font-medium text-foreground">{profile.university}</span>
                </div>
                <span className="text-foreground/40">|</span>
                <span className="font-body font-medium text-foreground">{profile.gpa} - Dean's List</span>
              </div>

              {/* Contact Links - Inline */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted hover:bg-accent/10 transition-colors text-xs"
                >
                  <Mail className="w-3 h-3 text-accent" />
                  <span className="font-body text-foreground/80">{profile.email}</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted hover:bg-accent/10 transition-colors text-xs"
                >
                  <Linkedin className="w-3 h-3 text-paint-navy" />
                  <span className="font-body text-foreground/80">LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted hover:bg-accent/10 transition-colors text-xs"
                >
                  <Github className="w-3 h-3 text-foreground" />
                  <span className="font-body text-foreground/80">GitHub</span>
                </a>
              </div>

              {/* Intro Paragraph */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-body text-foreground/70 text-sm leading-relaxed mb-2"
              >
                {profile.intro}
              </motion.p>

              {/* Skills Section - Carousel */}
              <div className="mt-auto">
                <SkillsCarousel />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Paint Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-2"
          >
            <div className="painted-card oil-frame p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Palette className="w-4 h-4 text-paint-sienna" />
                <h2 className="font-heading text-base font-semibold text-primary">
                  Notebook
                </h2>
              </div>
              <div className="flex-1">
                <PaintCanvas />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

