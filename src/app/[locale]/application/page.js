"use client";

import Link from "next/link";
import {H1, H2, H3, P, PSmall, Section} from "@/components/design";
import LastEdited from "@/components/lastedited";

export default function ApplicationPage() {
    return (
        <>
            <HeroSection/>
            <ProfileSection/>
            <ExperienceSection/>
            <SkillsSection/>
            <EducationSection/>
            <LastEdited date="26.08.2026"/>
        </>
    );
}

function HeroSection() {
    return (
        <section
            className="relative overflow-hidden pt-20 pb-20 sm:pt-24 sm:pb-24
            text-white -mx-4 sm:-mx-6 lg:-mx-8"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-teal-950 to-gray-950"/>

            <div
                className="absolute -top-40 left-1/2 h-[32rem] w-[32rem]
                -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl"
            />

            <div
                className="absolute -bottom-48 -right-32 h-96 w-96
                rounded-full bg-teal-600/10 blur-3xl"
            />

            <div className="relative z-10 w-full px-6 sm:px-8">
                <div className="mx-auto max-w-4xl">
                    <div
                        className="flex flex-col md:flex-row
                        md:items-end md:justify-between gap-10"
                    >
                        <div>
                            <PSmall className="uppercase tracking-[0.25em] text-teal-400 mb-4">
                                Bewerbungsprofil
                            </PSmall>

                            <H1
                                className="text-5xl sm:text-6xl font-extrabold
                                tracking-wide leading-tight
                                bg-gradient-to-b from-teal-200 via-teal-400 to-teal-700
                                text-transparent bg-clip-text
                                drop-shadow-[0_0_25px_rgba(45,212,191,0.25)]"
                            >
                                Kevin Schmidt
                            </H1>

                            <p className="mt-5 text-xl sm:text-2xl text-gray-300">
                                Hobby-Developer, Selbstständiger Freiberufler
                            </p>

                            <P className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
                                Ich bin interessiert an Technik, IT und Entwicklung, Grafikdesign sowie Management.
                            </P>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProfileSection() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div
                    className="lg:col-span-2 rounded-2xl border border-white/10
                    bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8"
                >
                    <H2 className="mb-5">
                        Über mich
                    </H2>

                    <P className="text-gray-300 leading-relaxed">
                        Mein Name ist Kevin Schmidt. Ich habe bereits Erfahrungen als Selbstständiger im Bereich E-Commerce
                        sammeln können, habe Erfahrung mit klassischen Office-Programmen sowie SAP und Planungssoftware
                        und habe mir selbst das Programmieren beigebracht.
                    </P>
                </div>

                <div
                    className="rounded-2xl border border-teal-400/20
                    bg-teal-950/20 backdrop-blur-sm p-6 sm:p-8"
                >
                    <H3 className="text-teal-400 mb-5">
                        Kurz & Kompakt
                    </H3>

                    <div className="space-y-4 text-sm">
                        <InfoItem
                            label="Standort"
                            value="Armsheim, Deutschland"
                        />

                        <InfoItem
                            label="IT-Erfahrung"
                            value="MS Office, SAP, HTML & CSS, Javascript, NextJS, C#"
                        />

                        <InfoItem
                            label="Fremdsprachen"
                            value="Englisch"
                        />
                    </div>
                </div>

            </div>
        </Section>
    );
}

