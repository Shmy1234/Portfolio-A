import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SkillBadgeList } from "@/components/SkillBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative h-full rounded-2xl border border-border bg-card p-6 md:p-8",
          "transition-all duration-300 ease-out",
          "hover:border-primary/30 hover:shadow-card hover:-translate-y-1",
          "flex flex-col"
        )}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
            {project.description}
          </p>

          {/* Contributions if any */}
          {project.contributions && project.contributions.length > 0 && (
            <ul className="mb-4 space-y-2">
              {project.contributions.map((contribution, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {contribution}
                </li>
              ))}
            </ul>
          )}

          {/* Skills */}
          <SkillBadgeList skills={project.skills} className="mb-6" maxDisplay={5} />

          {/* Actions */}
          <div className="flex gap-3 mt-auto">
            {project.link && !project.linkDisabled ? (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="gap-2 group/btn hover:border-primary hover:text-primary"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Code
                  <ExternalLink className="h-3 w-3 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                </a>
              </Button>
            ) : project.linkDisabled ? (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="gap-2 opacity-50"
              >
                {project.linkLabel || "Coming Soon"}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
