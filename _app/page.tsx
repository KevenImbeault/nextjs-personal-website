import { portfolioData } from "@/data/portfolio-data";
import NavLink from "@/components/NavLink";
import SkillsSection from "@/components/SkillsSection";
import LanguageSwitcher from "./LanguageSwitcher";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faGithub, faHackerrank, faLeetcode, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useTranslations} from "next-globe-gen";

library.add(faGithub, faHackerrank, faLeetcode, faLinkedin)

export default function Home() {
  const { personal, socialLinks, experiences, education, skills } =
    portfolioData;

  const t = useTranslations();

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
          className="relative z-10 w-full lg:w-[420px] xl:w-[460px] lg:min-h-screen shrink-0 flex flex-col p-8 sm:p-12 lg:p-16 lg:sticky lg:top-0"
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
              {t("personal.role")}
            </p>
          </div>

          {/* Bio */}
          {personal.bio.map((biopart, index) => (
            <p key={index} className="text-purple-100/85 text-sm sm:text-base leading-relaxed max-w-sm">
              {t("personal.bio." + index)}
            </p>
          ))}

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
                {link.icon === "faGithub" && (
                    <FontAwesomeIcon icon={faGithub} size="2xl"/>
                )}
                {link.icon === "faLinkedin" && (
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                )}
                {link.icon === "faHackerrank" && (
                    <FontAwesomeIcon icon={faHackerrank} size="2xl"/>
                )}
                {link.icon === "faLeetcode" && (
                    <FontAwesomeIcon icon={faLeetcode} size="2xl"/>
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
        <div className="flex items-center justify-end mb-10 sm:mb-14">
          <NavLink href={"#Work"}>Work</NavLink>
          <NavLink href={"#Education"}>Education</NavLink>
          <NavLink href={"#Skills"}>Skills</NavLink>
          <NavLink href={"#Projects"}>Projects</NavLink>
          <NavLink href={personal.resumeUrl} isExternal>Resume</NavLink>
          <LanguageSwitcher />
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
                      {t("experiences." + exp.id + ".period")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {t("experiences." + exp.id + ".role")}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff3d94]">
                      {exp.company}
                    </p>
                    <p className="text-sm text-purple-200/80 leading-relaxed pt-1 max-w-2xl">
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px"}}>
                      {exp.description.map((str, index) => (
                        <li key={index}>{t("experiences." + exp.id + ".description." + index)}</li>
                      ))}
                      </ul>
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
                      {t("education." + edu.id + ".period")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {t("education." + edu.id + ".degree")}
                    </h3>
                    <p className="text-sm font-semibold text-[#ff3d94]">
                      {edu.school}
                    </p>
                    <p className="text-sm text-purple-200/80 leading-relaxed pt-1 max-w-2xl">
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px"}}>
                        {edu.description.map((str, index) => (
                            <li key={index}>{t("education." + edu.id + ".description." + index)}</li>
                        ))}
                      </ul>
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </section>

          <SkillsSection skills={skills} />

          {/* Section: Projects */}
          {/*<section id="Projects" aria-labelledby="projects-heading">*/}
          {/*  <div className="flex items-center justify-between group cursor-pointer pt-2">*/}
          {/*    <div className="flex items-center gap-4">*/}
          {/*      <div className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0 group-hover:border-[#ff3d94] transition-colors">*/}
          {/*        <svg*/}
          {/*          className="w-5 h-5 stroke-current fill-none"*/}
          {/*          viewBox="0 0 24 24"*/}
          {/*          strokeWidth="2"*/}
          {/*          strokeLinecap="round"*/}
          {/*          strokeLinejoin="round"*/}
          {/*          aria-hidden="true"*/}
          {/*        >*/}
          {/*          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />*/}
          {/*          <path d="M14 2v4a2 2 0 0 0 2 2h4" />*/}
          {/*          <path d="M10 9H8" />*/}
          {/*          <path d="M16 13H8" />*/}
          {/*          <path d="M16 17H8" />*/}
          {/*        </svg>*/}
          {/*      </div>*/}
          {/*      <h2*/}
          {/*        id="projects-heading"*/}
          {/*        className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-purple-100 transition-colors"*/}
          {/*      >*/}
          {/*        Projects - Coming Soon*/}
          {/*      </h2>*/}
          {/*    </div>*/}

          {/*    /!* Right Arrow *!/*/}
          {/*    /!*<div className="text-[#ff3d94] p-2 group-hover:translate-x-1.5 transition-transform duration-200">*!/*/}
          {/*    /!*  <svg*!/*/}
          {/*    /!*    className="w-6 h-6 stroke-current fill-none"*!/*/}
          {/*    /!*    viewBox="0 0 24 24"*!/*/}
          {/*    /!*    strokeWidth="2"*!/*/}
          {/*    /!*    strokeLinecap="round"*!/*/}
          {/*    /!*    strokeLinejoin="round"*!/*/}
          {/*    /!*    aria-hidden="true"*!/*/}
          {/*    /!*  >*!/*/}
          {/*    /!*    <line x1="5" y1="12" x2="19" y2="12" />*!/*/}
          {/*    /!*    <polyline points="12 5 19 12 12 19" />*!/*/}
          {/*    /!*  </svg>*!/*/}
          {/*    /!*</div>*!/*/}
          {/*  </div>*/}
          {/*</section>*/}
        </div>
      </main>
    </div>
  );
}
