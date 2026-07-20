"use client";

import Link from "next/link";
import Image from "next/image";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";
import {H2, H3, P, Section} from "@/components/design";

export default function Outlaw() {
    const {t} = usePageBasics("minecraft");

    return (
        <>
            {/* Background*/}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/minecraft/outlaw/Outlaw_Front.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"/>
                <div className="absolute inset-0 bg-[#F8A300]/10"/>
            </div>

            {/* Main */}
            <Section
                className="!relative z-10 max-w-4xl mx-auto bg-yellow-900/70 border border-yellow-700 rounded-xl shadow-xl px-6 py-12 mt-16 backdrop-blur-sm">
                {/* Logo und Title */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20 shrink-0">
                        <Image
                            src="/minecraft/outlaw/Outlaw_Front.png"
                            alt="Minecraft Outlaw Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-5xl font-bold text-yellow-200 drop-shadow">
                        Minecraft Outlaw
                    </h1>
                </div>

                {/* Intro */}
                <P className="mb-6 text-yellow-100 leading-relaxed">
                    Willkommen im Wilden Westen! In diesem Minecraft-Projekt habe ich eine Westernstadt mit rustikalem
                    Flair,
                    staubigen Wegen und stilechten Gebäuden erschaffen – perfekt für Outlaws, Sheriffs und Cowboys.
                </P>

                <div className="relative w-full h-96 mb-8 rounded-lg shadow-lg border-2 border-yellow-600">
                    <Image
                        src="/minecraft/outlaw/Outlaw_Front.png"
                        alt="Minecraft Outlaw Bild"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Highlights */}
                <H2 className="mb-4 text-yellow-200">Highlights & Features</H2>
                <ul className="list-disc list-inside text-yellow-100 mb-8 space-y-1">
                    <li>Westernstadt mit Saloon, Sheriffbüro & Bank</li>
                    <li>Kakteen, Präriegras & trockene Flussbetten</li>
                    <li>Detailreiche Innenräume im Cowboy-Stil</li>
                    <li>Versteckte Gänge und geheime Verstecke</li>
                </ul>

                {/* Outlaw Remaster */}
                <H2 className="mb-6 mt-12 text-yellow-300 drop-shadow">Outlaw Remaster</H2>

                <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <P className="mb-4 text-yellow-100 leading-relaxed">
                            Mit dem Remaster habe ich die ursprüngliche Westernstadt neu aufgelegt: mit verbesserten
                            Texturen, neuen Baumechaniken und einer stimmungsvollen Lichtführung.
                            Ziel war es, die Outlaw-Welt noch immersiver zu gestalten.
                        </P>
                        <ul className="list-disc list-inside text-yellow-100 space-y-1">
                            <li>Neuer Bahnhof mit Lore-System</li>
                            <li>Tag-/Nacht-Zyklus mit Redstone-Licht</li>
                            <li>Neue Quests & versteckte Secrets</li>
                        </ul>
                    </div>

                    <div className="relative w-full h-80 rounded-lg border-2 border-yellow-600 shadow-lg">
                        <Image
                            src="/minecraft/outlaw/Outlaw_Front.png"
                            alt="Remaster Vorschau"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

                <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-80 rounded-lg border-2 border-yellow-600 shadow-lg">
                        <Image
                            src="/minecraft/outlaw/Outlaw_Front.png"
                            alt="Remaster Innenstadt"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>

                    <div>
                        <H3 className="mb-2 text-yellow-200">Atmosphäre & Sounddesign</H3>
                        <P className="text-yellow-100 leading-relaxed">
                            Um das Remaster authentischer zu machen, habe ich Ambientsounds hinzugefügt – von
                            Windgeräuschen bis zu knarrenden Türen. Die Stadt lebt durch Klang.
                        </P>
                    </div>
                </div>

                {/* Back */}
                <Link
                    href="/projects"
                    className="inline-block bg-yellow-700 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full border-2 border-yellow-900 shadow transition-all"
                >
                    Zurück zur Projektübersicht
                </Link>
            </Section>

            <LastEdited date="20.07.2026"/>
        </>
    );
}