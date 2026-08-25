"use client";

import Image from "next/image";
import Link from "next/link";
import {H2, H3, P, Section} from "@/components/design";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";

const STEAM_URL = "https://store.steampowered.com/app/4926400/Numble/";
const ITCH_URL = "https://playwithk.itch.io/numble";
const PLAYSTORE_URL = "https://play.google.com/store/apps/";

const platforms = [
    {name: "Steam", href: STEAM_URL, logo: "/logos/steam_logo_round.webp"},
    {name: "itch.io", href: ITCH_URL, logo: "/logos/itch_logo_round.webp"},
    {name: "Google Play", href: PLAYSTORE_URL, logo: "/logos/gplay_logo_round.webp"},
];

const BUTTON_MASK = "/numble/NumbleStylesheet_ButtonOhneEcken.png";

// Cut-Corner-Style, Border-Dicke fließt mit ein
const cutClip = (cut) => `polygon(${cut}px 0%, 100% 0%, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0% 100%, 0% ${cut}px)`;

function GamePanel({
                       as: Component = "div",
                       children,
                       className = "",
                       contentClassName = "",
                       cut = 14,
                       borderWidth = 2,
                       borderColor = "#FFBF00",
                       bg = "rgba(0,0,0,0.55)",
                       hoverable = true,
                       ...props
                   }) {
    const interactionClasses = hoverable
        ? "transition-all duration-150 ease-out hover:scale-105 hover:brightness-110 active:scale-95"
        : "";

    return (
        <Component
            className={`relative inline-block ${interactionClasses} ${className}`}
            style={{ clipPath: cutClip(cut), backgroundColor: borderColor }}
            {...props}
        >
            <div
                className="absolute transition-colors duration-150"
                style={{
                    inset: `${borderWidth}px`,
                    clipPath: cutClip(Math.max(cut - borderWidth, 0)),
                    backgroundColor: bg,
                }}
            />
            <span className={`relative z-10 block px-5 py-4 ${contentClassName}`}>
                {children}
            </span>
        </Component>
    );
}

export default function Numble() {
    const {t, common, locale} = usePageBasics("numble");

    const getList = (key) => {
        const value = t.raw(key);
        return Array.isArray(value) ? value : [];
    };

    return (
        <div
            className="relative left-1/2 right-1/2 -mx-[50vw] w-screen min-h-screen overflow-hidden text-gray-100 isolate">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/numble/Numble_Steam_Background.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70"/>
                <div className="absolute inset-0 bg-[#F8A300]/5"/>
            </div>

            <Section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
                <div className="relative w-80 sm:w-[28rem] md:w-[36rem] h-40 sm:h-56 md:h-72 mb-6">
                    <Image
                        src="/numble/NumbleLogo_Glow.png"
                        alt="Numble Logo"
                        fill
                        priority
                        sizes="(max-width: 1000px) 820px, 884px"
                        className="object-contain drop-shadow-[0_0_25px_rgba(255,191,0,0.35)]"
                    />
                </div>

                <GamePanel cut={10} hoverable={false} contentClassName="!py-1.5 !px-4 text-[#FFBF00] text-sm font-bold tracking-wide">
                    {t("hero.releaseBadge")}
                </GamePanel>

                <P className="max-w-xl text-gray-200 mb-8 mt-4">{t("hero.subtitle")}</P>

                <div className="flex flex-wrap gap-6 justify-center mt-8">
                    {platforms.map((platform) => (
                        <Link
                            key={platform.name}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={platform.name}
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border border-[#FFBF00]/30 hover:border-[#FFBF00] hover:scale-110 transition-all duration-300"
                        >
                            <Image src={platform.logo} alt={platform.name} fill sizes="80px" className="object-cover"/>
                        </Link>
                    ))}
                </div>
            </Section>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 pb-24 space-y-16">
                <Section>
                    <H2 className="!text-[#FFBF00] text-3xl font-bold mb-4 text-center">{t("about.title")}</H2>
                    <P className="text-white">{t("about.paragraph")}</P>
                </Section>

                <Section>
                    <H2 className="!text-[#FFBF00] text-3xl font-bold mb-6 text-center">{t("features.title")}</H2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {getList("features.list").map((feature, i) => (
                            <GamePanel key={i} hoverable={false} contentClassName="text-white text-sm font-medium text-left">
                                <span className="text-[#FFBF00] font-bold mr-2">&gt;</span>
                                {feature}
                            </GamePanel>
                        ))}
                    </div>
                </Section>

                <Section>
                    <H3 className="!text-[#F8A300] text-2xl font-semibold">{t("modes.title")}</H3>
                    <P className="text-white mb-5">{t("modes.paragraph")}</P>

                    <H3 className="!text-[#F8A300] text-2xl font-semibold">{t("custom.title")}</H3>
                    <P className="text-white mb-5">{t("custom.paragraph")}</P>

                    <H3 className="!text-[#F8A300] text-2xl font-semibold">{t("themes.title")}</H3>
                    <P className="text-white mb-5">{t("themes.paragraph")}</P>
                </Section>

                <Section className="text-center pt-8 border-t border-white/20">
                    <P className="text-white mb-4">{t("bottomCta.text")}</P>
                    <GamePanel
                        as={Link}
                        href={STEAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FFBF00] hover:bg-[#F8A300] px-6 py-3 cursor-pointer"
                        contentClassName="font-semibold text-white"
                    >
                        {t("hero.wishlistCta")} ➔
                    </GamePanel>
                </Section>

                <Section className="text-center pt-8 border-t border-white/20">
                    <div className="flex flex-wrap justify-center gap-4">
                        <GamePanel
                            as={Link}
                            href={`/${locale}/projects/gamedev/numble/patchnotes`}
                            rel="noopener noreferrer"
                            className="bg-[#FFBF00] hover:bg-[#F8A300] px-6 py-3 cursor-pointer"
                            contentClassName="font-semibold text-white"
                        >
                            Patchnotes ➔
                        </GamePanel>

                        <GamePanel
                            as={Link}
                            href={`/${locale}/projects/gamedev/numble/forum`}
                            rel="noopener noreferrer"
                            className="bg-[#FFBF00] hover:bg-[#F8A300] px-6 py-3 cursor-pointer"
                            contentClassName="font-semibold text-white"
                        >
                            To Forum ➔
                        </GamePanel>
                    </div>
                </Section>
            </div>

            <LastEdited date="25.08.2026"/>
        </div>
    );
}