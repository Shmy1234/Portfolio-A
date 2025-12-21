export interface SocialLink {
  platform: "linkedin" | "github" | "email";
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  contributions?: string[];
  skills: string[];
  link?: string;
  linkDisabled?: boolean;
  linkLabel?: string;
}

export interface Experience {
  id: string;
  company: string;
  roles: {
    title: string;
    dates: string;
    location?: string;
  }[];
  summary?: string;
  bullets?: string[];
  achievements?: string[];
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    headline: string;
    statement: string;
    chips: string[];
    socialLinks: SocialLink[];
  };
  projects: Project[];
  experiences: Experience[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sahil Regonda",
    firstName: "Sahil",
    headline: "Hi, I am Sahil.",
    statement:
      "My goal is to always challenge myself and explore any opportunity that the world presents me.",
    chips: [
      "University of Toronto",
      "Toronto, Ontario | USA & Canada Citizenship",
    ],
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/sahilregonda/",
        label: "LinkedIn",
      },
      {
        platform: "github",
        url: "https://github.com/Shmy1234",
        label: "GitHub",
      },
      {
        platform: "email",
        url: "sahil.regonda@mail.utoronto.ca",
        label: "Email",
      },
    ],
  },
  projects: [
    {
      id: "pathfinder",
      title: "A* Pathfinding Visualizer",
      description:
        "An A* visualizer built a Java-based interactive application that demonstrates how heuristic search finds an optimal path on a grid. You can place obstacles, set start and goal nodes, and watch A* explore the grid in real time.",
      skills: ["Java", "Java Swing", "Algorithms", "Data Structures"],
      link: "https://github.com/Shmy1234/A-star-Pathfinding-Visualizer",
    },
    {
      id: "accessigo",
      title: "AccessiGo",
      description:
        "Worked with a group of programmers to develop an accessibility checker for impaired individuals for entrances at the University of Windsor for the Innovate with AI Competition.",
      contributions: [
        "Created a custom image pipeline to train and test the ML model with TensorFlow.",
        "Designed custom Iframes to integrate google maps and the map pdf into the website.",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TensorFlow",
        "Google Maps API",
        "UX Design",
        "Accessibility",
        "Teamwork",
      ],
      link: "https://github.com/Shmy1234/AccessiGo",
    },
    {
      id: "runner",
      title: "Runner",
      description:
        "A top-down Zelda-like dungeon crawler with custom levels and a life counter. The player has impaired vision leading to the level feeling like a maze. With wall-passing ghosts and moving spikes around every corner, the player must carefully traverse each level within 3 tries or else all hearts are gone leading to a game over.",
      skills: ["Java", "Java Swing", "Game Design"],
      link: "https://github.com/Shmy1234/Runner-Dungeon",
    },
    {
      id: "skillsnap",
      title: "SkillSnapAI",
      description:
        "Built an AI-powered tool that scans and analyzes user resumes, providing tailored insights to improve job-search success. Engineered the platform with Puter.js, React, TypeScript, and Tailwind CSS, integrating real-time resume parsing and feedback.",
      skills: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Puter.js",
        "Resume Parsing",
        "AI Integration",
      ],
      linkDisabled: true,
      linkLabel: "Private / Coming Soon",
    },
  ],
  experiences: [
    {
      id: "outamation",
      company: "Outamation",
      roles: [
        {
          title: "AI-Powered Workflow Automation Extern",
          dates: "Aug 2025 - Oct 2025",
        },
      ],
      bullets: [
        "Built end-to-end document-AI pipelines for large mortgage PDFs: OCR → PDF parsing → structured JSON/CSV extraction.",
        "Implemented LlamaIndex RAG retrieval; tuned chunk sizes/metadata filters; compared open-source LLMs.",
        "Improved scan-quality and fail-safes; created notebooks for field extraction and dataset cleaning.",
        "Shipped a demo UI for ingestion and Q&A; lightweight Gemini chatbot; evaluation harness for OCR/retrieval.",
      ],
      skills: [
        "Python",
        "NumPy",
        "OCR",
        "RAG",
        "LlamaIndex",
        "PyMuPDF",
        "LLMs",
        "Data Cleaning",
        "Evaluation",
        "Gemini",
        "AI Pipelines",
        "Document Processing",
        "Machine Learning",
      ],
    },
    {
      id: "kenilworth",
      company: "Kenilworth Square",
      roles: [
        {
          title: "Web Developer",
          dates: "May 2025 - Aug 2025",
        },
      ],
      summary:
        "Maintained and developed new applications/store pages for Kenilworth Plaza; updated store pages and admin dashboard.",
      skills: ["Next.js", "Tailwind CSS", "React", "APIs", "UI Development", "Admin Dashboards"],
    },
    {
      id: "pashmotors",
      company: "PashMotors",
      roles: [
        {
          title: "Software Development Intern",
          dates: "Nov 2025 - Dec 2025",
        },
      ],
      summary:
        "Collaborated with a front-end developer to review, optimize, and maintain an existing website's codebase. Implemented a new front-end feature; wrote documentation; delivered a final presentation; worked with mentorship and check-ins.",
      skills: ["Code Review", "Debugging", "HTML", "JavaScript", "Documentation"],
    },
    {
      id: "ontario-inc",
      company: "Ontario Inc. (Circle K)",
      roles: [
        {
          title: "Software Engineer",
          dates: "Jul 2024 - Feb 2025",
          location: "Circle K 751 Front Rd, LaSalle",
        },
        {
          title: "IT Manager",
          dates: "Jan 2022 - Nov 2023",
          location: "Circle K 751 Front Rd, LaSalle",
        },
      ],
      skills: ["React.js", "JavaScript", "Systems Management", "IT Operations", "Technical Support"],
    },
    {
      id: "stickery",
      company: "Stickery Delivery",
      roles: [
        {
          title: "Web Developer",
          dates: "Sep 2020 - Jun 2024",
        },
      ],
      summary:
        "Managed development of a full-stack website with two others; HTML/CSS layout & styles; JS + HTML forms for custom contact form for non-profit.",
      skills: ["HTML", "CSS", "JavaScript", "Full-Stack Development"],
    },
    {
      id: "inspirit-2023",
      company: "Inspirit AI",
      roles: [
        {
          title: "AI Scholar",
          dates: "Jun 2023 - Jul 2023",
        },
      ],
      summary:
        "Mentorship AI program; implemented/analyzed NN, RNN, CNN, NLP, transformers; built AI chatbot inspired by Eliza/Alexa/GPT-4 using TensorFlow and Scikit-Learn.",
      skills: ["Python", "NumPy", "TensorFlow", "scikit-learn", "NLP", "Deep Learning"],
    },
    {
      id: "inspirit-2022",
      company: "Inspirit AI",
      roles: [
        {
          title: "AI Scholar",
          dates: "Jun 2022 - Jul 2023",
        },
      ],
      summary:
        "Built and analyzed an Exoplanet classifier with TensorFlow and Scikit-Learn; worked with datasets; trained models.",
      skills: ["Python", "NumPy", "TensorFlow", "Data Preparation", "Model Training", "Evaluation"],
    },
    {
      id: "youreka",
      company: "Youreka Canada",
      roles: [
        {
          title: "Marketing Analyst",
          dates: "Mar 2022 - Present",
        },
      ],
      summary:
        "Worked with a team to manage the website and social media for Youreka Canada.",
      skills: ["Canva", "Figma", "Analytics", "Content Creation", "Collaboration", "Branding", "Social Media"],
    },
    {
      id: "high-school-investigator",
      company: "High School Investigator",
      roles: [
        {
          title: "Research Investigator",
          dates: "Dec 2021 - Jun 2023",
          location: "Windsor, Ontario, Canada",
        },
      ],
      summary:
        "Designed and conducted original scientific investigations in health, biology, or social impact domains. Collaborated with mentors from Canadian universities; analyzed data; presented findings.",
      achievements: [
        "1st Place (Regional), 2022: differences between natural and artificial immunity in COVID-19 cases.",
        "3rd Place (Regional), 2023: SSRIs' effect on mental health.",
      ],
      skills: ["Research Skills", "R", "Data Analysis", "Scientific Writing", "Presentation"],
    },
  ],
};

