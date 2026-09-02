"use client";

import Image from "next/image";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {useState} from "react";
import {usePageBasics} from "@/components/pageBasics";
import {H2, H3, P, Section} from "@/components/design";
import {links} from "@/components/sociallinks";

export default function SocialLinks() {
    const {t} = usePageBasics("sociallinks");

    return (
        <>
            <HeroSection t={t}/>
            <SocialLinksSection t={t}/>
            <SupportSection t={t}/>
            <LastEdited date="16.08.2026"/>
        </>
    );
}

function LinkCard({name, logo, description, href}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-3xl p-7 min-h-[260px]
    bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent
    border border-white/10 overflow-hidden transition-all duration-300
    hover:border-teal-400/50 hover:-translate-y-1.5
    hover:shadow-2xl hover:shadow-teal-400/10"
        >
            {/* Glow */}
            <div
                className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20
                           group-hover:opacity-45 group-hover:scale-110
                           transition-all duration-500
                           bg-gradient-to-br from-teal-400 to-transparent"
            />

            {/* Logo */}
            <div
                className="relative w-16 h-16 shrink-0 rounded-2xl bg-white/10 p-3
                           flex items-center justify-center
                           group-hover:scale-105 group-hover:bg-white/15
                           transition-all duration-300"
            >
                <Image
                    src={logo}
                    alt={name}
                    width={48}
                    height={48}
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Text */}
            <div className="relative mt-5">
                <H3 className="mb-2 min-h-[28px] flex items-center gap-2">
                    {name}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 shrink-0 text-teal-400
                                   opacity-0 -translate-x-1
                                   group-hover:opacity-100
                                   group-hover:translate-x-0
                                   transition-all duration-300"
                    >
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                    </svg>
                </H3>

                {description && (
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </a>
    );
}

function LinkGrid({links, visibleCount}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((link, index) => (
                <div
                    key={link.id}
                    className={`
                        transition-all duration-500 ease-out
                        ${
                        index >= visibleCount
                            ? "animate-fade-in"
                            : ""
                    }
                    `}
                >
                    <LinkCard {...link} />
                </div>
            ))}
        </div>
    );
}

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("desc")}/>;
}

function SocialLinksSection({t}) {
    const [showAll, setShowAll] = useState(false);

    const translatedLinks = links
        .filter((link) => link.type === "social")
        .map((link) => ({
            ...link,
            name: t(`links.${link.id}.title`),
            description: t(`links.${link.id}.desc`),
        }));

    const visibleSocialLinks = showAll
        ? translatedLinks
        : translatedLinks.slice(0, 6);

    return (
        <Section>
            <LinkGrid links={visibleSocialLinks}/>
            {translatedLinks.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button
                        type="button"
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-full border border-white/10 bg-white/5 px-6 py-3
                                   text-sm font-medium text-gray-300
                                   transition-all duration-300
                                   hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-400"
                    >
                        {showAll ? t("showLess") : t("showMore")}
                    </button>
                </div>
            )}
        </Section>
    );
}

function SupportSection({t}) {
    const translatedLinks = links
        .filter((link) => link.type === "support")
        .map((link) => ({
            ...link,
            name: t(`support.${link.id}.title`),
            description: t(`support.${link.id}.desc`),
        }));

    return (
        <Section>
            <H2 className="text-2xl font-bold text-teal-400 mb-3">
                {t("support.title")}
            </H2>

            <P className="mb-6">
                {t("support.desc")}
            </P>

            <LinkGrid links={translatedLinks} visibleCount={translatedLinks.length}/>
        </Section>
    );
}