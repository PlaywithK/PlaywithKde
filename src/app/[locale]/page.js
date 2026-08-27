"use client";

import Link from "next/link";
import Image from "next/image";
import {usePageBasics} from "@/components/pageBasics";
import {H1, H2, H3, P, PSmall, PLarge, Section} from "@/components/design";
import {latestUpdates} from "@/components/homeLatest";
import {projectCards, IconBadge} from "@/components/homeProjectCards";
import LastEdited from "@/components/lastedited";


export default function Home() {
    const {t, common, locale} = usePageBasics("home");

    return (
        <>
            <HeroSection t={t} common={common} locale={locale}/>
            <AboutSection t={t} locale={locale}/>
            <LatestSection/>
            <ProjectsSection t={t} common={common} locale={locale}/>
            <LastEdited date="26.08.2026"/>
        </>
    );
}

function HeroSection({t, common, locale}) {
    return (
        <section
            className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 text-center text-white -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950"/>
            <div
                className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"/>

            <div className="relative z-10 w-full px-6 sm:px-8">
                <div className="mx-auto max-w-3xl flex flex-col items-center">
                    <h1 className="whitespace-nowrap text-6xl font-extrabold tracking-wide leading-tight mb-6
                        bg-gradient-to-b from-teal-200 via-teal-400 to-teal-700 text-transparent bg-clip-text
                        drop-shadow-[0_0_25px_rgba(45,212,191,0.25)] opacity-0 translate-y-5 animate-fade-in-up">
                        {t("hero.title")}
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed
                        opacity-0 translate-y-5 animate-fade-in-up animation-delay-200">
                        {t("hero.subtitle")}
                    </p>

                    <div className="opacity-0 translate-y-5 animate-fade-in-up animation-delay-400">
                        <Link
                            href={`/${locale}/projects`}
                            className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                        >
                            {common("buttons.toProjects")}
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

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

function LatestSection() {
    return (
        <Section>
            <H2 className="text-center mb-8">Latest</H2>
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                {latestUpdates.map(({title, description, date}, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-5
                            hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/50 transition-all duration-300 cursor-pointer"
                    >
                        <IconBadge path="M13 10V3L4 14h7v7l9-11h-7z"/>
                        <div className="flex-1">
                            <H3 className="text-base font-semibold text-teal-400">{title}</H3>
                            <P className="text-sm text-gray-300">{description}</P>
                        </div>
                        <PSmall className="flex-shrink-0 text-gray-500">{date}</PSmall>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function ProjectsSection({t, common, locale}) {
    return (
        <Section>
            <H2 className="text-center mb-8">Current Projects</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectCards.map(({key, link, iconPath}) => (
                    <Link
                        key={key}
                        href={`/${locale}/${link}`}
                        className="group flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-teal-400/50 transition-all"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <IconBadge path={iconPath}/>
                            <H3 className="text-lg font-semibold text-teal-400">{t(`projects.${key}.title`)}</H3>
                        </div>
                        <P className="text-sm text-gray-300 mb-4 flex-1">{t(`projects.${key}.desc`)}</P>
                        <span
                            className="inline-flex items-center gap-1 text-sm font-medium text-teal-300 group-hover:gap-2 transition-all">
                            {common("buttons.learnMore")}
                            <span aria-hidden="true">→</span>
                        </span>
                    </Link>
                ))}
            </div>
        </Section>
    );
}