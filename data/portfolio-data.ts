export interface SkillItem {
  id: string;
  category: string;
  name: string;
}

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
  icon: string;
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
  skills: SkillItem[]; // Categorized skills dictionary
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
      url: "https://github.com/KevenImbeault",
      icon: "faGithub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kevenimbeault/",
      icon: "faLinkedin",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/KevenImbeault",
      icon: "faHackerrank",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/KevenImbeault/",
      icon: "faLeetcode",
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
        "UnitedCTF 2023 - 3rd place for UQAC-only ranking",
        "UnitedCTF 2024 - 51st global ranking, unknown for UQAC-only ranking"
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
  skills: [
    {
      id: "prog-1",
      category: "Programming",
      name: "C++",
    }, {
      id: "prog-2",
      category: "Programming",
      name: "C#",
    },
    {
      id: "prog-3",
      category: "Programming",
      name: "Markdown",
    },
    {
      id: "prog-4",
      category: "Programming",
      name: "Javascript",
    },
    {
      id: "prog-5",
      category: "Programming",
      name: "HTML",
    },
    {
      id: "prog-6",
      category: "Programming",
      name: "CSS",
    },
    {
      id: "prog-7",
      category: "Programming",
      name: "SQL",
    },
    {
      id: "prog-8",
      category: "Programming",
      name: "Python",
    },
    {
      id: "prog-9",
      category: "Programming",
      name: "PHP",
    },
    {
      id: "prog-10",
      category: "Programming",
      name: "TypeScript",
    },
    {
      id: "test-1",
      category: "Tests and performance",
      name: "Chrome DevTools",
    },
    {
      id: "test-2",
      category: "Tests and performance",
      name: "PageSpeed",
    },
    {
      id: "test-3",
      category: "Tests and performance",
      name: "Lighthouse",
    },
    {
      id: "network-1",
      category: "Computer Networking",
      name: "OSPF/BGP",
    },
    {
      id: "network-2",
      category: "Computer Networking",
      name: "Routes",
    },
    {
      id: "network-3",
      category: "Computer Networking",
      name: "Firewall",
    },
    {
      id: "network-4",
      category: "Computer Networking",
      name: "Wireless antenna connectivity"
    },
    {
      id: "web-1",
      category: "Web Technologies",
      name: "Bootstrap",
    },
    {
      id: "web-2",
      category: "Web Technologies",
      name: "jQuery",
    },
    {
      id: "web-3",
      category: "Web Technologies",
      name: "NodeJS",
    },
    {
      id: "web-4",
      category: "Web Technologies",
      name: "Flask",
    },
    {
      id: "deploy-1",
      category: "Deployment",
      name: "Git",
    },
    {
      id: "deploy-2",
      category: "Deployment",
      name: "Github",
    },
    {
      id: "deploy-3",
      category: "Deployment",
      name: "Github Pages",
    },
    {
      id: "deploy-4",
      category: "Deployment",
      name: "Digital Ocean",
    },
    {
      id: "prod-1",
      category: "Productivity",
      name: "Jira Service Management",
    },
    {
      id: "prod-2",
      category: "Productivity",
      name: "Confluence",
    },
  ],
};
