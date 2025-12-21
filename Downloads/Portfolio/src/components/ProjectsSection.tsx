import { Section, Container, SectionHeader } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="bg-muted/30">
      <Container>
        <SectionHeader
          title="Projects"
          subtitle="A collection of work that showcases my skills in building interactive and impactful applications."
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
