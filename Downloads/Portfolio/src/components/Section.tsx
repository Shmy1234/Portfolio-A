import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullHeight?: boolean;
}

export function Section({ id, className, children, fullHeight = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32",
        fullHeight && "min-h-screen flex items-center",
        className
      )}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("container", className)}>{children}</div>;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
