export interface Profile {
  name: string;
  citizenship: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  quickFacts: {
    location: string;
    university: string;
    degree: string;
    graduation: string;
  };
}

export const profile: Profile = {
  name: "Alan Lu",
  citizenship: "Canadian Citizen",
  email: "alu242@uwo.ca",
  linkedin: "https://www.linkedin.com/in/alan-lu2006/",
  github: "https://github.com/YENOSven",
  summary: "Passionate Computer Science student with a strong interest in artificial intelligence, machine learning, and full-stack development. Experienced in building AI-powered applications, from chatbots to document processing systems, with a focus on practical, scalable solutions.",
  quickFacts: {
    location: "Canada",
    university: "University of Western Ontario",
    degree: "B.S. Computer Science",
    graduation: "May 2028 (Expected)",
  },
};
