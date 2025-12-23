export interface Project {
  id: string;
  title: string;
  description: string;
  github: string;
  tags: string[];
  highlights?: string[];
  priority: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string[];
  skills?: string[];
  subRoles?: {
    title: string;
    startDate: string;
    endDate: string;
    duration: string;
  }[];
}

export interface Award {
  id: string;
  title: string;
  type: 'award' | 'certificate';
  issuer?: string;
  date?: string;
  description?: string;
}

export const profile = {
  name: "Sahil Regonda",
  location: "Toronto, Ontario",
  citizenship: "USA & Canada",
  university: "University of Toronto",
  degree: "B.S. Computer Science and Mathematics",
  gpa: "3.87",
  graduation: "Expected May 2027",
  email: "sahilregonda@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/sahilregonda/",
  github: "https://github.com/Shmy1234",
  tagline: "Building digital experiences with code & creativity",
  intro: "I'm Sahil, upcoming ML Engineer and Software Engineer",
  skillCategories: [
    {
      category: "Web Development",
      items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express.js", "React.js", "Next.js"]
    },
    {
      category: "Java & Backend",
      items: ["Java", "Hibernate", "SQL", "Spring", "Spring Boot"]
    },
    {
      category: "DevOps & Cloud",
      items: ["Linux", "AWS", "Version Control (Git)", "CI/CD (GitHub Actions)", "IaC (Terraform)", "Containerization (Docker)", "Orchestration (Kubernetes)"]
    },
    {
      category: "Core Skills",
      items: ["Design Patterns", "Machine Learning", "Deep Learning", "System Design", "Data Structures & Algorithms"]
    }
  ],
};

export const projects: Project[] = [
  {
    id: "trial-of-knight",
    title: "Trial of the Knight",
    description: "Python 2D platformer where you guide a lone knight through obstacles and magic terrain—dodging traps, solving puzzles, and proving your worth.",
    github: "https://github.com/Shmy1234/Trial-of-The-Knight-2",
    tags: ["Python", "Pygame", "Game Dev"],
    highlights: [
      "Modular architecture (main.py loop, game.py logic/entities)",
      "Game states (title, gameplay, pause, victory, defeat)",
      "Combat + stamina system",
      "Traps/keys/levers/puzzles",
      "Reactive enemies + collision combat",
      "Optional Pygame music/SFX",
    ],
    priority: 1,
  },
  {
    id: "astar-visualizer",
    title: "A* Pathfinding Visualizer",
    description: "Java Swing app that visualizes A* pathfinding on a grid with obstacles, start/goal, and step-by-step exploration.",
    github: "https://github.com/Shmy1234/A-star-Pathfinding-Visualizer",
    tags: ["Java", "Swing", "Algorithms"],
    highlights: [
      "Interactive grid editor",
      "Visual open/closed sets + final path",
      "Manhattan heuristic default",
      "Clear state coloring",
    ],
    priority: 2,
  },
  {
    id: "javafx-paint",
    title: "JavaFX Paint Program (MVC)",
    description: "JavaFX paint app with shape drawing/editing, styling, selection/multiselect, clipboard ops, undo/redo, and Import Image as drawable.",
    github: "https://github.com/Shmy1234/JavaFX-Paint-Program-MVC",
    tags: ["Java", "JavaFX", "MVC", "Desktop App"],
    highlights: [
      "Shape drawing and editing",
      "Selection and multiselect",
      "Clipboard operations",
      "Undo/Redo functionality",
      "Image import feature",
    ],
    priority: 3,
  },
  {
    id: "skillsnapai",
    title: "SkillSnapAI",
    description: "AI resume analysis web app providing ATS scoring, feedback, and actionable tips for job seekers.",
    github: "https://github.com/Shmy1234/SkillSnapAI",
    tags: ["React", "TypeScript", "AI/ML", "Tailwind"],
    highlights: [
      "Real-time resume parsing",
      "ATS scoring system",
      "Actionable feedback",
      "100+ resumes analyzed",
    ],
    priority: 4,
  },
  {
    id: "accessigo",
    title: "AccessiGo",
    description: "Web app highlighting accessible building entrances on University of Windsor campus map; focuses on outdoor accessibility with plans for indoor navigation.",
    github: "https://github.com/AccessiGo/AccessiGo",
    tags: ["React", "Next.js", "Flask", "TensorFlow"],
    highlights: [
      "Custom ML data pipeline (1000+ images)",
      "Secure authorization system",
      "Campus accessibility mapping",
    ],
    priority: 5,
  },
  {
    id: "othello",
    title: "Othello Automated Player",
    description: "Othello/Reversi with Human/Random/Greedy controllers to compare strategies and test first-vs-second advantage.",
    github: "https://github.com/Shmy1234/Othello-Automated-Player-Experiments",
    tags: ["Python", "AI", "Game Theory"],
    priority: 6,
  },
  {
    id: "runner-dungeon",
    title: "Runner — 2D Platformer",
    description: "Java 2D runner/platformer with a clean loop and separation of rendering/input/gameplay.",
    github: "https://github.com/Shmy1234/Runner-Dungeon",
    tags: ["Java", "Game Dev"],
    priority: 7,
  },
];

