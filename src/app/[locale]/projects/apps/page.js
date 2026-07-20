"use client";

import Link from "next/link";
import Image from "next/image";
import {H2, H3, P, PLarge, Section} from "@/components/design";
import Hero from "@/components/hero";
import ProgramCard from "@/components/programcard";
import {usePageBasics} from "@/components/pageBasics";
import LastEdited from "@/components/lastedited";

export default function AppEntwicklung() {
    const {t, common, locale} = usePageBasics("appdev");

    const programCategories = [
        {
            category: "PROGRAMME",
            programs: [
                {
                    name: t("programs.androidstudio.name"),
                    logo: "/logos/androidStudioLogo.webp",
                    description: t("programs.androidstudio.desc"),
                    link: "https://www.jetbrains.com/webstorm/",
                },
                {
                    name: t("programs.github.name"),
                    logo: "/logos/githubLogo.png",
                    description: t("programs.github.desc"),
                    link: "https://code.visualstudio.com/",
                },
            ],
        },
    ]

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")}/>

            <Section>
                <H2 className="text-2xl font-boldmb-3">{t("introTitle")}</H2>
                <P>{t("intro")}</P>
            </Section>

            {/* Flutter Banner */}
            <section
                className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 transform bg-gradient-to-r from-teal-800 to-teal-600 py-20 text-white mb-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                            <div className="flex-shrink-0 mb-6 md:mb-0">
                                <Image src="/flutter-logo.svg" alt="Flutter logo" width={96} height={96}/>
                            </div>
                            <div>
                                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2">{t("makingof.flutterTitle")}</h2>
                                <p className="text-xl text-gray-100 max-w-3xl">{t("makingof.flutter")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-6">{t("makingof.title")}</H2>

                <div className="space-y-8">
                    {programCategories.map((cat) => (
                        <div key={cat.category}>
                            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-3">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {cat.programs.map((program) => (
                                    <ProgramCard key={program.name} {...program} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div
                    className="relative rounded-2xl bg-gradient-to-br from-teal-400/15 via-teal-400/5 to-transparent border border-teal-400/20 p-6 sm:p-8 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"/>
                    <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                <span className="text-xs uppercase tracking-wider text-teal-400 font-medium">
                    Community
                </span>
                            <h3 className="text-xl font-bold text-white mt-1">
                                Du willst genaueres zu meiner Webseite wissen?
                            </h3>
                            <P className="text-sm mt-2">
                                Diese Webseite ist Open Source, klicke dich gerne durch meinen Code!
                            </P>
                        </div>
                        <a
                            href="https://github.com/PlaywithK/PlaywithKde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 flex-shrink-0 rounded-lg
                            bg-teal-400 text-black font-semibold text-sm px-5 py-3 transition-all duration-300
                            hover:bg-teal-300 hover:-translate-y-0.5"
                        >
                            Zum Repository →
                        </a>
                    </div>
                </div>
            </Section>

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

            <LastEdited date="19.07.2026"/>
        </>
    );
}
