"use client";

import Link from "next/link";
import {H1, H2, H3, P, PLarge, PSmall, Section} from "@/components/design";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import ProgramCard from "@/components/programcard";
import {usePageBasics} from "@/components/pageBasics";

function EngineSection({name, logo, description}) {
    const paragraphs = Array.isArray(description) ? description : [description];
    return (
        <div className="space-y-3">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
                    <img
                        src={logo}
                        alt={name}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <H3 className="!mb-0">{name}</H3>
            </div>
            <div className="space-y-3">
                {paragraphs.map((text, i) => (
                    <P key={i} className="leading-relaxed">{text}</P>
                ))}
            </div>
        </div>
    );
}

export default function GameDev() {
    const {t, common, locale} = usePageBasics("gamedev");

    const otherEngines = [
        {
            name: t("engines.otherEngines.unreal.name"),
            logo: "/logos/UE-Icon-2023-White.png",
            description: t.raw("engines.otherEngines.unreal.text"),
        },
        {
            name: t("engines.otherEngines.gamemaker.name"),
            logo: "/logos/GameMakerLogo_white.png",
            description: t.raw("engines.otherEngines.gamemaker.text"),
        },
        {
            name: t("engines.otherEngines.godot.name"),
            logo: "/logos/GodotLogo_white.png",
            description: t.raw("engines.otherEngines.godot.text"),
        },
    ];

    const programCategories = [
        {
            category: "IDEs",
            programs: [
                {
                    name: t("programs.rider.name"),
                    logo: "/logos/Rider_icon.png",
                    description: t("programs.rider.desc"),
                    link: "https://www.jetbrains.com/rider/",
                },
                {
                    name: t("programs.vsc.name"),
                    logo: "/logos/vscLogo.png",
                    description: t("programs.vsc.desc"),
                    link: "https://code.visualstudio.com/",
                },
                {
                    name: t("programs.vs.name"),
                    logo: "/logos/vs26Logo.webp",
                    description: t("programs.vs.desc"),
                    link: "https://visualstudio.microsoft.com/",
                },
            ],
        },
        {
            category: "Art",
            programs: [
                {
                    name: t("programs.ase.name"),
                    logo: "/logos/Logo_Aseprite.png",
                    description: t("programs.ase.desc"),
                    link: "https://www.aseprite.org/",
                },
                {
                    name: t("programs.afphoto.name"),
                    logo: "/logos/Affinity_Photo_icon.png",
                    description: t("programs.afphoto.desc"),
                    link: "https://affinity.serif.com/photo/",
                },
                {
                    name: t("programs.afdesigner.name"),
                    logo: "/logos/Affinity_Designer_icon.png",
                    description: t("programs.afdesigner.desc"),
                    link: "https://affinity.serif.com/designer/",
                },
            ],
        },
        {
            category: "3D",
            programs: [
                {
                    name: t("programs.blockbench.name"),
                    logo: "/logos/Blockbench_icon.png",
                    description: t("programs.blockbench.desc"),
                    link: "https://www.blockbench.net/",
                },
                {
                    name: t("programs.magicavoxel.name"),
                    logo: "/logos/magicavoxel-logo.png",
                    description: t("programs.magicavoxel.desc"),
                    link: "https://ephtracy.github.io/",
                },
                {
                    name: t("programs.blender.name"),
                    logo: "/logos/Blender_logo.webp",
                    description: t("programs.blender.desc"),
                    link: "https://www.blender.org/",
                },
            ],
        },
        {
            category: "Planning",
            programs: [
                {
                    name: t("programs.githubprojects.name"),
                    logo: "/logos/githubLogo.png",
                    description: t("programs.githubprojects.desc"),
                    link: "https://github.com/features/issues",
                },
                {
                    name: t("programs.obsidian.name"),
                    logo: "/logos/Obsidian_logo.webp",
                    description: t("programs.obsidian.desc"),
                    link: "https://obsidian.md/",
                },
            ],
        },
        {
            category: "Version Control",
            programs: [
                {
                    name: t("programs.github.name"),
                    logo: "/logos/githubDesktopLogo.webp",
                    description: t("programs.github.desc"),
                    link: "https://desktop.github.com/",
                },
            ],
        },
    ];

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">{t("intro.title")}</H2>
                <div className="space-y-3">
                    {t.raw("intro.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>
                <Link
                    href={`/${locale}/projects/gamedev/notes`}
                    className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                    {t("documentation.link")}
                </Link>
            </Section>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">{t("documentation.title")}</H2>
                <div className="space-y-3">
                    {t.raw("documentation.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>
                <Link
                    href={`/${locale}/projects/gamedev/notes`}
                    className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                    {t("documentation.link")}
                </Link>
            </Section>

            {/*<Section>
                <H2 className="text-2xl font-boldmb-3">{t("beginner.title")}</H2>
                <div className="space-y-3">
                    {t.raw("beginner.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>
            </Section>*/}

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">{t("systems.title")}</H2>
                <div className="space-y-3">
                    {t.raw("systems.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>
                <Link
                    href={`/${locale}/projects/gamedev/notes`}
                    className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
                >
                    {t("documentation.link")}
                </Link>
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
                                Willst du mehr von meiner GameDev Journey sehen?
                            </h3>
                            <P className="text-sm mt-2">
                                Auf meinem Subreddit teile ich Updates, Screenshots und Fortschritte aus meinen
                                Projekten.
                            </P>
                        </div>
                        <a
                            href="https://www.reddit.com/r/pwkdev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 flex-shrink-0 rounded-lg
                            bg-teal-400 text-black font-semibold text-sm px-5 py-3 transition-all duration-300
                            hover:bg-teal-300 hover:-translate-y-0.5"
                        >
                            Zum Subreddit →
                        </a>
                    </div>
                </div>
            </Section>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">{t("engines.title")}</H2>
                <div className="space-y-3">
                    {t.raw("engines.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>

                {/* Featured: Unity */}
                <div className="relative pl-5 mb-8 border-l-2 border-teal-400">
                    <span className="text-xs uppercase tracking-wider text-teal-400 font-medium">
                        Main Engine
                    </span>
                    <div className="flex items-center gap-4 mt-2 mb-3">
                        <div
                            className="w-14 h-14 flex-shrink-0 rounded-xl bg-white/10 p-2.5 flex items-center justify-center">
                            <img
                                src="/logos/unityCubeLogo_white.png"
                                alt="Unity"
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        <H3 className="text-2xl !mb-0">{t("engines.unity.title")}</H3>
                    </div>
                    <div className="space-y-3">
                        {t.raw("engines.unity.text").map((paragraph, i) => (
                            <P key={i} className="leading-relaxed">{paragraph}</P>
                        ))}
                    </div>
                </div>

                {/* Other engines */}
                <div className="space-y-6">
                    {otherEngines.map((engine) => (
                        <EngineSection key={engine.name} {...engine} />
                    ))}
                </div>
            </Section>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-6">{t("programs.title")}</H2>

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
                <H2 className="text-2xl font-bold text-teal-400 mb-3">{t("aidisclosure.title")}</H2>
                <div className="space-y-3">
                    {t.raw("aidisclosure.text").map((paragraph, i) => (
                        <P key={i} className="leading-relaxed">{paragraph}</P>
                    ))}
                </div>
            </Section>

            <LastEdited date="22.07.2026"/>
        </>
    );
}