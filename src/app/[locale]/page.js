"use client";

import Link from "next/link";
import Image from "next/image";
import {usePageBasics} from "@/components/pageBasics";
import {H2, H3, P, PSmall, Section} from "@/components/design";
import {latestUpdates} from "@/components/homeLatest";
import {IconBadge} from "@/components/homeProjectCards";
import LastEdited from "@/components/lastedited";

/* ---------- Daten ---------- */

const mcPaths = {
    item1: "/projects/minecraft/winterprojekt",
    item2: "/projects/minecraft/pwkde",
    item3: "/projects/minecraft/outlaw",
};

const mcImages = {
    item1: "/Winterprojekt_Front.png",
    item2: "/PWKDE_Front.png",
    item3: "/Outlaw_Front.png",
};

// Unterprojekte (kleine Karten innerhalb einer Projektkarte)
const subProjects = {
    gamedev: [
        {key: "itch", image: "/itchio.webp", href: "https://playwithk.itch.io/", external: true},
        {key: "elysia", image: "/AoE_Shopseite_Titelbereichskapsel.png", href: "projects/games"},
        {key: "numble", image: "/numble/Numble_Steam_MainCapsule.png", href: "projects/gamedev/numble"},
    ],
    appdev: [
        {key: "chorez", image: "/chorez_placeholder.png", href: "projects/apps/chorez"},
    ],
};

const projects = [
    {key: "gamedev", image: "/unity_dev_placeholder.png", href: "projects/gamedev"},
    {key: "webdev", image: "/html.jpeg", href: "projects/web"},
    {key: "webGames", image: "/webgames.png", href: "projects/webgames"},
    {key: "appdev", image: "/canva_coding.jpg", href: "projects/apps"},
    {key: "mcmodding", image: "/modrinth.png", href: "projects/minecraft/modding"},
];

/* ---------- Seite ---------- */

export default function Home() {
    const {t, common, locale} = usePageBasics("home");
    const {t: tp} = usePageBasics("projects");

    return (
        <>
            <HeroSection t={t} common={common} locale={locale}/>
            <AboutSection t={t} locale={locale}/>
            <LatestSection t={t}/>
            <ProjectsSection t={t} tp={tp} common={common} locale={locale}/>
            <MinecraftSection tp={tp} locale={locale}/>
            <LastEdited date="20.11.2026"/>
        </>
    );
}

/* ---------- Hero ---------- */

