export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface PortfolioData {
  personal: {
    firstName: string;
    lastName: string;
    role: string;
    bio: string;
    resumeUrl: string;
  };
  socialLinks: SocialLink[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: "Keven",
    lastName: "Imbeault",
    role: "COMPUTER ANALYST",
    bio: "I build reliable and scalable backend systems with a focus on clean code, performance and great developer experience.",
    resumeUrl: "#resume",
  },
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: "email",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      period: "2023 – Present",
      role: "Backend Developer",
      company: "Acme Digital",
      description:
        "Develop and maintain RESTful APIs, manage databases, and contribute to scalable backend services using Node.js and TypeScript.",
    },
    {
      id: "exp-2",
      period: "2021 – 2023",
      role: "Junior Backend Developer",
      company: "PixelForge",
      description:
        "Built features, fixed bugs, and worked with a small team to improve application performance and reliability.",
    },
  ],
  education: [
    {
      id: "edu-1",
      period: "2018 – 2021",
      degree: "Computer Science Diploma",
      school: "Cégep de Saint-Hyacinthe",
      description:
        "Focused on software development, databases and system architecture.",
    },
  ],
  skills: [
    "Node.js",
    "Express",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Docker",
    "Git",
    "Linux",
    "AWS",
  ],
};
