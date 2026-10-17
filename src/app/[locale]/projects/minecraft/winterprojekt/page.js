"use client";


import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge} from "@/components/design";
import LastEdited from "@/components/lastedited";
import {useDocumentTitle} from "@/components/documentTitle";
import {usePageBasics} from "@/components/pageBasics";


export default function Winterprojekt() {
  const {t, common, locale} = usePageBasics("winterprojekt");

  useDocumentTitle(t("pageTitle"));

  const winterProjects = [
    { href: "/projects/minecraft/winterprojekt/wp2025", src: "/minecraft/winterprojekt/wp2025_Title.png", alt: "Winterprojekt Titelbild 2024", title: "Winterprojekt 2025", version: "1.21", download: true },
    { href: "/projects/minecraft/winterprojekt/wp2024", src: "/minecraft/winterprojekt/wp2024_Title.png", alt: "Winterprojekt Titelbild 2024", title: "Winterprojekt 2024", version: "1.21", download: false },
    { href: "/projects/minecraft/winterprojekt/wp2023", src: "/minecraft/winterprojekt/wp2023_Title.png", alt: "Winterprojekt Titelbild 2023", title: "Winterprojekt 2023", version: "1.21", download: true },
    { href: "/projects/minecraft/winterprojekt/wp2022", src: "/minecraft/winterprojekt/wp2017_Title.png", alt: "Winterprojekt Titelbild 2022", title: "Winterprojekt 2022", version: "1.21", download: true },
    { href: "/projects/minecraft/winterprojekt/wp2021", src: "/minecraft/winterprojekt/wp2021_Title.png", alt: "Winterprojekt Titelbild 2021", title: "Winterprojekt 2021", version: "1.21", download: true },
    { href: "/projects/minecraft/winterprojekt/wp2020", src: "/minecraft/winterprojekt/wp2020_Title.png", alt: "Winterprojekt Titelbild 2020", title: "Winterprojekt 2020", version: "1.21", download: true },
    { href: "/projects/minecraft/winterprojekt/wp2017", src: "/minecraft/winterprojekt/wp2017_Title.png", alt: "Winterprojekt Titelbild 2017", title: "Winterprojekt 2017", version: "1.21", download: true },
  ];

  function Badge({ children, variant = "neutral" }) {
    const variants = {
      neutral: "bg-black/50 text-white border-white/20",
      success: "bg-teal-500/80 text-white border-teal-300/40",
      muted: "bg-gray-700/70 text-gray-300 border-gray-400/30",
    };

    const styles = variants[variant] ?? variants.neutral;

    return (
        <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${styles}`}
        >
      {children}
    </span>
    );
  }

  return (
    <>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      {/* Beschreibung */}
      <section className="max-w-4xl mx-auto text-center">
        <P className="mb-8">
          Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
          Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
        </P>
      </section>

      {/* Hauptbild -- Noch nicht ganz mittig?? */}
      <Link href={`/${locale}/projects/minecraft/winterprojekt/wp2025`}>
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl shadow-lg border border-white border-opacity-10 overflow-hidden cursor-pointer">
          <Image
              src="/Winterprojekt_Front.png"
              alt="Winterprojekt Minecraft Bild"
              fill
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white text-6xl sm:text-6xl font-semibold drop-shadow-lg pointer-events-none">
      2026
    </span>
        </div>
      </Link>


        {/* Jahresgrid */}
        <section className="max-w-full mx-auto mt-16">
          <H2 className="text-3xl font-semibold mb-6 text-teal-400">Vergangene Projekte</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {winterProjects.map(({ href, src, alt, title, version, download }) => (
                <Link
                    key={title}
                    href={`/${locale}${href}`}
                    className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
                >
                  <div className="relative w-full h-64 sm:h-72 md:h-80">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover filter blur-sm transition-filter transition-transform duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                    />
                  </div>

                  {/* Tags */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
                    <Badge>⛏ {version}</Badge>
                    {download ? (
                        <Badge variant="success">⬇ Download</Badge>
                    ) : (
                        <Badge variant="muted">✕ Kein Download</Badge>
                    )}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white text-4xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
        {title}
      </span>
                  </div>
                </Link>
            ))}
          </div>

        <Link href="./../../projects" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all mt-12 mb-12">
          Zurück zur Projektübersicht
        </Link>
      </section>

      <LastEdited date="31.05.2026" />
    </>
  );
}