function HeroSection({t, common, locale}) {
    return (
        <section
            className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 text-center text-white -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950"/>
            <div
                className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"/>

            <div className="relative z-10 w-full px-6 sm:px-8">
                <div className="mx-auto max-w-3xl flex flex-col items-center">
                    <h1 className="whitespace-nowrap text-[clamp(1.5rem,8.5vw,3.75rem)] font-extrabold tracking-wide leading-tight mb-6
    bg-gradient-to-b from-teal-200 via-teal-400 to-teal-700 text-transparent bg-clip-text
    drop-shadow-[0_0_25px_rgba(45,212,191,0.25)] opacity-0 translate-y-5 animate-fade-in-up">
                        {t("hero.title")}
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed
                        opacity-0 translate-y-5 animate-fade-in-up animation-delay-200">
                        {t("hero.subtitle")}
                    </p>

                    <div className="opacity-0 translate-y-5 animate-fade-in-up animation-delay-400">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                        >
                            {common("buttons.toProjects")}
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Über mich ---------- */

function AboutSection({t, locale}) {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <H2 className="mb-4">{t("about.title")}</H2>
                    <P className="text-gray-300 mb-6">{t("about.text")}</P>
                    <Link
                        href={`/${locale}/playwithk`}
                        className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                    >
                        {t("about.more")}
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/closed.png"
                        alt={t("about.imageAlt")}
                        width={400}
                        height={400}
                        className="w-64 sm:w-80 md:w-full max-w-sm rounded-2xl"
                    />
                </div>
            </div>
        </Section>
    );
}

/* ---------- Neuigkeiten ---------- */

function LatestSection({t}) {
    return (
        <Section>
            <H2 className="text-center mb-8">{t("latest.title")}</H2>

            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 max-w-5xl mx-auto
                [scrollbar-width:thin] [scrollbar-color:theme(colors.teal.700)_transparent]">
                {latestUpdates.map(({title, description, date, image}, idx) => (
                    <article
                        key={idx}
                        className="snap-start flex-shrink-0 w-72 sm:w-80 flex flex-col gap-3 bg-gray-800/50 backdrop-blur-sm
                            rounded-xl border border-white/10 p-5
                            hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3">
                            {image ? (
                                <div className="relative w-14 h-14 flex-shrink-0">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        sizes="56px"
                                        className="object-cover rounded-lg border border-white/10"
                                    />
                                </div>
                            ) : (
                                <IconBadge path="M13 10V3L4 14h7v7l9-11h-7z"/>
                            )}
                            <div className="min-w-0">
                                <H3 className="text-base font-semibold text-teal-400 truncate">{title}</H3>
                                <PSmall className="text-gray-500">{date}</PSmall>
                            </div>
                        </div>
                        <P className="text-sm text-gray-300">{description}</P>
                    </article>
                ))}
            </div>
        </Section>
    );
}

/* ---------- Projekte ---------- */

function ProjectsSection({t, tp, common, locale}) {
    const getTags = (key) => {
        if (typeof tp.raw === "function") {
            const value = tp.raw(key);
            return Array.isArray(value) ? value : [];
        }
        return [];
    };

    return (
        <Section id="projects" className="scroll-mt-20">
            <H2 className="text-center mb-3">{t("projects.title")}</H2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">{tp("desc")}</p>

            <div className="space-y-8 max-w-5xl mx-auto">
                {projects.map(({key, image, href}, idx) => (
                    <ProjectCard
                        key={key}
                        image={image}
                        title={tp(`${key}.title`)}
                        desc={tp(`${key}.desc`)}
                        tags={getTags(`${key}.tags`)}
                        link={`/${locale}/${href}`}
                        learnMore={common("buttons.learnMore")}
                        reverse={idx % 2 === 1}
                    >
                        {subProjects[key]?.map((sub) => (
                            <SubProject
                                key={sub.key}
                                image={sub.image}
                                title={tp(`${sub.key}.title`)}
                                desc={tp(`${sub.key}.desc`)}
                                href={sub.external ? sub.href : `/${locale}/${sub.href}`}
                                external={sub.external}
                                label={sub.external ? tp("itch.link") : common("buttons.learnMore")}
                            />
                        ))}
                    </ProjectCard>
                ))}
            </div>
        </Section>
    );
}

function ProjectCard({image, title, desc, tags = [], link, learnMore, reverse = false, children}) {
    return (
        <article
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-6
                hover:border-teal-400/40 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative w-full h-64 md:h-72 ${reverse ? "md:order-last" : ""}`}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="rounded-xl shadow-lg border border-white/10 object-cover"
                    />
                </div>
                <div className="text-center md:text-left">
                    <H2 className="text-2xl font-bold text-teal-400 mb-3">{title}</H2>
                    <p className="text-gray-300 mb-4">{desc}</p>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                            {tags.map((tag, i) => (
                                <span key={i} className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <Link
                        href={link}
                        className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
                    >
                        {learnMore} ➔
                    </Link>
                </div>
            </div>

            {children && <div className="mt-6 space-y-3">{children}</div>}
        </article>
    );
}

function SubProject({image, title, desc, href, label, external = false}) {
    const linkClass = "text-teal-300 text-sm underline hover:text-teal-200";
    return (
        <div className="p-4 bg-gray-700/60 rounded-xl text-gray-300 flex items-center gap-4">
            <div className="w-28 sm:w-32 h-20 relative flex-shrink-0">
                <Image src={image} alt={title} fill sizes="128px" className="object-cover rounded-lg"/>
            </div>
            <div>
                <h3 className="text-teal-400 font-semibold">{title}</h3>
                <p className="text-gray-300 text-sm mb-1">{desc}</p>
                {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {label} →
                    </a>
                ) : (
                    <Link href={href} className={linkClass}>
                        {label} ➔
                    </Link>
                )}
            </div>
        </div>
    );
}

/* ---------- Minecraft-Projekte ---------- */

function MinecraftSection({tp, locale}) {
    return (
        <Section>
            <H2 className="text-center mb-10">{tp("mcprojects.title")}</H2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {Object.keys(mcPaths).map((key) => (
                    <Link
                        key={key}
                        href={`/${locale}${mcPaths[key]}`}
                        className="relative block overflow-hidden rounded-xl shadow-lg border border-white/10 group"
                    >
                        <div className="relative w-full h-64 sm:h-72 md:h-80">
                            <Image
                                src={mcImages[key]}
                                alt={tp(`mcprojects.${key}.alt`)}
                                fill
                                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover blur-sm transition-all duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/0 transition-colors duration-500">
                            <span className="text-white text-3xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                                {tp(`mcprojects.${key}.title`)}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}