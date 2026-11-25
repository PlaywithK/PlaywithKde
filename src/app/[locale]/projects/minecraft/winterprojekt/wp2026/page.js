"use client";

import Gallery from "@/components/gallery";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge } from "@/components/design";
import ServerStatusCard from "@/components/serverstatus";
import { updates, galleryImages } from "@/components/winterprojekt/winterprojekt25Data";
import LastEdited from "@/components/lastedited";

const beschreibung = [
    "Das Winterprojekt 2026 wird in einem Create-Mod Modpack stattfinden.",
    "Create ermöglicht eine völlig neue Art Minecraft zu spielen. Im Grunde dreht sich alles um Rotationsenergie, mit dessen Hilfe wir maschinen, automatische Crafter, Züge und mehr herstellen können!",
    "Es gibt in diesem Jahr erstmals ein festes Regelwerk. Ich bitte alle Teilnehmer, sich dieses vor Projektstart durchzulesen.",
];

const PROJEKTSTART = new Date("2026-11-27T18:00:00+01:00");

const teilnehmer = [
    "PlaywithK",
    "Mineceater",
    "Downburstbisha",
    "Bloodyhorrorkid",
    "irwa_",
    "TacHavok",
    "JxstLeave",
    "jonaswithj",
    "jakobwithj",
    "UnluckyBoy",
    "Aize777",
    "Baumarzt",
    "_Samira_0"
];

const modKategorien = [
    {
        titel: "Create Mods",
        mods: [
            { name: "Create", slug: "create" },
            { name: "Create: Copycats+", slug: "copycats" },
            { name: "Create: Design n' Decor", slug: "create-design-n-decor" },
            { name: "Create: Connected", slug: "create-connected" },
            { name: "Create: Bells & Whistles", slug: "bellsandwhistles" },
            { name: "Create: Goggles", slug: "create-goggles" },
            { name: "Create: Interiors", slug: "interiors" },
            { name: "Create: Hypertubes", slug: "hypertube" },
            { name: "Create: Bits n Bobs", slug: "create-bits-n-bobs" },
            { name: "Create: Trimmed", slug: "create-trimmed" },
            { name: "Create: Framed", slug: "create-framed" },
            { name: "Create: Let The Adventure Begin", slug: "create-let-the-adventure-begin" },
            { name: "Create: Enchantment Industry", slug: "create-enchantment-industry" },
            { name: "Create Dragons Plus", slug: "create-dragons-plus" },
            { name: "Create: Railways Navigator", slug: "create-railways-navigator" },
            { name: "Create: Vibrant Vaults", slug: "create-vibrant-vaults" },
            { name: "Create: Steam 'n' Rails", slug: "create-steam-n-rails" },
            { name: "Create: Curios Jetpack & Backtank", slug: "create-curios-jetpack" },
            { name: "Create: Slice and Dice", slug: "slice-and-dice" },
        ],
    },
    {
        titel: "Extra Mods",
        mods: [
            { name: "Simple Voice Chat", slug: "simple-voice-chat" },
            { name: "Sound Physics Remastered", slug: "sound-physics-remastered" },
            { name: "Farmer's Delight", slug: "farmers-delight" },
            { name: "Ender's Delight", slug: "enders-delight" },
            { name: "My Nether's Delight", slug: "my-nethers-delight" },
            { name: "AlcoCraft+", slug: "alcocraft" },
            { name: "MES - Moog's End Structures", slug: "mes-moogs-end-structures" },
            { name: "End Villager Outposts", slug: "end-villager-outpost" },
            { name: "Distracting Trims", slug: "distracting-trims" },
        ],
    },
    {
        titel: "Client Mods",
        mods: [
            { name: "Jade", slug: "jade" },
            { name: "Jade Addons", slug: "jade-addons-forge" },
            { name: "Just Enough Items", slug: "jei" },
            { name: "Create JEI Compat", slug: "create-jei-compat" },
            { name: "Mod Menu", slug: "modmenu" },
            { name: "Iris Shader", slug: "iris" },
        ],
    },
    {
        titel: "Performance Mods",
        mods: [
            { name: "Sodium", slug: "sodium" },
            { name: "Sodium Extra", slug: "sodium-extra" },
            { name: "Lithium", slug: "lithium" },
            { name: "ModernFix", slug: "modernfix" },
            { name: "FerriteCore", slug: "ferrite-core" },
            { name: "Cerulean", slug: "cerulean-advancements"},
            { name: "AsyncLogger", slug: "asynclogger" },
            { name: "Nether Portal Fix", slug: "netherportalfix" },
            { name: "Neo Bee Fix", slug: "neo-bee-fix" },
            { name: "Entity Culling", slug: "entityculling" },
            { name: "ImmediatelyFast", slug: "immediatelyfast" },
            { name: "BadOptimization", slug: "badoptimizations" },
            { name: "MoreCulling", slug: "moreculling" },
            { name: "Kerria", slug: "kerria-opt"},
            { name: "Ixeris", slug: "ixeris" },
            { name: "Create Better FPS", slug: "createbetterfps" },
            { name: "Create: LazyTick", slug: "createlazytick" },
            { name: "Create Smart Bounds", slug: "create-smart-bounds" },
        ],
    },
];

const admins = ["PlaywithK", "Mineceater"];

const tutorialVideos = [
    { id: "efVLM0_4SAQ"},
    { id: "h7vVemd-Uek"},
];

