"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Home() {
  const t = useTranslations("HomePage"); // Server Side Version geht auch, falls HomePage async ist
  const params = useParams();
  const locale = params.locale; // aktuelles Locale aus der URL, z.B. "de" oder "en"

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-[60vh] text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-teal-400 leading-tight">
          {t("hero.title")}
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </section>

      {/* Projekte */}
      <section id="projects" className="px-4 sm:px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-teal-400 text-center">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: t("projects.webgames.title"),
              description: t("projects.webgames.description"),
              link: "projekte/webgames",
            },
            {
              title: t("projects.apps.title"),
              description: t("projects.apps.description"),
              link: "projekte/apps",
            },
            {
              title: t("projects.games.title"),
              description: t("projects.games.description"),
              link: "projekte/games",
            },
          ].map(({ title, description, link }, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-400 text-center">{title}</h3>

              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-gray-300 text-sm sm:text-base">{description}</p>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href={`/${locale}/${link}`}
                  className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/projekte`}
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
          >
            {t("projects.all")}
          </Link>
        </div>
      </section>
    </main>
  );
}
