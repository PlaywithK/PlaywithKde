"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Projekte() {
  const t = useTranslations("Projekte");
  const params = useParams();
  const locale = params.locale;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">{t("title")}</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">{t("description")}</p>
      </section>

      <div className="space-y-20 max-w-5xl mx-auto">
        {/* Web-Spiele */}
        <section className="bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-10 p-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🎮</span>
              <h2 className="text-2xl font-bold text-teal-400">{t("webGames.title")}</h2>
            </div>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">{t("webGames.description")}</p>

            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {["tag1", "tag2", "tag3", "tag4", "tag5"].map((key) => (
                <span key={key} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                  {t(`webGames.${key}`)}
                </span>
              ))}
            </div>

            <Link
              href={`/${locale}/projekte/webgames`}
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {t("webGames.linkText")}
            </Link>
          </div>
        </section>

        {/* App-Entwicklung */}
        <section className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/canva_coding.jpg"
              alt={t("appDevelopment.imageAlt")}
              fill
              className="rounded-xl shadow-lg border border-white border-opacity-10 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">{t("appDevelopment.title")}</h2>
            <p className="text-gray-300 mb-6">{t("appDevelopment.description")}</p>
            <Link
              href={`/${locale}/projekte/app-entwicklung`}
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {t("appDevelopment.linkText")}
            </Link>
          </div>
        </section>

        {/* Chorez-App */}
        <section className="grid md:grid-cols-2 gap-10 items-center bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-10 p-6">
          <div className="relative w-full h-64 md:h-[500px]">
            <Image
              src="/chorez_placeholder.png"
              alt={t("chorez.imageAlt")}
              fill
              className="rounded-xl shadow border border-white/10 object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-3xl">📱</span>
              <h2 className="text-2xl font-bold text-teal-400">{t("chorez.title")}</h2>
            </div>
            <p className="text-gray-300 mb-4">{t("chorez.description")}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["tag1", "tag2", "tag3", "tag4"].map((key) => (
                <span key={key} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                  {t(`chorez.${key}`)}
                </span>
              ))}
            </div>
            <Link
              href="/projekte/app-entwicklung"
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {t("chorez.linkText")}
            </Link>
          </div>
        </section>

        {/* Spieleentwicklung */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/unity_dev_placeholder.png"
              alt={t("gameDev.imageAlt")}
              fill
              className="rounded-xl shadow-lg border border-white border-opacity-10 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">{t("gameDev.title")}</h2>
            <p className="text-gray-300 mb-6">{t("gameDev.description")}</p>
            <Link
              href={`/${locale}/projekte/spieleentwicklung`}
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {t("gameDev.linkText")}
            </Link>
          </div>
        </section>

        {/* Web-Entwicklung */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/unity_dev_placeholder.png"
              alt={t("webDev.imageAlt")}
              fill
              className="rounded-xl shadow-lg border border-white border-opacity-10 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-teal-400 mb-4">{t("webDev.title")}</h2>
            <p className="text-gray-300 mb-6">{t("webDev.description")}</p>
            <Link
              href="/projekte/spieleentwicklung"
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {t("webDev.linkText")}
            </Link>
          </div>
        </section>

        {/* Minecraft Projekte */}
        <section className="max-w-6xl mx-auto mt-32 px-4 sm:px-8">
          <h2 className="text-4xl font-bold text-teal-400 mb-10 text-center">{t("minecraftProjects.title")}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["item1", "item2", "item3"].map((key) => (
              <Link
                key={key}
                href={`/${locale}${t(`minecraftProjects.${key}.href`)}`}
                className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                  <Image
                    src={t(`minecraftProjects.${key}.src`)}
                    alt={t(`minecraftProjects.${key}.alt`)}
                    fill
                    className="object-cover filter blur-sm transition-filter transition-transform duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                    {t(`minecraftProjects.${key}.title`)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