// Helper function to get all skills from portfolio
export function getAllSkills(): string[] {
  const skillSet = new Set<string>();
  
  portfolioData.projects.forEach((project) => {
    project.skills.forEach((skill) => skillSet.add(skill));
  });
  
  portfolioData.experiences.forEach((exp) => {
    exp.skills.forEach((skill) => skillSet.add(skill));
  });
  
  return Array.from(skillSet).sort();
}

// Helper function for chatbot context
export function getPortfolioContext(): string {
  const { personal, projects, experiences } = portfolioData;
  
  let context = `About ${personal.name}:\n`;
  context += `${personal.statement}\n`;
  context += `Location: ${personal.chips.join(", ")}\n\n`;
  
  context += "Projects:\n";
  projects.forEach((p) => {
    context += `- ${p.title}: ${p.description}\n`;
    context += `  Skills: ${p.skills.join(", ")}\n`;
  });
  
  context += "\nExperience:\n";
  experiences.forEach((e) => {
    e.roles.forEach((r) => {
      context += `- ${r.title} at ${e.company} (${r.dates})\n`;
    });
    if (e.summary) context += `  ${e.summary}\n`;
    if (e.bullets) e.bullets.forEach((b) => (context += `  • ${b}\n`));
    context += `  Skills: ${e.skills.join(", ")}\n`;
  });
  
  context += `\nAll Skills: ${getAllSkills().join(", ")}\n`;
  
  return context;
}
