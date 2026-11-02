# Personal Portfolio Website

A modern, responsive, and bilingual personal portfolio and resume website built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **next-globe-gen** for internationalization (i18n).

---

## ✨ Features

- **🌐 Bilingual Support (i18n)**: Full English and French localization powered by `next-globe-gen` with dedicated routing and localized CV downloads.
- **🎨 Modern Dark UI**: Ambient glow effect, clean typography using Vercel's Geist font family, and responsive layout across mobile, tablet, and desktop screens.
- **💼 Work Experience & Education**: Detailed career milestones, role achievements, and academic background.
- **🛠️ Interactive Skills Filter**: Categorized skill tags filterable by category (Programming, Web Technology, Deployment, Networking, Testing, Productivity).
- **🔗 Social & Resume Links**: Direct access to GitHub, LinkedIn, HackerRank, LeetCode profiles, and downloadable PDF resumes in English and French.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, Standalone Output)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/) (`@fortawesome/react-fontawesome`)
- **Internationalization**: [`next-globe-gen`](https://github.com/KevenImbeault/next-globe-gen)
- **Linting & Code Quality**: [ESLint](https://eslint.org/)

---

## 📁 Project Structure

```text
nextjs-personal-website/
├── _app/                     # Source routes before localization generation
│   ├── layout.tsx            # Root HTML layout, metadata, font configuration
│   ├── page.tsx              # Main portfolio single-page application
│   └── LanguageSwitcher.tsx  # Locale selector component
├── app/                      # Next.js app directory (generated i18n routes & global styles)
│   ├── globals.css           # Global stylesheet & Tailwind directives
│   └── favicon.ico
├── components/               # Reusable UI components
│   ├── NavLink.tsx           # Navigation link component
│   └── SkillsSection.tsx     # Interactive skills list with category dropdown
├── data/                     # Application content & translations
│   ├── locales/
│   │   ├── en.json           # English localization strings
│   │   └── fr.json           # French localization strings
│   └── portfolio-data.ts     # Core portfolio structured data (experiences, education, skills, socials)
├── public/                   # Static assets & PDF resumes
│   ├── Keven_Imbeault_en_CV.pdf
│   └── Keven_Imbeault_fr_CV.pdf
├── i18n.config.ts            # Internationalization configuration
├── next.config.ts            # Next.js configuration (standalone output, turbopack, plugins)
└── package.json              # Project scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.17+** (or Node.js 20+) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KevenImbeault/nextjs-personal-website.git
   cd nextjs-personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the optimized standalone production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

---

## ⚙️ Customization

- **Profile & Content**: Update `data/portfolio-data.ts` to modify personal details, experiences, education entries, skills, and social links.
- **Translations**: Update `data/locales/en.json` and `data/locales/fr.json` for UI labels and bilingual descriptions.
- **Resumes / CVs**: Place updated resume PDFs in the `public/` directory and ensure the filenames match those referenced in `_app/page.tsx` and `data/portfolio-data.ts`.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