export const experiences: Experience[] = [
  {
    id: "pash-motors",
    title: "Software Developer",
    company: "PashMotors",
    location: "Toronto, Ontario",
    startDate: "Oct 2025",
    endDate: "Present",
    duration: "Ongoing",
    description: [
      "Reviewed and refactored frontend code for performance, readability, and maintainability",
      "Added unit tests with Jest and integrated new features across Node.js/Next.js services",
      "Collaborated on CI checks to keep the main branch green and enforce coding standards",
    ],
    skills: ["Next.js", "Node.js", "React", "Jest", "Git"],
  },
  {
    id: "extern",
    title: "Extern, Outamation: AI-Powered Workflow Automation",
    company: "Extern",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    duration: "3 mos",
    description: [
      "Built doc-AI pipelines for mortgage PDFs: OCR (Tesseract/PaddleOCR) → PDF parsing (PyMuPDF) → JSON/CSV extraction",
      "Implemented LlamaIndex RAG with chunk/metadata tuning; compared open-source LLMs",
      "Improved scan-quality and fail-safes; built notebooks for extraction/cleaning",
      "Shipped demo UI for ingestion/Q&A and lightweight Gemini chatbot; added evaluation harness",
    ],
    skills: ["Python", "OCR", "RAG", "LLMs", "LlamaIndex"],
  },
  {
    id: "kenilworth",
    title: "Software Engineer",
    company: "KenilWorth Square",
    location: "Windsor, Ontario",
    startDate: "May 2025",
    endDate: "Aug 2025",
    duration: "4 mos",
    description: [
      "Ship and maintain Next.js + Tailwind pages for plaza businesses and admin dashboard",
      "Supporting 10+ stores and ~1,000 monthly visitors",
      "Implement auth flows and SSR-compatible session handling with Java/Spring Boot",
    ],
    skills: ["Next.js", "Tailwind CSS", "Java", "Spring Boot", "REST"],
  },
  {
    id: "circle-k",
    title: "Software Developer",
    company: "Ontario Inc. (Circle K 751 Front Rd, LaSalle)",
    startDate: "Jan 2022",
    endDate: "Feb 2025",
    duration: "3 yrs 1 mo",
    description: [
      "Built store microsite for Circle-K × DoorDash launch with interactive map iframes",
      "Maintained onsite PCs and peripherals; diagnosed issues and coordinated fixes",
      "Documented setup/usage procedures to reduce recurring support needs",
    ],
    skills: ["HTML/CSS/JS", "Figma", "Canva", "Windows Admin"],
    subRoles: [
      { title: "IT Manager", startDate: "Jan 2022", endDate: "Nov 2023", duration: "1 yr 11 mos" },
      { title: "Software Engineer", startDate: "Dec 2023", endDate: "Jun 2024", duration: "7 mos" },
      { title: "Lead Software Engineer", startDate: "Jul 2024", endDate: "Feb 2025", duration: "8 mos" },
    ],
  },
  {
    id: "stickery",
    title: "Full-Stack Developer",
    company: "Stickery Delivery",
    location: "Canada",
    startDate: "Sep 2020",
    endDate: "Jun 2024",
    duration: "3 yrs 10 mos",
    description: [
      "Led migration from static HTML/CSS/JS to React/Next.js with modern layout",
      "Implemented secure Authorization page using Next.js server components",
      "Containerized services with Docker; piloted Kubernetes-based integration",
    ],
    skills: ["React", "Next.js", "Node.js", "Docker", "Kubernetes"],
  },
  {
    id: "youreka",
    title: "Marketing Analyst",
    company: "Youreka Canada",
    startDate: "Mar 2022",
    endDate: "Present",
    duration: "Ongoing",
    description: [
      "Managed website and social media with a team",
      "Created marketing materials and visual content",
    ],
    skills: ["Canva", "Figma", "Marketing", "Social Media"],
  },
  {
    id: "investigator",
    title: "High School Investigator",
    company: "Youreka Canada",
    location: "Windsor, Ontario",
    startDate: "Dec 2021",
    endDate: "Jun 2023",
    duration: "1 yr 7 mos",
    description: [
      "Designed and conducted original scientific research in health, biology, and social impact domains",
      "1st Place (Regional), 2022: Research on COVID-19 natural vs artificial immunity",
      "3rd Place (Regional), 2023: Analysis of SSRIs' effect on mental health",
    ],
    skills: ["Research", "R", "Data Analysis"],
  },
  {
    id: "ai-scholar",
    title: "AI Scholar",
    company: "Inspirit AI",
    startDate: "Jun 2022",
    endDate: "Jul 2023",
    duration: "1 yr 2 mos",
    description: [
      "Implemented and analyzed NN, RNN, CNN, NLP, LLMs, transformers, autoencoders",
      "Built exoplanet classifier with TensorFlow + scikit-learn",
      "Built AI chatbots inspired by ELIZA/Alexa/GPT-4 using TensorFlow",
    ],
    skills: ["TensorFlow", "scikit-learn", "Python", "Deep Learning"],
  },
];

