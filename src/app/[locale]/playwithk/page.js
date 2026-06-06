"use client";


import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";

export default function PlaywithK() {
  const t = useTranslations("playwithK");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "PlaywithK - PlaywithK.de"
      : "PlaywithK - PlaywithK.de";
  }, [locale]);

  const timelineEntries = [
    {
      date: "30.03.2015",
      title: t("timeline.entries.0.title"),
      description: t("timeline.entries.0.description"),
    },
    {
      date: "12.01.2016",
      title: t("timeline.entries.1.title"),
      description: t("timeline.entries.1.description"),
    },
    {
      date: "13.04.2016",
      title: t("timeline.entries.2.title"),
      description: t("timeline.entries.2.description"),
    },
    {
      date: "23.07.2017",
      title: t("timeline.entries.3.title"),
      description: t("timeline.entries.3.description"),
    },
    {
      date: "01.09.2023",
      title: t("timeline.entries.4.title"),
      description: t("timeline.entries.4.description"),
    },
    {
      date: "01.02.2024",
      title: t("timeline.entries.5.title"),
      description: t("timeline.entries.5.description"),
    },
    {
      date: "01.06.2024",
      title: t("timeline.entries.6.title"),
      description: t("timeline.entries.6.description"),
    },
  ];

  return (
    <>
      <Hero title="PlaywithK" subtitle={t("hero.subtitle")} />

      {/* About */}
      <section
        id="profile"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-30">
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <Image
            src="/PWK_Profilbild_round.png"
            alt="Profilbild Kev"
            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover mb-6 sm:mb-8 shadow-lg transition-transform duration-300 hover:scale-105" />
          <div className="flex gap-6 mt-2 sm:mt-4">
            {[
              {
                href: "https://youtube.com/playwithk",
                label: "YouTube",
                iconSrc: "/icon_youtube.svg",
              },
              {
                href: "https://twitch.tv/playwithk",
                label: "Twitch",
                iconSrc: "/icon_twitch.svg",
              },
              {
                href: "https://tiktok.com/@playwithk",
                label: "TikTok",
                iconSrc: "/icon_tiktok.svg",
              },
            ].map(({ href, label, iconSrc }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-full bg-teal-600 p-2.5 sm:p-3 shadow-md hover:bg-teal-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Image
                  src={iconSrc}
                  alt={label}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  style={{ filter: 'invert(1)' }}
                  loading="lazy"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-2/3 text-gray-300 space-y-6 font-sans text-sm sm:text-base">
          <p className="text-xl font-semibold text-teal-400 leading-relaxed">
            {t("about.heading")}
          </p>
          <p className="leading-relaxed">
            {t("about.p1")}
          </p>
          <p className="leading-relaxed">
            {t("about.p2")}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section
        id="timeline"
        className="max-w-5xl mx-auto px-0 pt-0 relative">

        {/* Vertikale Linie: auf Desktop mittig, auf Mobil links */}
        <div className="absolute top-0 left-1/2 sm:left-1/2 left-4 -translate-x-1/2 sm:-translate-x-1/2 translate-x-0 w-1 bg-teal-600 h-full"></div>

        <div className="pt-12 relative">
          {timelineEntries.map(({ date, title, description }, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
            mb-12 flex items-center w-full relative
            flex-col sm:flex-row
            ${isLeft ? "sm:flex-row justify-between" : "sm:flex-row-reverse justify-between"}
          `}>
                <div
                  className={`
              w-full sm:w-6/13 p-6 bg-gray-700 rounded-lg shadow-lg border border-white border-opacity-20 z-10
              ${isLeft ? "sm:mr-6" : "sm:ml-6"}
              sm:text-left text-left
            `}>
                  <time className="block mb-2 text-sm font-semibold text-teal-400">{date}</time>
                  <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
                <span
                  className={`absolute top-1/2 -translate-y-1/2 left-1/2 sm:left-1/2 left-4-translate-x-1/2 sm:-translate-x-1/2 translate-x-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-gray-800 z-20 hidden sm:block`}
                  aria-hidden="true"
                ></span>
              </div>
            );
          })}
        </div>
      </section>

      <LastEdited date="06.06.2026" />
    </>
  );
}