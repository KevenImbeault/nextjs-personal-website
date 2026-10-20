import { portfolioData } from "@/data/portfolio-data";
import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Home() {
  const { personal, socialLinks, experiences, education, skills } =
    portfolioData;

  return (
    <div className="min-h-screen w-full bg-[#100624] text-white relative overflow-hidden flex flex-col lg:flex-row">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 15% 30%, rgba(255, 61, 148, 0.35) 0%, rgba(106, 42, 152, 0.4) 35%, rgba(31, 11, 75, 0.2) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Left Column / Profile Sidebar */}
      <aside
        className="relative z-10 w-full lg:w-[420px] xl:w-[460px] lg:min-h-screen flex-shrink-0 flex flex-col justify-between p-8 sm:p-12 lg:p-16 lg:sticky lg:top-0"
        style={{
          background:
            "linear-gradient(155deg, rgba(181, 48, 126, 0.95) 0%, rgba(106, 42, 152, 0.92) 38%, rgba(63, 28, 109, 0.88) 72%, rgba(31, 11, 75, 0.95) 100%)",
        }}
      >
        <div className="space-y-8 lg:space-y-12">
          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-none">
              <span className="block text-white">{personal.firstName}</span>
              <span className="block color-1 text-[#ff3d94]">
                {personal.lastName}
              </span>
            </h1>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-pink-200/90 uppercase pt-2">
              {personal.role}
            </p>
          </div>

          {/* Bio */}
          <p className="text-purple-100/85 text-sm sm:text-base leading-relaxed max-w-sm">
            {personal.bio}
          </p>

          {/* Separator pill */}
          <div className="w-12 h-1 bg-[#ff3d94] rounded-full" />
        </div>

        {/* Social Links */}
        <div className="pt-10 lg:pt-16 space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-medium text-purple-100/90 hover:text-white transition-colors duration-200 w-fit"
            >
              <span className="text-white/80 group-hover:text-[#ff3d94] transition-colors">
                {link.icon === "github" && (
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                )}
                {link.icon === "linkedin" && (
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                )}
                {link.icon === "email" && (
                  <svg
                    className="w-5 h-5 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                )}
              </span>
              <span>{link.name}</span>
              <svg
                className="w-3.5 h-3.5 stroke-current fill-none text-purple-300/70 group-hover:text-[#ff3d94] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ))}
        </div>
      </aside>

      {/* Right Column / Content Area */}
      <main className="relative z-10 flex-1 px-8 py-10 sm:px-12 sm:py-14 lg:px-20 lg:py-16 max-w-5xl">
        {/* Top bar / Resume */}
        <div className="flex justify-end mb-10 sm:mb-14">
          <NavLink href={"#Work"}>Work</NavLink>
          <NavLink href={"#Education"}>Education</NavLink>
          <NavLink href={"#Skills"}>Skills</NavLink>
          <NavLink href={"#Projects"}>Projects</NavLink>
          <NavLink href={personal.resumeUrl} isExternal>Resume</NavLink>
        </div>

        <div className="space-y-14 sm:space-y-16">
          {/* Section: Work Experience */}
          <section id="Work" aria-labelledby="experience-heading">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0">
                <svg
                  className="w-5 h-5 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h2
                id="experience-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Work Experience
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 sm:pl-10 space-y-10 sm:space-y-12">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-2 bottom-3 w-[2px] bg-[#3f1c6d]"
                aria-hidden="true"
              />

              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline bullet dot */}
                  <div
                    className="absolute -left-[29px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#ff3d94] ring-4 ring-[#100624] shadow-[0_0_10px_#ff3d94]"
                    aria-hidden="true"
                  />

                  <div className="space-y-1.5">
                    <span className="text-xs sm:text-sm font-medium text-purple-300/80 tracking-wide">
                      {exp.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff3d94]">
                      {exp.company}
                    </p>
                    <p className="text-sm text-purple-200/80 leading-relaxed pt-1 max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Education */}
          <section id="Education" aria-labelledby="education-heading">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0">
                <svg
                  className="w-5 h-5 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h2
                id="education-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Education
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 sm:pl-10 space-y-10 sm:space-y-12">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-2 bottom-3 w-[2px] bg-[#3f1c6d]"
                aria-hidden="true"
              />

              {education.map((edu) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline bullet dot */}
                  <div
                    className="absolute -left-[29px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#ff3d94] ring-4 ring-[#100624] shadow-[0_0_10px_#ff3d94]"
                    aria-hidden="true"
                  />

                  <div className="space-y-1.5">
                    <span className="text-xs sm:text-sm font-medium text-purple-300/80 tracking-wide">
                      {edu.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff3d94]">
                      {edu.school}
                    </p>
                    <p className="text-sm text-purple-200/80 leading-relaxed pt-1 max-w-2xl">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Skills */}
          <section id="Skills" aria-labelledby="skills-heading">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0">
                <svg
                  className="w-5 h-5 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h2
                id="skills-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Skills
              </h2>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-full bg-[#220d44] border border-[#3f1c6d] text-sm font-medium text-purple-100 hover:border-[#ff3d94] hover:text-white hover:bg-[#2b1254] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Projects */}
          <section id="Projects" aria-labelledby="projects-heading">
            <div className="flex items-center justify-between group cursor-pointer pt-2">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0 group-hover:border-[#ff3d94] transition-colors">
                  <svg
                    className="w-5 h-5 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                </div>
                <h2
                  id="projects-heading"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-purple-100 transition-colors"
                >
                  Projects
                </h2>
              </div>

              {/* Right Arrow */}
              <div className="text-[#ff3d94] p-2 group-hover:translate-x-1.5 transition-transform duration-200">
                <svg
                  className="w-6 h-6 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
