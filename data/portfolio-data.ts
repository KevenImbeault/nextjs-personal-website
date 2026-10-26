export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string[];
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
    bio: string[];
    resumeUrl: string;
  };
  socialLinks: SocialLink[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: Record<string, string[]>; // Categorized skills dictionary
}

export const portfolioData: PortfolioData = {
  personal: {
    firstName: "Keven",
    lastName: "Imbeault",
    role: "COMPUTER ANALYST",
    bio: [
      "I'm a computer analyst and back-end developer based off Saguenay-Lac-Saint-Jean, QC.",
      " Always learning about AI, programming, computer networks, and cybersecurity."
    ],
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
      period: "Feb. 2025 - Present",
      role: "Computer Analyst",
      company: "Santé Québec Saguenay–Lac-Saint-Jean - Universitaire",
      description: [
        "Développement de nouvelles fonctionnalités pour l’environnement Atlassian (Jira, Insight, Confluence)",
        "Correction de bugs trouvés par les utilisateurs",
        "Analyse d’actifs pour la mise en place de côtes d’importances et RTO/RPO",
        "Gestion de billet et création de documentation via Jira Service management",
        "Création de documentation pour le support d’actifs dans une base de connaissance Confluence",
      ]

    },
    {
      id: "exp-2",
      period: "Apr. 2023 - Jan. 2025",
      role: "Web Developer",
      company: "Digicom",
      description: [
        "Développement de nouvelles fonctionnalités pour notre espace client et notre intranet",
        "Correction de bugs trouvés par les utilisateurs",
        "Gestion de base de données",
        "Gestion/Intégration d'un nouveau membre de l'équipe",
        "Contrôle de version du code avec Git & Gitlab"
      ]

    },
    {
      id: "exp-3",
      period: "Jan. 2021 - Apr. 2023",
      role: "Support Technician - Level 2",
      company: "Digicom",
      description: [
        "Aide à l'installation d'antennes clients (vérification de vitesse, de signal de l'antenne et interférences locales)",
        "Gestion et Création de serveurs courriels (IMAP, SMTP, MX)",
        "Mise en place et gestion de serveurs Linux (Ubuntu / Proxmox)",
        "Mise en place et gestion de conteneurs Linux sur Proxmox (Web, Courriel, Base de données)",
        "Gestion et résolution de tickets de Niveau 2 en lien avec nos équipements chez les clients, notre infrastructure ou nos serveurs",
        "Création de carte avec QGIS"
      ]
    },
  ],
  education: [
    {
      id: "edu-1",
      period: "Aug. 2023 - Dec. 2024",
      degree: "Computer Science Bachelor Degree",
      school: "Université du Québec à Chicoutimi",
      description: [
        "UnitedCTF 2023 - 3e place pour l’UQAC",
        "UnitedCTF 2024 - 51e global, inconnue pour l’UQAC"
      ]
    },
    {
      id: "edu-2",
      period: "Aug. 2022 - June 2023",
      degree: "Electrical Engineering Bachelor Degree",
      school: "Université du Québec à Chicoutimi",
      description: [
        "Did not finish, transferred to Computer science",
      ]

    },
    {
      id: "edu-3",
      period: "2019 - June 2022",
      degree: "Computer Science Diploma",
      school: "Collège d'Alma",
      description:[
        "",
      ]

    },
  ],
  skills: {
    "Programming": [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    "Deployment": [
      "Docker",
      "Linux",
      "AWS",
      "Git",
    ],
    "Tools & Systems": [
      "Atlassian (Jira/Confluence)",
      "Proxmox",
      "QGIS",
    ],
  },
};
