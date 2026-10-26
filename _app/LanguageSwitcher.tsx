"use client";

import { Link, useRoute } from "next-globe-gen";

export default function LanguageSwitcher() {
    const route = useRoute();
    return (
        <div className="flex items-center gap-2 text-sm font-medium ml-4 pl-4 border-l border-purple-500/20">
            <Link
                href={route}
                locale="en"
                className="text-purple-200/80 hover:text-white transition-colors"
            >
                EN
            </Link>
            <span className="text-purple-400/40">/</span>
            <Link
                href={route}
                locale="fr"
                className="text-purple-200/80 hover:text-white transition-colors"
            >
                FR
            </Link>
        </div>
    );
}