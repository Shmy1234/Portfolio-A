import { Badge } from "@/components/ui/badge";
import type { SkillCategory } from "@/data/skills";

interface SkillTagGroupProps {
  categories: SkillCategory[];
}

export function SkillTagGroup({ categories }: SkillTagGroupProps) {
  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className="text-sm font-semibold text-foreground mb-3">
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="text-sm font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
