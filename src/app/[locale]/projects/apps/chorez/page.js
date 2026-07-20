"use client";

import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";

export default function Chorez() {
    const {t, common, locale} = usePageBasics("chorez");

  return (
    <>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Chorez</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Diese Seite ist Work-in-Progress!
        </p>
      </section>

      <div className="space-y-20 max-w-5xl mx-auto">
        <p>Hallo Welt!</p>
      </div>

      <LastEdited date="31.05.2026" />
    </>
  );
}