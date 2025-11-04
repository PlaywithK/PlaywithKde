"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Impressum() {
  const t = useTranslations("Impressum");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "Impressum - PlaywithK.de"
      : "Imprint - PlaywithK.de";
  }, [locale]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-teal-400">{t("title")}</h1>

        <section className="mb-8 space-y-4 text-gray-300">
          <p>{t("description")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">{t("contact.title")}</h2>
          <p className="text-gray-300">E-Mail: <a href="mailto:info@playwithk.de" className="underline hover:text-teal-400">info@playwithk.de</a></p>
        </section>

        <section className="mb-8 space-y-4 text-gray-300">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">{t("nutzungsrecht.title")}</h2>
          <p>{t("nutzungsrecht.description")}</p>

          <h2 className="text-2xl font-semibold mb-2 text-teal-400">{t("quellen.title")}</h2>
          <p>
            SVG Icons:{' '}
            <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-400">
              https://www.svgrepo.com/
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}