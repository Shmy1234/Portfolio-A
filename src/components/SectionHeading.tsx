interface SectionHeadingProps {
  title: string;
  id?: string;
}

export function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="text-2xl sm:text-3xl font-bold text-foreground mb-8 scroll-mt-24"
    >
      {title}
    </h2>
  );
}
