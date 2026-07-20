"use client";

import Link from "next/link";
import Image from "next/image";
import {usePageBasics} from "@/components/pageBasics";
import {H1, H2, H3, P, PSmall, PLarge, Section} from "@/components/design";
import LastEdited from "@/components/lastedited";


export default function Home() {
    const {t, common, locale} = usePageBasics("home");

    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 text-center text-white -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-purple-600 to-pink-500 opacity-90"/>
                <div className="relative z-10 w-full px-4 md:px-8">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg opacity-0 translate-y-5 animate-fade-in-up ">
                        {t("hero.title")}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto mb-10 opacity-0 translate-y-5 animate-fade-in-up animation-delay-200">
                        {t("hero.subtitle")}
                    </p>
                    <div className="opacity-0 translate-y-5 animate-fade-in-up animation-delay-400">
                        <Link
                            href={`/${locale}/projects`}
                            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
                        >
                            {common("buttons.toProjects")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* About me */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <H2 className="mb-4">{t("about.title")}</H2>
                        <P className="text-gray-300 mb-6">
                            {t("about.text")}
                        </P>
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

            {/* Projekte */}
            <Section>
                <H2 className="text-center"> {t("projects.title")} </H2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: t("projects.webgames.title"),
                            description: t("projects.webgames.desc"),
                            link: "projects/webgames",
                        },
                        {
                            title: t("projects.apps.title"),
                            description: t("projects.apps.desc"),
                            link: "projects/apps",
                        },
                        {
                            title: t("projects.gamedev.title"),
                            description: t("projects.gamedev.desc"),
                            link: "projects/gamedev",
                        },
                    ].map(({title, description, link}, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6 hover:shadow-xl transition-all"
                        >
                            <H3 className="text-xl font-semibold mb-4 text-teal-400 text-center">{title}</H3>

                            <div className="flex-1 flex items-center justify-center text-center">
                                <P className="">{description}</P>
                            </div>

                            <div className="mt-6 text-center">
                                <Link
                                    href={`/${locale}/${link}`}
                                    className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
                                >
                                    {common("buttons.learnMore")}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <LastEdited date="20.07.2026"/>
        </>
    );
}

