"use client";

import {useState, useMemo} from "react";
import {SkillItem} from "@/data/portfolio-data";
import {useTranslations} from "next-globe-gen";

interface SkillsSectionProps {
    skills: SkillItem[];
}

export default function SkillsSection({skills}: SkillsSectionProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = useMemo(() => {
        return ["All", ...new Set(skills.map((skill) => skill.id.split("-")[0]))];
    }, [skills]);

    const displayedSkills = useMemo(() => {
        if (selectedCategory === "All") {
            return Object.values(skills).flat();
        }
        return skills.filter((skill) => skill.id.split("-")[0] === selectedCategory);
    }, [skills, selectedCategory]);

    const t = useTranslations();

    return (
        <section id="Skills" aria-labelledby="skills-heading" className="space-y-6">
            {/* Header and Category Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div
                        className="w-11 h-11 rounded-xl bg-[#26104f] border border-[#ff3d94]/40 flex items-center justify-center text-[#ff3d94] shadow-sm flex-shrink-0">
                        <svg
                            className="w-5 h-5 stroke-current fill-none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="16 18 22 12 16 6"/>
                            <polyline points="8 6 2 12 8 18"/>
                        </svg>
                    </div>
                    <h2
                        id="skills-heading"
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
                    >
                        {t("sections.section-3.title")}
                    </h2>
                </div>

                {/* Dropdown Selector */}
                <div className="relative inline-block w-full sm:w-auto">
                    <label htmlFor="skill-category" className="sr-only">
                        Filter skills by category
                    </label>
                    <select
                        id="skill-category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full sm:w-auto appearance-none bg-[#220d44] border border-[#3f1c6d] text-purple-100 text-sm font-medium rounded-xl px-4 py-2.5 pr-10 hover:border-[#ff3d94] focus:outline-none focus:ring-2 focus:ring-[#ff3d94] focus:border-transparent transition-all cursor-pointer"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category} className="bg-[#100624] text-white">
                                {category === "All" ? t("skills-categories.all") : t(`skills-categories.${category}` as Parameters<typeof t>[0])}
                            </option>
                        ))}
                    </select>
                    {/* Custom Dropdown Chevron Icon */}
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-purple-300">
                        <svg
                            className="w-4 h-4 stroke-current fill-none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Filtered Skill Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
                {displayedSkills.map((skill) => (
                    <span
                        key={skill.id}
                        className={skill.id.split("-")[0].concat(" px-5 py-2 rounded-full bg-[#220d44] border border-[#3f1c6d] text-sm font-medium text-purple-100 hover:border-[#ff3d94] hover:text-white hover:bg-[#2b1254] transition-all duration-200 cursor-default")}
                    >
            {skill.name}
          </span>
                ))}
            </div>
        </section>
    );
}