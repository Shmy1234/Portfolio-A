import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.priority <= 6);

  return (
    <section id="projects" className="py-12 scroll-mt-nav relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary section-heading">
            Projects
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            A gallery of my work — each piece tells a story of problem-solving and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                isExpanded={expandedProject === project.id}
                onToggleExpand={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id
                  )
                }
              />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 border-paint-sienna/50 hover:bg-paint-gold/10"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show More Projects
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

function ProjectCard({ project, isExpanded, onToggleExpand }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="painted-card oil-frame h-full flex flex-col"
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-primary mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-foreground/70 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                i % 3 === 0
                  ? "bg-paint-gold/20 text-paint-navy"
                  : i % 3 === 1
                  ? "bg-paint-teal/20 text-paint-teal"
                  : "bg-paint-sienna/20 text-paint-sienna"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights (Expandable) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <button
              onClick={onToggleExpand}
              className="text-xs font-medium text-accent hover:text-paint-sienna transition-colors flex items-center gap-1"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Hide Highlights
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  Show Highlights
                </>
              )}
            </button>

            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 space-y-1"
              >
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-xs text-foreground/60 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-paint-gold mt-1.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        )}

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-paint-sienna transition-colors mt-auto"
        >
          <ExternalLink className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
}