function ExperienceSection() {
    const experiences = [
        {
            key: "first",
            year: "2024 – heute",
            title: "SPS-Programmierer",
            company: "HAHN Automation · Rheinböllen",
            description:
                "Beschreibung deiner Tätigkeit, deiner Verantwortlichkeiten und wichtiger Ergebnisse.",
        },
        {
            key: "second",
            year: "2022 – 2024",
            title: "Selbstständige Tätigkeit im Bereich E-Commerce, Videoschnitt & Grafikdesign",
            company: "Selbstständig · Budenheim",
            description:
                "Beschreibung deiner Tätigkeit, deiner Verantwortlichkeiten und wichtiger Ergebnisse.",
        },
        {
            key: "third",
            year: "2022 – 2024",
            title: "Kommissionierer",
            company: "Deutsche Post DHL · Wiesbaden",
            description:
                "Beschreibung deiner Tätigkeit, deiner Verantwortlichkeiten und wichtiger Ergebnisse.",
        },
        {
            key: "fourth",
            year: "2020 – 2022",
            title: "Ausbildung zum Elektroniker in Betriebstechnik",
            company: "Mainzer Mobilität · Mainz",
            description:
                "Beschreibung deiner Tätigkeit, deiner Verantwortlichkeiten und wichtiger Ergebnisse.",
        },
    ];

    return (
        <Section>
            <SectionHeader
                eyebrow="Werdegang"
                title="Berufserfahrung"
            />

            <div className="relative mt-10">
                <div
                    className="absolute left-[11px] top-2 bottom-2
                    w-px bg-gradient-to-b from-teal-400/70
                    via-teal-400/30 to-transparent"
                />

                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.key}
                            className="relative pl-10"
                        >
                            <div
                                className="absolute left-0 top-2 h-6 w-6
                                rounded-full border-4 border-gray-950
                                bg-teal-500
                                shadow-[0_0_15px_rgba(45,212,191,0.4)]"
                            />

                            <div
                                className="rounded-2xl border border-white/10
                                bg-gray-800/50 backdrop-blur-sm p-6
                                hover:border-teal-400/40
                                hover:-translate-y-1
                                transition-all duration-300"
                            >
                                <div
                                    className="flex flex-col sm:flex-row
                                    sm:items-start sm:justify-between gap-2"
                                >
                                    <div>
                                        <H3 className="text-lg text-teal-400">
                                            {experience.title}
                                        </H3>

                                        <PSmall className="mt-1 text-gray-400">
                                            {experience.company}
                                        </PSmall>
                                    </div>

                                    <span
                                        className="text-sm text-gray-500
                                        whitespace-nowrap"
                                    >
                                        {experience.year}
                                    </span>
                                </div>

                                <P className="mt-4 text-sm text-gray-300 leading-relaxed">
                                    {experience.description}
                                </P>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

function SkillsSection() {
    const skills = [
        {
            key: "frontend",
            icon: "</>",
            title: "Frontend",
            description:
                "HTML, CSS, JavaScript, React, Next.js und Tailwind CSS",
        },
        {
            key: "backend",
            icon: "{ }",
            title: "Backend",
            description:
                "Node.js, APIs und Datenbanken",
        },
        {
            key: "tools",
            icon: "⚙",
            title: "Tools",
            description:
                "Git, GitHub, VS Code und Linux",
        },
        {
            key: "other",
            icon: "✦",
            title: "Weitere Kenntnisse",
            description:
                "UI/UX, Design, Problemlösung und Teamarbeit",
        },
    ];

    return (
        <Section>
            <SectionHeader
                eyebrow="Technologie"
                title="Skills & Kenntnisse"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {skills.map((skill) => (
                    <div
                        key={skill.key}
                        className="rounded-2xl border border-white/10
                        bg-gray-800/50 backdrop-blur-sm p-6
                        hover:border-teal-400/50
                        hover:bg-gray-800/70
                        transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className="flex h-11 w-11 flex-shrink-0
                                items-center justify-center
                                rounded-xl bg-teal-500/10
                                border border-teal-400/20
                                text-teal-400 font-bold"
                            >
                                {skill.icon}
                            </div>

                            <H3 className="text-lg text-teal-400">
                                {skill.title}
                            </H3>
                        </div>

                        <P className="text-sm text-gray-300 leading-relaxed">
                            {skill.description}
                        </P>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function EducationSection() {
    return (
        <Section>
            <SectionHeader
                eyebrow="Ausbildung"
                title="Bildung"
            />

            <div
                className="mt-10 rounded-2xl border border-white/10
                bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8"
            >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                        className="flex-shrink-0 flex h-14 w-14
                        items-center justify-center
                        rounded-xl bg-teal-500/10
                        border border-teal-400/20
                        text-teal-400 text-xl"
                    >
                        🎓
                    </div>

                    <div className="flex-1">
                        <div
                            className="flex flex-col sm:flex-row
                            sm:justify-between gap-2"
                        >
                            <div>
                                <H3 className="text-lg text-teal-400">
                                    Berufsausbildung
                                </H3>

                                <PSmall className="mt-1 text-gray-400">
                                    Mainzer Mobilität
                                </PSmall>
                            </div>

                            <span className="text-sm text-gray-500">
                                2022 – 2025
                            </span>
                        </div>

                        <P className="mt-4 text-sm text-gray-300 leading-relaxed">
                            Ausbildung zum Elektroniker in Betriebstechnik
                        </P>
                    </div>
                </div>
            </div>

            <div
                className="mt-10 rounded-2xl border border-white/10
                bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8"
            >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div
                        className="flex-shrink-0 flex h-14 w-14
                        items-center justify-center
                        rounded-xl bg-teal-500/10
                        border border-teal-400/20
                        text-teal-400 text-xl"
                    >
                        🎓
                    </div>

                    <div className="flex-1">
                        <div
                            className="flex flex-col sm:flex-row
                            sm:justify-between gap-2"
                        >
                            <div>
                                <H3 className="text-lg text-teal-400">
                                    Berufsbildungsreife
                                </H3>

                                <PSmall className="mt-1 text-gray-400">
                                    Rheingrafen Realschule+
                                </PSmall>
                            </div>

                            <span className="text-sm text-gray-500">
                                2022 – 2025
                            </span>
                        </div>

                        <P className="mt-4 text-sm text-gray-300 leading-relaxed">
                            Schulischer Abschluss
                        </P>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function SectionHeader({eyebrow, title}) {
    return (
        <div>
            <PSmall className="uppercase tracking-[0.2em] text-teal-400 mb-2">
                {eyebrow}
            </PSmall>

            <H2>
                {title}
            </H2>
        </div>
    );
}

function InfoItem({label, value}) {
    return (
        <div>
            <span className="block text-xs uppercase tracking-wider text-gray-500">
                {label}
            </span>

            <span className="block mt-1 text-gray-200">
                {value}
            </span>
        </div>
    );
}
