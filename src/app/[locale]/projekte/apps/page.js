"use client";

import Hero from "./../components/hero";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function AppEntwicklung() {
  const t = useTranslations("AppDev");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "App-Entwicklung - PlaywithK.de"
      : "App Developement - PlaywithK.de";
  }, [locale]);

  return (
    <>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      {/* Projekt: Chorez */}
      <section className="max-w-3xl mx-auto space-y-16">
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Chorez</h2>
          <p className="text-gray-200 mb-4">
            {t("chorez.desc-p1")}
          </p>
          <p className="mb-2">
            {t("chorez.desc-p2.p1")} <span className="text-teal-400">Flutter & Dart</span>{t("chorez.desc-p2.p2")} <span className="text-teal-400">Visual Studio Code</span> {t("chorez.desc-p2.p3")} <span className="text-teal-400">Android Studio</span> {t("chorez.desc-p2.p4")}
          </p>
          <p className="mb-4">
            {t("chorez.desc-p3")}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Flutter</span>
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Dart</span>
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Chorez</span>
          </div>
        </div>

        {/* Sektion: Making Of */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Making Of</h2>

          <p className="text-gray-200 mb-4">
            {t("makingof.intro")}
            Die Entwicklung von Chorez war (und ist) für mich ein spannender Lernprozess. Hier dokumentiere ich die Tools, Frameworks und Erfahrungen, die mich begleitet haben.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>
              <strong className="text-teal-400">Flutter & Dart</strong>: {t("makingof.flutter")}
            </li>
            <li>
              <strong className="text-teal-400">VSCode</strong>: {t("makingof.vscode")}
            </li>
            <li>
              <strong className="text-teal-400">Android Studio</strong>: {t("makingof.androidstudio")}
            </li>
            <li>
              <strong className="text-teal-400">Testing</strong>: {t("makingof.testing")}
            </li>
            <li>
              <strong className="text-teal-400">Deployment</strong>: {t("makingof.deployment")}
            </li>
          </ul>

          <p className="text-gray-200 mb-4">
            {t("makingof.ending")}
          </p>
        </div>
      </section>
    </>
  );
}
