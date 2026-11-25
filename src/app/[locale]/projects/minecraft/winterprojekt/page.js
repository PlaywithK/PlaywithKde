"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import {H2, P} from "@/components/design";
import LastEdited from "@/components/lastedited";
import {useDocumentTitle} from "@/components/documentTitle";
import {usePageBasics} from "@/components/pageBasics";

const allProjects = [
    {
        year: 2026,
        href: "/projects/minecraft/winterprojekt/wp2026",
        src: "/minecraft/winterprojekt/Winterprojekt_Front.png",
        version: "1.21",
        download: false
    },
    {
        year: 2025,
        href: "/projects/minecraft/winterprojekt/wp2025",
        src: "/minecraft/winterprojekt/2025/wp_25_placeholderIcon.png",
        version: "1.21",
        download: true
    },
    {
        year: 2024,
        href: "/projects/minecraft/winterprojekt/wp2024",
        src: "/minecraft/winterprojekt/2024/wp2024_Title.png",
        version: "1.21",
        download: true
    },
    {
        year: 2023,
        href: "/projects/minecraft/winterprojekt/wp2023",
        src: "/minecraft/winterprojekt/2023/wp2023_Title.png",
        version: "1.21",
        download: true
    },
    {
        year: 2022,
        href: "/projects/minecraft/winterprojekt/wp2022",
        src: "/minecraft/winterprojekt/Winterprojekt_Front.png",
        version: "1.19.2",
        download: false
    },
    {
        year: 2021,
        href: "/projects/minecraft/winterprojekt/wp2021",
        src: "/minecraft/winterprojekt/2021/wp2021_Title.png",
        version: "1.9",
        download: true
    },
    {
        year: 2020,
        href: "/projects/minecraft/winterprojekt/wp2020",
        src: "/minecraft/winterprojekt/2020/wp2020_Title.png",
        version: "1.9",
        download: true
    },
    {
        year: 2017,
        href: "/projects/minecraft/winterprojekt/wp2017",
        src: "/minecraft/winterprojekt/2017/wp2017_Title.png",
        version: "1.8.8",
        download: true
    },
]
    .map((p) => ({
        ...p,
        title: `Winterprojekt ${p.year}`,
        alt: `Winterprojekt Titelbild ${p.year}`,
    }))
    .sort((a, b) => b.year - a.year);

const [currentProject, ...pastProjects] = allProjects;

const BADGE_VARIANTS = {
    neutral: "bg-black/50 text-white border-white/20",
    success: "bg-teal-500/80 text-white border-teal-300/40",
    muted: "bg-gray-700/70 text-gray-300 border-gray-400/30",
};

export default function Winterprojekt() {
    const {t, common, locale} = usePageBasics("winterprojekt");

    useDocumentTitle(t("pageTitle"));

    return (
        <>
            <HeroSection t={t}/>
            <DescriptionSection/>
            <CurrentProjectSection locale={locale}/>
            <PastProjectsSection locale={locale}/>
            <LastEdited date="18.10.2026"/>
        </>
    );
}

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("subtitle")}/>;
}

function DescriptionSection() {
    return (
        <section className="max-w-4xl mx-auto text-center px-4 sm:px-8">
            <H2 className="text-3xl font-semibold mb-4 text-teal-400">Was ist das Winterprojekt?</H2>
            <P className="mb-8">
                Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft
                mit detailreichen Bauten erschaffen habe.
                Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
            </P>
        </section>
    );
}

function CurrentProjectSection({locale}) {
    const {href, src, alt, year} = currentProject;

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-8">
            <Link href={`/${locale}${href}`} className="block">
                <div
                    className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl shadow-lg border border-white border-opacity-10 overflow-hidden cursor-pointer">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                    <span
                        className="absolute inset-0 flex items-center justify-center text-white text-6xl font-semibold drop-shadow-lg pointer-events-none">
              {year}
            </span>
                </div>
            </Link>
        </section>
    );
}

function PastProjectsSection({locale}) {
    return (
        <section className="max-w-6xl mx-auto mt-16 px-4 sm:px-8 sm:pb-8">
            <H2 className="text-3xl font-semibold mb-6 text-teal-400">Vergangene Projekte</H2>
            <ProjectGrid locale={locale}/>
        </section>
    );
}

function ProjectGrid({locale}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pastProjects.map((project) => (
                <ProjectCard key={project.title} project={project} locale={locale}/>
            ))}
        </div>
    );
}

function ProjectCard({project, locale}) {
    const {href, src, alt, title, version, download} = project;

    return (
        <Link
            href={`/${locale}${href}`}
            className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
        >
            <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover filter blur-sm transition-filter transition-transform duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                />
            </div>

            <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 pointer-events-none">
                <Badge>⛏ {version}</Badge>
                {download ? (
                    <Badge variant="success">⬇ Download</Badge>
                ) : (
                    <Badge variant="muted">✕ Kein Download</Badge>
                )}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                    {title}
                </span>
            </div>
        </Link>
    );
}

function Badge({children, variant = "neutral"}) {
    const styles = BADGE_VARIANTS[variant] ?? BADGE_VARIANTS.neutral;

    return (
        <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${styles}`}
        >
            {children}
        </span>
    );
}