const CREATE_WIKI_URL = "https://create.fandom.com/wiki/Create_Mod_Wiki";

export default function Winterprojekt2026() {

    return (
        <>
            <HeaderSection/>
            <BeschreibungSection/>
            <Countdown/>
            <TeilnehmerSection/>
            <ModlistSection/>
            <TutorialSection/>
            <LastEdited date="01.11.2026"/>
        </>
    );

    function HeaderSection() {
        return (
            <section className="max-w-6xl mx-auto text-center">
                <Hero
                    title="Winterprojekt 2026"
                    subtitle="Create. Automate. Explore."
                />
            </section>
        );
    }

    function BeschreibungSection() {
        return (
            <section className="max-w-4xl mx-auto px-4 py-8">
                <PLarge>{beschreibung[0]}</PLarge>
                <div className="mt-4 space-y-4">
                    {beschreibung.slice(1).map((absatz) => (
                        <P key={absatz}>{absatz}</P>
                    ))}
                </div>
            </section>
        );
    }

    function TeilnehmerSection() {
        const adminListe = teilnehmer.filter((name) => admins.includes(name));
        const andere = teilnehmer.filter((name) => !admins.includes(name));

        const renderTeilnehmer = (name) => (
            <li
                key={name}
                className="flex items-center gap-4 rounded-lg border p-3"
            >
                <img
                    src={`https://mc-heads.net/avatar/${name}/64`}
                    alt={`Minecraft-Skin von ${name}`}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="rounded-sm [image-rendering:pixelated]"
                />
                <span className="font-medium">
    {name}
                    {admins.includes(name) && (
                        <span className="ml-1 text-sm opacity-70">(Admin)</span>
                    )}
</span>
            </li>
        );

        return (
            <section className="max-w-6xl mx-auto px-4 py-8">
                <H2>Teilnehmer ({teilnehmer.length})</H2>

                {/* Admins */}
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {adminListe.map(renderTeilnehmer)}
                </ul>

                {/* Andere Teilnehmer */}
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {andere.map(renderTeilnehmer)}
                </ul>
            </section>
        );
    }
}

function getTimeLeft() {
    const diff = PROJEKTSTART.getTime() - Date.now();

    if (diff <= 0) return null;

    return {
        tage: Math.floor(diff / (1000 * 60 * 60 * 24)),
        stunden: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minuten: Math.floor((diff / (1000 * 60)) % 60),
        sekunden: Math.floor((diff / 1000) % 60),
    };
}

function Countdown() {
    // Startwert undefined, damit Server und Client beim ersten Render übereinstimmen
    const [timeLeft, setTimeLeft] = useState(undefined);

    useEffect(() => {
        setTimeLeft(getTimeLeft());
        const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (n) => String(n).padStart(2, "0");

    return (
        <section className="max-w-6xl mx-auto px-4 py-8 text-center">
            <H2>
                {timeLeft === undefined
                    ? "\u00A0"
                    : timeLeft === null
                        ? "Das Projekt hat begonnen!"
                        : `${timeLeft.tage} Tage ${pad(timeLeft.stunden)} Std. ${pad(timeLeft.minuten)} Min. ${pad(timeLeft.sekunden)} Sek.`}
            </H2>
            <P>bis zum Projektstart am 27.11.2026 um 18:00 Uhr</P>
        </section>
    );
}

function ModlistSection() {
    const modLink = ({ name, slug }) =>
        slug
            ? `https://modrinth.com/mod/${slug}`
            : `https://modrinth.com/mods?q=${encodeURIComponent(name)}`;

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <H2>Mods</H2>
            <P>Klicke auf eine Mod, um zur Modrinth-Seite zu gelangen.</P>

            {modKategorien.map((kategorie) => (
                <div key={kategorie.titel} className="mt-6">
                    <H3>
                        {kategorie.titel}
                    </H3>

                    <ul className="mt-3 flex flex-wrap gap-2">
                        {kategorie.mods.map((mod) => (
                            <li key={mod.name}>
                                <a
                                    href={modLink(mod)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-gray-800 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-teal-400 hover:text-teal-400"
                                >
                                    {mod.name}
                                    <span aria-hidden="true" className="text-xs opacity-60">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

function TutorialSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <H2>Einstieg</H2>
            <P>
                Ich habe zum Einstieg in die Create-Mod diese beiden Videos genutzt. Ihr könnt aber auch gerne bei Mineceater nachfragen.
            </P>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
                {tutorialVideos.map(({ id, titel }) => (
                    <div
                        key={id}
                        className="overflow-hidden rounded-lg border border-white/10 bg-gray-800"
                    >
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${id}`}
                                title={titel}
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <a
                href={CREATE_WIKI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-lg border border-white/10 bg-gray-800 p-5 transition-colors hover:border-teal-400 hover:bg-gray-700"
            >
                <span className="flex items-center justify-between gap-2 text-lg font-semibold text-teal-400">
                    Create Mod Wiki
                    <span aria-hidden="true">↗</span>
                </span>
                <span className="mt-1 block text-sm text-gray-300">
                    Alle Blöcke, Maschinen und Rezepte der Create-Mod zum Nachschlagen.
                </span>
            </a>
        </section>
    );
}

function GallerySection() {
    return (
        <Gallery
            title="Community Galerie"
            description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
            images={galleryImages}
        />
    );
}