export const awards: Award[] = [
  {
    id: "aws-ai",
    title: "AWS AI Practitioner",
    type: "certificate",
    issuer: "Amazon Web Services",
  },
  {
    id: "aws-cloud",
    title: "AWS Cloud Practitioner",
    type: "certificate",
    issuer: "Amazon Web Services",
  },
  {
    id: "ai-scholar-cert",
    title: "AI Scholar",
    type: "certificate",
    issuer: "Inspirit AI",
    description: "Completed comprehensive AI/ML mentorship program",
  },
  {
    id: "youreka-award",
    title: "Youreka Research Awards",
    type: "award",
    issuer: "Youreka Canada",
    description: "1st Place (2022) & 3rd Place (2023) Regional Science Research",
  },
];

export const chatbotKnowledge = {
  summary: `Sahil Regonda is a Computer Science and Mathematics student at the University of Toronto with a 3.87 GPA. He has dual USA & Canada citizenship and is based in Toronto, Ontario. His goal is to always challenge himself and explore opportunities. He's skilled in Java, Python, Web Development, AI/ML, and has experience with frameworks like React, Next.js, Spring Boot, and TensorFlow.`,
  
  skills: `Sahil's technical skills include:
- Languages: Java (JavaFX, Spring Boot), Python, TypeScript, JavaScript
- Frontend: React, Next.js, Tailwind CSS, HTML/CSS
- Backend: Node.js, Express.js, Spring Boot
- AI/ML: TensorFlow, scikit-learn, LLMs, RAG, OCR
- Tools: Git, Docker, Kubernetes, Postman, Jenkins
- Design: Figma, Canva`,

  projects: `Sahil's notable projects include:
1. Trial of the Knight - Python 2D platformer with combat and puzzles
2. A* Pathfinding Visualizer - Java Swing algorithm visualization
3. SkillSnapAI - AI-powered resume analyzer with ATS scoring
4. AccessiGo - Campus accessibility web app with ML
5. JavaFX Paint Program - Full-featured paint application
6. Othello AI - Strategy comparison experiments`,

  experience: `Sahil's professional experience:
- Software Developer at PashMotors (current)
- AI Extern at Outamation (RAG, OCR pipelines)
- Software Engineer at KenilWorth Square
- Lead Software Engineer at Circle K
- Full-Stack Developer at Stickery Delivery (3+ years)
- Marketing Analyst at Youreka Canada`,

  contact: `You can reach Sahil at:
- Email: sahilregonda@mail.utoronto.ca
- LinkedIn: linkedin.com/in/sahilregonda
- GitHub: github.com/Shmy1234`,

  education: `Sahil is pursuing a B.S. in Computer Science and Mathematics at the University of Toronto, expected graduation May 2027, with a GPA of 3.87 and Dean's List recognition.`,
};

export const suggestedPrompts = [
  "Summarize Sahil's background",
  "What are his best projects for an internship?",
  "What's his AI/ML experience?",
  "How can I contact Sahil?",
  "What programming languages does he know?",
  "Tell me about his work experience",
];
