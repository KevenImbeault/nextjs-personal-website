import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
    isExternal?: boolean;
}

const navLinkStyles =
    "group flex items-center gap-2 text-sm font-bold text-purple-200/90 hover:text-white transition-colors pr-5";

export default function NavLink({ href, children, isExternal }: NavLinkProps) {
    const content = (
        <>
            <span>{children}</span>
            </>
    );

    if (isExternal) {
        return (
            <a
                href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={navLinkStyles}
            >
            {content}
            </a>
    );
    }

    return (
        <Link href={href} className={navLinkStyles}>
        {content}
        </Link>
);
}