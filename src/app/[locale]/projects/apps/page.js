"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Hero from "@/components/hero";
import Image from "next/image";
import { H2, H3, P, PLarge } from "@/components/design";
import LastEdited from "@/components/lastedited";

export default function AppEntwicklung() {
  const t = useTranslations("appdev");
  const common = useTranslations("common");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "App-Entwicklung - PlaywithK.de"
      : "App Development - PlaywithK.de";
  }, [locale]);

  return (
    <>
      <Hero title={t("title")} subtitle={t("subtitle")} />

      <section className="max-w-6xl mx-auto text-center">
        <H2 className="mx-auto max-w-3xl">{t("introTitle")}</H2>
        <P className="mx-auto mb-12">{t("intro")}</P>
        <P className="mx-auto mb-12">{t("makingof.intro")}</P>
      </section>

      {/* Flutter Banner */}
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 transform bg-gradient-to-r from-teal-800 to-teal-600 py-20 text-white mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <Image src="/flutter-logo.svg" alt="Flutter logo" width={96} height={96} />
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">{t("makingof.flutterTitle")}</h2>
                <p className="text-xl text-gray-100 max-w-3xl">{t("makingof.flutter")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto space-y-16 mb-16">
        <p className="mb-8">{t("makingof.intro")}</p>

        <div className="space-y-8 text-gray-200">
          <div>
            <H3 className="text-teal-300">{t("makingof.androidstudioTitle")}</H3>
            <P>{t("makingof.androidstudio")}</P>
          </div>
          <div>
            <H3 className="text-teal-300">{t("makingof.testingTitle")}</H3>
            <P>{t("makingof.testing")}</P>
            <P>{t("makingof.ending")}</P>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Chorez */}
          <div className="rounded-2xl border border-white/10 bg-gray-800 p-6 space-y-5">
            <H2>Chorez</H2>
            <P className="mb-6">{t("chorez.desc-p1")}</P>
            <H3 className="text-teal-300">{t("chorez.featuresTitle")}</H3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t("chorez.feature1")}</li>
              <li>{t("chorez.feature2")}</li>
              <li>{t("chorez.feature3")}</li>
            </ul>
            <P>{t("chorez.desc-p2")}</P>
            <P>{t("chorez.desc-p3")}</P>

            <P>{t("makingof.deployment")}</P>

            <Link
              href={`/${locale}/projects/apps/chorez`}
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {common("buttons.learnMore")} ➔
            </Link>
          </div>

          {/* Weitere Apps */}
          <div className="rounded-2xl border border-white/10 bg-gray-800 p-6 space-y-5">
            <H2>Weitere Apps</H2>
            <P className="mb-6">{t("chorez.desc-p1")}</P>
            <H3 className="text-teal-300">{t("chorez.featuresTitle")}</H3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>{t("chorez.feature1")}</li>
              <li>{t("chorez.feature2")}</li>
              <li>{t("chorez.feature3")}</li>
            </ul>
            <P>{t("chorez.desc-p2")}</P>
            <P>{t("chorez.desc-p3")}</P>

            <P>{t("makingof.deployment")}</P>

            <Link
              href={`/${locale}/projects/apps/chorez`}
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
            >
              {common("buttons.learnMore")} ➔
            </Link>
          </div>
        </div>
      </section>

      <LastEdited date="13.06.2026" />
    </>
  );
}
