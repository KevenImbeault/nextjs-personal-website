import type { Metadata } from "next";
import { useLocale } from "next-globe-gen";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/globals.css";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keven Imbeault | Back-End Developer",
  description:
    "Je suis un analyste informatique et développeur back-end basé au Saguenay-Lac-Saint-Jean, QC\n" +
      "\n" +
      "Toujours en train d'apprendre sur l'IA, la programmation, les réseaux informatique et la cybersécurité.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#100624] text-white selection:bg-[#ff3d94] selection:text-white">
        {children}
      </body>
    </html>
  );
}
