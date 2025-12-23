export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "NumPy", "Pandas", "LlamaIndex", "RAG", "Deep Learning", "NLP"],
  },
  {
    category: "Java Development",
    skills: ["GUI Development", "Swing", "Spring", "Spring Boot"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Vercel", "Jupyter", "OpenCV"],
  },
  {
    category: "Data Structures & Algorithms",
    skills: ["Stacks", "Queues", "Hash Maps", "Arrays", "Trees", "BFS", "DFS", "Sorting Algorithms"],
  },
];
