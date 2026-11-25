"use client";

import Image from "next/image";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";
import {H2, P, Section} from "@/components/design";

export default function PlaywithK() {
    const {t} = usePageBasics("playwithk");

    return (
        <>
            <HeroSection t={t}/>
            <ProfileSection t={t}/>
            <FavoritesSection t={t}/>
            <CompletedSection t={t}/>
            <AnimeSection t={t}/>
            <TimelineSection t={t}/>
            <LastEdited date="20.11.2026"/>
        </>
    );
}

function HeroSection({t}) {
    return <Hero title="PlaywithK" subtitle={t("hero.subtitle")}/>;
}

function ProfileSection({t}) {
    const socials = [
        {href: "https://youtube.com/playwithk", label: "YouTube", iconSrc: "/icon_youtube.svg"},
        {href: "https://twitch.tv/playwithk", label: "Twitch", iconSrc: "/icon_twitch.svg"},
        {href: "https://tiktok.com/@playwithk", label: "TikTok", iconSrc: "/icon_tiktok.svg"},
        {href: "https://tiktok.com/@playwithk", label: "TikTok", iconSrc: "/icon_tiktok.svg"},
        {href: "https://tiktok.com/@playwithk", label: "TikTok", iconSrc: "/icon_tiktok.svg"},
    ];

    return (
        <Section id="profile">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center">
                    <Image
                        src="/PWK_Profilbild_round.png"
                        alt="Round Logo PlaywithK"
                        width={208}
                        height={208}
                        className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover mb-6 shadow-lg transition-transform duration-300 hover:scale-105"/>
                    <div className="flex gap-4">
                        {socials.map(({href, label, iconSrc}) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="rounded-full bg-teal-600 hover:bg-teal-400 p-3 shadow-md transition-all flex items-center justify-center">
                                <Image
                                    src={iconSrc}
                                    alt={label}
                                    width={208}
                                    height={208}
                                    className="w-6 h-6 sm:w-7 sm:h-7"
                                    style={{filter: "invert(1)"}}
                                    loading="lazy"
                                    draggable={false}
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <H2 className="mb-4">{t("about.heading")}</H2>
                    <P className="text-gray-300 mb-4">{t("about.p1")}</P>
                    <P className="text-gray-300">{t("about.p2")}</P>
                </div>
            </div>
        </Section>
    );
}

function TimelineSection({t}) {
    const timelineEntries = [
        {date: "30.03.2015", title: t("timeline.entries.0.title"), description: t("timeline.entries.0.description")},
        {date: "12.01.2016", title: t("timeline.entries.1.title"), description: t("timeline.entries.1.description")},
        {date: "13.04.2016", title: t("timeline.entries.2.title"), description: t("timeline.entries.2.description")},
        {date: "23.07.2017", title: t("timeline.entries.3.title"), description: t("timeline.entries.3.description")},
        {date: "01.09.2023", title: t("timeline.entries.4.title"), description: t("timeline.entries.4.description")},
        {date: "01.02.2024", title: t("timeline.entries.5.title"), description: t("timeline.entries.5.description")},
        {date: "01.06.2024", title: t("timeline.entries.6.title"), description: t("timeline.entries.6.description")},
    ];

    return (
        <Section id="timeline">
            <H2 className="text-center mb-10">{t("timeline.title")}</H2>

            <div className="max-w-5xl mx-auto relative">
                {/* Vertikale Linie: auf Desktop mittig, auf Mobil links */}
                <div
                    className="absolute top-0 left-1/2 sm:left-1/2 left-4 -translate-x-1/2 sm:-translate-x-1/2 translate-x-0 w-1 bg-teal-600/60 h-full"></div>

                <div className="relative">
                    {timelineEntries.map(({date, title, description}, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`
                                    mb-12 last:mb-0 flex items-center w-full relative
                                    flex-col sm:flex-row
                                    ${isLeft ? "sm:flex-row justify-between" : "sm:flex-row-reverse justify-between"}
                                `}>
                                <article
                                    className={`
                                        w-full sm:w-6/13 p-5 z-10 text-left
                                        bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10
                                        hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/50 transition-all duration-300
                                        ${isLeft ? "sm:mr-6" : "sm:ml-6"}
                                    `}>
                                    <time className="block mb-1 text-sm text-gray-500">{date}</time>
                                    <h3 className="text-base font-semibold text-teal-400 mb-2">{title}</h3>
                                    <P className="text-sm text-gray-300">{description}</P>
                                </article>
                                <span
                                    className="absolute top-1/2 -translate-y-1/2 left-1/2 sm:left-1/2 left-4-translate-x-1/2 sm:-translate-x-1/2 translate-x-0 w-6 h-6 bg-teal-600 rounded-full border-4 border-gray-900 z-20 hidden sm:block"
                                    aria-hidden="true"
                                ></span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

const gridClasses = "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto";

function FavoritesSection({t}) {
    const favoriteGames = [
        {title: "Satisfactory", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Celeste", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Minecraft", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Cyberpunk 2077", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Hogwarts Legacy", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
    ];

    return (
        <Section id="gaming">
            <H2 className="text-center mb-3">{t("gaming.favorites.heading")}</H2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
                {t("gaming.favorites.description")}
            </p>

            <div className={gridClasses}>
                {favoriteGames.map((game, index) => (
                    <GameCard key={index} game={game}/>
                ))}
            </div>
        </Section>
    );
}

function CompletedSection({t}) {
    const completedGames = [
        {title: "ARC Raiders", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Cyberpunk 2077", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Cyberpunk 2077 - Phantom Liberty", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "LEGO® Harry Potter™ Collection", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Hogwarts Legacy", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
        {title: "Waterpark Simulator", coverSrc: "/games/placeholder.png", subtitle: "Genre"},
    ];

    const MAX_VISIBLE_COMPLETED = 5;
    const visibleCompleted = completedGames.slice(0, MAX_VISIBLE_COMPLETED);
    const hasMore = completedGames.length > MAX_VISIBLE_COMPLETED;

    return (
        <Section id="completed">
            <H2 className="text-center mb-3">{t("gaming.completed.heading")}</H2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-2">
                {t("gaming.completed.description")}
            </p>
            <p className="text-center text-sm font-semibold text-teal-300 mb-10">
                {completedGames.length} {t("gaming.completed.countLabel")}
            </p>

            <div className={gridClasses}>
                {visibleCompleted.map((game, index) => (
                    <GameCard key={index} game={game}/>
                ))}
            </div>

            {hasMore && (
                <div className="mt-10 flex justify-center">
                    {/* Vorbereitet: onClick / href später ergänzen */}
                    <button
                        type="button"
                        disabled
                        title="Kommt bald"
                        className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-teal-600">
                        {t("gaming.completed.showAll")}
                    </button>
                </div>
            )}
        </Section>
    );
}

function GameCard({game}) {
    const {title, coverSrc, subtitle} = game;

    return (
        <article
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden
                hover:shadow-xl hover:-translate-y-1 hover:border-teal-400/50 transition-all duration-300">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                    src={coverSrc}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <div className="p-3">
                <div className="flex items-end min-h-[2.5rem]">
                    <h3 title={title}
                        className="text-sm leading-5 font-semibold text-teal-400 line-clamp-2">
                        {title}
                    </h3>
                </div>
                {subtitle && <p className="text-xs text-gray-500 mt-0.5 truncate">{subtitle}</p>}
            </div>
        </article>
    );
}

function AnimeSection({t}) {
    const topAnime = [
        {title: "Oshi No Ko", coverSrc: "/anime/placeholder.png", subtitle: "Genre"},
        {title: "Death Note", coverSrc: "/anime/placeholder.png", subtitle: "Genre"},
        {title: "Attack on Titan", coverSrc: "/anime/placeholder.png", subtitle: "Genre"},
        {title: "The Irregular at Magic Highschool", coverSrc: "/anime/placeholder.png", subtitle: "Genre"},
        {title: "Puella Magi Madoka Magica", coverSrc: "/anime/placeholder.png", subtitle: "Genre"},
    ];

    return (
        <Section id="anime">
            <H2 className="text-center mb-3">{t("anime.heading")}</H2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
                {t("anime.description")}
            </p>

            <div className={gridClasses}>
                {topAnime.map((anime, index) => (
                    <GameCard key={index} game={anime}/>
                ))}
            </div>
        </Section>
    );
}