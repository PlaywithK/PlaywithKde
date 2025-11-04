"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function PWKde() {
  const t = useTranslations("Projekte");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "PlaywithK.de Minecraft Netzwerk  - PlaywithK.de"
      : "PlaywithK.de Minecraft Network - PlaywithK.de";
  }, [locale]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">PlaywithK.de Netzwerk</h1>
        <p className="text-gray-300 mb-8">
          Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
          Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
        </p>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl shadow-lg border border-white border-opacity-10 overflow-hidden">
          <Image
            src="/Winterprojekt_Front.png"
            alt="Winterprojekt Minecraft Bild"
            fill
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>

        <h2 className="text-2xl font-bold text-teal-400 mb-4">Features & Highlights</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Detailreiche Schneelandschaften und Eishöhlen.</li>
          <li>Gemütliche Holzhäuser mit Kamin und Dekorationen.</li>
          <li>Ein kleiner Weihnachtsmarkt mit Ständen und Lichtern.</li>
          <li>Komplette Beleuchtung und Atmosphäre mit Redstone-Mechanismen.</li>
        </ul>

        <Link href="/projekte" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
          Zurück zur Projektübersicht
        </Link>
      </section>
    </main>
  );
}