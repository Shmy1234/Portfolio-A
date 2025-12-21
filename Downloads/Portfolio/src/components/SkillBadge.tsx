import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        primary: "bg-primary/10 text-primary border border-primary/20",
        accent: "bg-accent text-accent-foreground",
        outline: "border border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
        ghost: "text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SkillBadgeProps extends VariantProps<typeof badgeVariants> {
  skill: string;
  className?: string;
}

export function SkillBadge({ skill, variant, className }: SkillBadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      {skill}
    </span>
  );
}

interface SkillBadgeListProps {
  skills: string[];
  variant?: VariantProps<typeof badgeVariants>["variant"];
  className?: string;
  maxDisplay?: number;
}

export function SkillBadgeList({ skills, variant = "outline", className, maxDisplay }: SkillBadgeListProps) {
  const displaySkills = maxDisplay ? skills.slice(0, maxDisplay) : skills;
  const remaining = maxDisplay ? skills.length - maxDisplay : 0;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {displaySkills.map((skill) => (
        <SkillBadge key={skill} skill={skill} variant={variant} />
      ))}
      {remaining > 0 && (
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
          +{remaining} more
        </span>
      )}
    </div>
  );
}
