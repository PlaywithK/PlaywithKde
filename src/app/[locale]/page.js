"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("HomePage");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "Startseite - PlaywithK.de"
      : "Home - PlaywithK.de";
  }, [locale]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 text-center text-white -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-purple-600 to-pink-500 opacity-90" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="relative z-10 w-full px-4 md:px-8">
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg opacity-0 translate-y-5 animate-fade-in-up"
          >
            {t("hero.title")}
          </h1>

          {t("hero.subtitle") && (
            <p
              className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-10 opacity-0 translate-y-5 animate-fade-in-up animation-delay-200"
            >
              {t("hero.subtitle")}
            </p>
          )}

          <div
            className="opacity-0 translate-y-5 animate-fade-in-up animation-delay-400"
          >
            <Link
              href={`/${locale}/projekte`}
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
            >
              {t("projects.all")}
            </Link>
          </div>
        </div>
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
              description: t("projects.webgames.desc"),
              link: "projekte/webgames",
            },
            {
              title: t("projects.apps.title"),
              description: t("projects.apps.desc"),
              link: "projekte/apps",
            },
            {
              title: t("projects.games.title"),
              description: t("projects.games.desc"),
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
                  {t("projects.more")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
