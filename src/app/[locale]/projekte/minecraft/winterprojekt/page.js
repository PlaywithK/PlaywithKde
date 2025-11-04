"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Winterprojekt() {
  const t = useTranslations("Projekte");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "Minecraft Winterprojekt - PlaywithK.de"
      : "Minecraft Winterproject - PlaywithK.de";
  }, [locale]);

  const winterProjects = [
    { href: "/projekte/minecraft/winterprojekt/wp2024", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2024" },
    { href: "/projekte/minecraft/winterprojekt/wp2020", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2020" },
    { href: "/projekte/minecraft/winterprojekt/wp2017", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2017" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Winterprojekt</h1>
        <p className="text-gray-300 mb-8">
          Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
          Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
        </p>

        {/* Hauptbild im Stil der Projekte-Seite, anklickbar */}
        <Link href={`/${locale}/projekte/minecraft/winterprojekt/wp2025`}>
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl shadow-lg border border-white border-opacity-10 overflow-hidden cursor-pointer">
            <Image
              src="/Winterprojekt_Front.png"
              alt="Winterprojekt Minecraft Bild"
              fill
              className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </Link>

        {/* Jahresgrid */}
        <section className="max-w-6xl mx-auto mt-32 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {winterProjects.map(({ href, src, alt, title }) => (
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                    {title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Link href="/projekte" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all mt-12">
          Zurück zur Projektübersicht
        </Link>
      </section>
    </main>
  );
}
