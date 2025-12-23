import { Badge } from "@/components/ui/badge";
import type { Experience as ExperienceType } from "@/data/experience";

interface TimelineProps {
  experiences: ExperienceType[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8">
      {experiences.map((exp, expIndex) => (
        <div key={expIndex} className="relative pl-8 border-l-2 border-border">
          {/* Company header */}
          <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
            <p className="text-sm text-muted-foreground">{exp.period}</p>
          </div>

          {/* Roles */}
          <div className="space-y-6">
            {exp.roles.map((role, roleIndex) => (
              <div key={roleIndex} className="relative">
                {roleIndex > 0 && (
                  <div className="absolute left-[-32px] top-2 w-2 h-2 -translate-x-[1px] rounded-full bg-muted-foreground/50" />
                )}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <h4 className="font-medium text-foreground">{role.title}</h4>
                    <Badge variant="outline" className="w-fit text-xs">
                      {role.period}
                    </Badge>
                  </div>
                  <ul className="space-y-1.5">
                    {role.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          {exp.tech && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">Tech:</span> {exp.tech}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
