export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  period: string;
  roles: Role[];
  tech?: string;
}

export const experience: Experience[] = [
  {
    company: "Good, Come Again",
    period: "Jun 2025 to Nov 2025",
    roles: [
      {
        title: "IT Supervisor",
        period: "Jun 2025 to Jul 2025",
        bullets: [
          "Managed store technical infrastructure and computer systems for stable daily operations.",
          "Integrated interactive visual map iframes; customized icons/widgets using Figma and Canva.",
          "Diagnosed and maintained on-site systems; oversaw connected devices/software.",
        ],
      },
      {
        title: "Software and IT Manager",
        period: "Jul 2025 to Aug 2025",
        bullets: [
          "Supervised tech/system operations; coordinated upgrades and hardware management.",
          "Designed/deployed improved UI components and interactive displays for in-store systems.",
          "Streamlined troubleshooting workflows, reducing downtime.",
        ],
      },
      {
        title: "Lead Software and IT Manager",
        period: "Aug 2025 to Oct 2025",
        bullets: [
          "Collaborated with frontend team to build/maintain Next.js + Tailwind apps for the store.",
          "Updated store pages/admin dashboards; improved usability for 1,000+ monthly visitors.",
          "Implemented responsive design practices for cross-device performance.",
        ],
      },
    ],
  },
  {
    company: "Outamation",
    period: "Aug 2025 to Oct 2025",
    roles: [
      {
        title: "AI-Powered Workflow Automation Extern",
        period: "Aug 2025 to Oct 2025",
        bullets: [
          "Built document-AI for mortgage PDFs: OCR (Tesseract/PaddleOCR) → PyMuPDF parsing → JSON/CSV extraction, classification, search.",
          "Implemented LlamaIndex RAG with tuned chunks/metadata; improved scan quality.",
          "Shipped demo UI + Gemini bot; added evaluation harness.",
        ],
      },
    ],
    tech: "Python, Tesseract, PaddleOCR, PyMuPDF, LlamaIndex (RAG), Gemini, Jupyter, Pandas/OpenCV",
  },
];
