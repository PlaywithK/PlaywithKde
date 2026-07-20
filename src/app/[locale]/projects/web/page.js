"use client";

import {useState, useRef, useEffect} from "react";
import {H2, H3, P, Section} from "@/components/design";
import {usePageBasics} from "@/components/pageBasics";
import Hero from "@/components/hero";
import ProgramCard from "@/components/programcard";
import LastEdited from "@/components/lastedited";

export default function Webentwicklung() {
    const {t, common, locale} = usePageBasics("webdev");

    const steps = [
        {
            year: "2015",
            title: "HTML entdeckt",
            desc: `Ich habe angefangen, einfache Webseiten mit reinem HTML zu erstellen. Das war meine allererste Erfahrung mit Programmierung überhaupt. Ich habe viel experimentiert und erste kleine Seiten lokal gespeichert.`,
        },
        {
            year: "2016",
            title: "CSS gelernt",
            desc: `Mit CSS habe ich begonnen, Farben, Layouts und Positionierungen zu verstehen. Ich konnte meine HTML-Seiten jetzt auch optisch ansprechend gestalten und habe erste kleine Projekte gemacht.`,
        },
        {
            year: "2019",
            title: "Erste Website live",
            desc: `Meine erste Webseite ging live – ich habe sie über IONOS gehostet und war stolz, eine eigene Domain und Webseite online zu haben. Das war ein großer Schritt in Richtung professioneller Webentwicklung.`,
        },
        {
            year: "2020",
            title: "WordPress ausprobiert",
            desc: `Ich habe kurzzeitig mit WordPress gearbeitet und Themes angepasst. Obwohl ich WordPress praktisch fand, bin ich letztlich doch zu reinem HTML und CSS zurückgekehrt, weil ich mehr Kontrolle wollte.`,
        },
        {
            year: "2022",
            title: "PlaywithK v1",
            desc: `Die erste Version meiner Webseite PlaywithK.de entstand mit HTML, CSS und JavaScript. Ich habe Features gebaut, die Spaß machen und mich in moderner Webentwicklung weitergebracht haben.`,
        },
        {
            year: "2025",
            title: "Next.js + Tailwind",
            desc: `Ich habe PlaywithK.de komplett neu aufgesetzt: Mit Next.js für schnelle Server-Rendering-Performance, Tailwind CSS für stilvolle und effiziente Gestaltung und modernen Webtechnologien.`,
        },
    ];

    const programCategories = [
        {
            category: "IDEs",
            programs: [
                {
                    name: t("programs.webstorm.name"),
                    logo: "/logos/WebStorm_icon.png",
                    description: t("programs.webstorm.desc"),
                    link: "https://www.jetbrains.com/webstorm/",
                },
                {
                    name: t("programs.vsc.name"),
                    logo: "/logos/vscLogo.png",
                    description: t("programs.vsc.desc"),
                    link: "https://code.visualstudio.com/",
                },
            ],
        },
        {
            category: "DEPLOYMENT",
            programs: [
                {
                    name: t("programs.github.name"),
                    logo: "/logos/githubLogo.png",
                    description: t("programs.github.desc"),
                    link: "https://code.visualstudio.com/",
                },
                {
                    name: t("programs.vercel.name"),
                    logo: "/logos/vercelLogo.png",
                    description: t("programs.vercel.desc"),
                    link: "https://vercel.com/",
                },
            ],
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const children = Array.from(container.children);

        const containerRect = container.getBoundingClientRect();
        const containerMiddle = containerRect.top + containerRect.height / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        children.forEach((child, i) => {
            const rect = child.getBoundingClientRect();
            const childMiddle = rect.top + rect.height / 2;
            const distance = Math.abs(containerMiddle - childMiddle);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });

        setActiveIndex(closestIndex);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener("scroll", handleScroll, {passive: true});

        handleScroll();

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <div className="flex max-w-6xl mx-auto h-[70vh] gap-12">
                <aside
                    className="w-24 sm:w-32 flex-shrink-0 sticky top-16 h-[70vh] flex flex-col items-center justify-center py-12 relative">
                    <div
                        className="absolute left-1/2 top-12 bottom-12 w-1 bg-teal-600/50 transform -translate-x-1/2"></div>

                    {steps.map((step, i) => {
                        const isActive = i === activeIndex;
                        return (
                            <div
                                key={i}
                                className="flex items-center mb-10 relative cursor-pointer select-none"
                                style={{zIndex: isActive ? 10 : 1}}
                            >
                                <div
                                    className={`rounded-full border-4 border-teal-400 bg-gray-900 transition-all duration-300
                  ${isActive ? "w-6 h-6" : "w-4 h-4 border-teal-600 bg-gray-800"}`}
                                ></div>

                                <span
                                    className={`ml-4 font-semibold transition-all duration-300
                    ${isActive ? "text-teal-400 text-lg" : "text-gray-500 text-sm"}`}
                                >
                  {step.year}
                </span>
                            </div>
                        );
                    })}
                </aside>

                <section
                    ref={containerRef}
                    className="flex-1 overflow-y-scroll snap-y snap-mandatory px-6 sm:px-16 py-12 space-y-20"
                    style={{scrollSnapType: "y mandatory"}}
                >
                    {steps.map((step, i) => {
                        const isActive = i === activeIndex;
                        const isPrev = i === activeIndex - 1;
                        const isNext = i === activeIndex + 1;

                        return (
                            <div
                                key={i}
                                className={`snap-center flex flex-col items-center justify-center min-h-[80vh] transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : ""}
                  ${isPrev || isNext ? "opacity-50 scale-90" : "opacity-0 scale-75 pointer-events-none"}`}
                                style={{transitionProperty: "opacity, transform"}}
                            >
                                <div
                                    className="max-w-2xl text-center bg-gray-800/70 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-teal-600">
                                    <H3 className="!text-3xl !font-extrabold mb-4">{step.title}</H3>
                                    <p className="text-gray-300 text-lg whitespace-pre-line">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>

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

            <LastEdited date="19.07.2026"/>
        </>
    );
}