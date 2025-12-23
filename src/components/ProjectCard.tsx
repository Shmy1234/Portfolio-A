import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader className="pb-3">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg font-semibold leading-tight">
            {project.title}
          </CardTitle>
          <Badge variant="secondary" className="w-fit text-xs">
            {project.date}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {project.highlights.map((highlight, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {project.github && (
          <Button variant="outline" size="sm" asChild className="gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
