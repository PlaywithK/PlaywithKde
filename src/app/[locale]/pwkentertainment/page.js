"use client";

import Image from "next/image";
import {usePageBasics} from "@/components/pageBasics";
import Hero from "@/components/hero";
import {H1, H2, H3, P, PSmall, PLarge, Section} from "@/components/design";
import LastEdited from "@/components/lastedited";

export default function PWKEntertainment() {
    const {t, common, locale} = usePageBasics("pwkentertainment");

    return (
        <>
            <HeroSection t={t}/>
            <AboutSection t={t}/>
            <HistorySection t={t}/>
            <ClientsSection t={t}/>
            <ReviewsSection t={t}/>
            <LastEdited date="20.07.2026"/>
        </>
    );
}

function StarIcon() {
    return (
        <svg
            className="w-5 h-5 text-yellow-400 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.176 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z"/>
        </svg>
    );
}

function HeroSection({t}) {
    return <Hero title={t("title")} subtitle={t("desc")}/>;
}

function AboutSection({t}) {
    return (
        <Section className="!max-w-4xl">
            <H2 className="text-3xl mb-4">{t("sections.about.title")}</H2>
            <div className="space-y-3">
                {t.raw("sections.about.text").map((paragraph, i) => (
                    <P key={i} className="leading-relaxed">{paragraph}</P>
                ))}
            </div>
        </Section>
    );
}

function HistorySection({t}) {
    return (
        <Section className="!max-w-4xl">
            <H2 className="mb-4">{t("sections.history.title")}</H2>
            <div className="space-y-3">
                {t.raw("sections.history.text").map((paragraph, i) => (
                    <P key={i} className="leading-relaxed">{paragraph}</P>
                ))}
            </div>
        </Section>
    );
}

function ClientsSection({t}) {
    const projects = [
        {
            title: t("sections.clients.zetshu.name"),
            description: t("sections.clients.zetshu.desc"),
            image: "/Zetshueikko-TwitchOffline_V1.png",
            link: "https://www.twitch.tv/zetshueikko",
        },
        {
            title: t("sections.clients.horrorblubb.name"),
            description: t("sections.clients.horrorblubb.desc"),
            image: "/bloodypb.png",
            link: "https://www.twitch.tv/horrorblubb",
        },
        {
            title: t("sections.clients.davidson.name"),
            description: t("sections.clients.davidson.desc"),
            image: "/david_banner.jpg",
            link: "https://www.youtube.com/@DavidsonTv_",
        },
    ];

    return (
        <Section>
            <H2 className="text-center text-3xl font-semibold text-teal-400 mb-8">{t("sections.clients.title")}</H2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map(({title, description, image, link}) => (
                    <a
                        key={title}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gray-800 rounded-xl p-4 shadow-lg border border-white border-opacity-30 flex flex-col items-center hover:border-teal-400 transition"
                    >
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover rounded-lg group-hover:scale-105 transition-transform"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-teal-400 mb-2 text-center">{title}</h3>
                        <p className="text-gray-300 text-center">{description}</p>
                    </a>
                ))}
            </div>
        </Section>
    );
}

function ReviewsSection({t}) {
    const customers = [
        {
            name: "Anakin Klassen",
            feedback: t("sections.reviews.r1"),
        },
        {
            name: "kxnkywaifu",
            feedback: t("sections.reviews.r2"),
        },
        {
            name: "Christopher Metzler",
            feedback: t("sections.reviews.r3"),
        },
    ];

    return (
        <Section className="!max-w-6xl">
            <H2 className="text-center text-3xl font-semibold mb-8">{t("sections.reviews.title")}</H2>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {customers.map(({name, feedback}) => (
                    <blockquote
                        key={name}
                        className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white border-opacity-30"
                    >
                        <div className="mb-3">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i}/>
                            ))}
                        </div>
                        <p className="text-gray-200 italic text-lg">„{feedback}“</p>
                        <footer className="mt-4 text-teal-400 font-semibold text-right">
                            — {name}
                        </footer>
                    </blockquote>
                ))}
            </div>
        </Section>
    );
}