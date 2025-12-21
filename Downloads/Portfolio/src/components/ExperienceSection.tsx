import { Section, Container, SectionHeader } from "@/components/Section";
import { TimelineItem } from "@/components/TimelineItem";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <Section id="experience">
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="My professional journey spanning software development, AI research, and technology leadership."
        />

        <div className="max-w-3xl">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
