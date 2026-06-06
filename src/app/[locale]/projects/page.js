"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge } from "@/components/design";
import LastEdited from "@/components/lastedited";

const paths = {
  item1: "/projects/minecraft/winterprojekt",
  item2: "/projects/minecraft/pwkde",
  item3: "/projects/minecraft/outlaw",
};

export default function Projekte() {
  const t = useTranslations("projects");
  const params = useParams();
  const locale = params.locale;

  const ProjectCard = ({ image, title, desc, tags = [], link, reverse = false, children }) => (
    <section
      className={`bg-gray-800 rounded-xl shadow-xl border border-white/10 p-6 ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      <div className={`grid md:grid-cols-2 gap-8 items-center`}>
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-xl shadow-lg border border-white/10 object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <H2 className="text-2xl font-bold text-teal-400 mb-3">{title}</H2>
          <p className="text-gray-300 mb-4">{desc}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <Link
            href={link}
            className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
          >
            Mehr erfahren ➔
          </Link>
        </div>
      </div>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );


  return (
    <>
      <Hero title={t("title")} subtitle={t("desc")} />

      <hr className="border-t border-gray-700 my-12" />

      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Web-Entwicklung */}
        <ProjectCard
          image="/canva_coding.jpg"
          title={t("webdev.title")}
          desc={t("webdev.desc")}
          tags={[t("webdev.tags").map((tag) => t(tag))]}
          link={`/${locale}/projects/web`}
        />

        {/* Web-Spiele */}
        <ProjectCard
          image="/canva_coding.jpg"
          title={t("webgames.title")}
          desc={t("webgames.desc")}
          tags={[t("webgames.tags").map((tag) => t(tag))]}
          link={`/${locale}/projects/webgames`}
        />

        {/* Spieleentwicklung */}
        <ProjectCard
          image="/unity_dev_placeholder.png"
          title={t("gamedev.title")}
          desc={t("gamedev.desc")}
          tags={[t("gamedev.tags").map((tag) => t(tag))]}
          link={`/${locale}/projects/games`}
          reverse
        >

          {/* Itch.io-Child */}
          <div className="mt-6 p-4 bg-gray-700 rounded-xl text-gray-300 flex items-center gap-4">
            <div className="w-32 h-20 relative">
              <Image
                src="/itchio.webp"
                alt={t("itch.title")}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">{t("itch.title")}</h3>
              <p className="text-gray-300 text-sm">{t("itch.desc")}</p>
              <Link
                href="https://playwithk.itch.io/"
                className="text-teal-300 text-sm underline"
              >
                Zu Itch.io →
              </Link>
            </div>
          </div>

          {/* AoE-Child */}
          <div className="mt-6 p-4 bg-gray-700 rounded-xl text-gray-300 flex items-center gap-4">
            <div className="w-32 h-20 relative">
              <Image
                src="/AoE_Shopseite_Titelbereichskapsel.png"
                alt={t("elysia.title")}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">{t("elysia.title")}</h3>
              <p className="text-gray-300 text-sm">{t("elysia.desc")}</p>
              <Link
                href={`/${locale}/projects/games`}
                className="text-teal-300 text-sm underline"
              >
                Mehr erfahren →
              </Link>
            </div>
          </div>

          {/* Minari-Child */}
          <div className="mt-6 p-4 bg-gray-700 rounded-xl text-gray-300 flex items-center gap-4">
            <div className="w-32 h-20 relative">
              <Image
                src="/chorez_placeholder.png"
                alt={t("minari.title")}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">{t("minari.title")}</h3>
              <p className="text-gray-300 text-sm">{t("minari.desc")}</p>
              <Link
                href={`/${locale}/projects/games`}
                className="text-teal-300 text-sm underline"
              >
                Mehr erfahren →
              </Link>
            </div>
          </div>
        </ProjectCard>

        {/* App-Entwicklung */}
        <ProjectCard
          image="/canva_coding.jpg"
          title={t("appdev.title")}
          desc={t("appdev.desc")}
          tags={[t("appdev.tags").map((tag) => t(tag))]}
          link={`/${locale}/projects/apps`}
        >

          {/* Chorez-Child */}
          <div className="mt-6 p-4 bg-gray-700 rounded-xl text-gray-300 flex items-center gap-4">
            <div className="w-32 h-20 relative">
              <Image
                src="/chorez_placeholder.png"
                alt={t("chorez.title")}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-teal-400 font-semibold">{t("chorez.title")}</h3>
              <p className="text-gray-300 text-sm">{t("chorez.desc")}</p>
              <Link
                href={`/${locale}/projects/apps/chorez`}
                className="text-teal-300 text-sm underline"
              >
                Mehr erfahren →
              </Link>
            </div>
          </div>
        </ProjectCard>

        {/* Minecraft Modding */}
        <ProjectCard
          image="/canva_coding.jpg"
          title={t("mcmodding.title")}
          desc={t("mcmodding.desc")}
          tags={[t("mcmodding.tags").map((tag) => t(tag))]}
          link={`/${locale}/projects/minecraft/modding`}
        />
      </div>

      <hr className="border-t border-gray-700 my-12" />

      {/* Minecraft Projekte */}
      <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-8 sm:pb-8">
        <H2 className="text-4xl font-bold text-teal-400 mb-10 text-center">{t("mcprojects.title")}</H2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["item1", "item2", "item3"].map((key) => (
            <Link
              key={key}
              href={`/de${paths[key]}`}
              className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  src={t(`mcprojects.${key}.src`)}
                  alt={t(`mcprojects.${key}.alt`)}
                  fill
                  className="object-cover filter blur-sm transition-filter transition-transform duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-3xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                  {t(`mcprojects.${key}.title`)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <LastEdited date="06.06.2026" />
    </>
  );
}
