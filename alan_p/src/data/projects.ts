export interface Project {
  title: string;
  date: string;
  highlights: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Winner, GrizzHacks 2023 (Oakland University, Michigan, USA)",
    date: "Mar 2024",
    highlights: [
      "Led planning and development under strict deadlines; awarded certificate signed by Congress.",
      "Built AI-powered text summarizer for uploaded PDFs/videos/media → concise topic summaries.",
      "Generated quiz questions automatically and built interactive quiz cards with JavaScript.",
    ],
  },
  {
    title: "No Name Bot",
    date: "Nov 2024 to Present",
    highlights: [
      '"Sassy AI chatbot that talks back."',
      "Trained/fine-tuned role-playing chatbot using TensorFlow and PyTorch.",
      "Integrated GPT APIs and moved toward LLaMA models for cost efficiency.",
      "Web app built with Next.js + Tailwind, deployed on Vercel.",
    ],
  },
  {
    title: "RuneSage",
    date: "2025 to Present",
    highlights: [
      "Top-down dungeon RPG in Java Swing with infinite auto-generated nodes/terrains.",
      'Building advanced data structures, including a "hexally linked list" map structure.',
      "Teleportation mechanic supported by the hex-linked-list data structure.",
    ],
  },
];
