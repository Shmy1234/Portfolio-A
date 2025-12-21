import { motion } from "framer-motion";
import { Experience } from "@/data/portfolio";
import { SkillBadgeList } from "@/components/SkillBadge";
import { Briefcase, MapPin, Trophy } from "lucide-react";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-px bg-border" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Content */}
      <div className="group">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
          <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary hidden md:block" />
            {experience.company}
          </h3>
        </div>

        {/* Roles */}
        <div className="space-y-4 mb-4">
          {experience.roles.map((role, i) => (
            <div key={i} className="border-l-2 border-muted pl-4 py-1">
              <div className="font-medium text-foreground">{role.title}</div>
              <div className="text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                <span>{role.dates}</span>
                {role.location && (
                  <>
                    <span className="text-border">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        {experience.summary && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.summary}
          </p>
        )}

        {/* Bullets */}
        {experience.bullets && experience.bullets.length > 0 && (
          <ul className="space-y-2 mb-4">
            {experience.bullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary mt-1 shrink-0">→</span>
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-4 p-4 rounded-lg bg-accent/30 border border-accent">
            <div className="flex items-center gap-2 text-sm font-medium text-accent-foreground mb-2">
              <Trophy className="h-4 w-4" />
              Achievements
            </div>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  🏆 {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        <SkillBadgeList skills={experience.skills} maxDisplay={6} />
      </div>
    </motion.div>
  );
}
