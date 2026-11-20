"use client";

import Gallery from "@/components/gallery";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge } from "@/components/design";
import ServerStatusCard from "@/components/serverstatus";
import { updates, galleryImages } from "@/components/winterprojekt/winterprojekt25Data";
import LastEdited from "@/components/lastedited";

const regeln = [
    {
        titel: "Griefing",
        punkte: [
            "Es ist nicht erlaubt, mutwillig Gebäude, Strukturen und vor allem Maschinen von anderen Spielern abzubauen oder zu zerstören.",
            "Das Verändern oder Hinzufügen von Blöcken ist erlaubt, solange es keine Maschinen zerstört und in unter 10 Minuten rückgängig zu machen ist. Das heißt: 30 Obsidian-Blöcke zu setzen wäre erlaubt. Einen Ender-Crystal in die Base zu stellen wäre verboten. Holz zu strippen (nicht im Übermaß) wäre erlaubt.",
            "ABER: Bitte bedenkt, dass das Projekt eine schöne Zeit für jeden auf dem Server sein soll. Sollten Beschwerden auftreten, kann ein Verbot für das Trollen einer Person ausgesprochen werden, an das sich gehalten werden muss.",
        ],
    },
    {
        titel: "Trolling",
        punkte: [
            "Wie in Regel 1 erwähnt, ist das generelle Trollen oder Necken anderer Spieler ausdrücklich erlaubt, ALLERDINGS sollte dabei niemand ernsthaft zu Schaden kommen. Kommt es zu einem klaren STOPP der Person, muss dieser auch berücksichtigt werden.",
            "Eventuell könnte man früh im Projekt eine Art Anti-Troll-Banner erstellen, das sich Personen, die strikt gegen solche Interaktionen sind, an die Base hängen können.",
            "Es steht den Admins frei, Trolling oder Ähnliches jederzeit zu stoppen. Wer gegen Admin-Anweisungen verstößt, muss mit einem zeitweisen Ausschluss aus dem Projekt rechnen.",
        ],
    },
    {
        titel: "Stehlen",
        punkte: [
            "Das Nehmen oder Stehlen von Items ohne Erlaubnis anderer ist verboten, vor allem aus Maschinerien!",
        ],
        hinweis: "Es wird einen Handelsdistrikt geben, in dem Items verkauft und gekauft werden können!",
    },
    {
        titel: "Cheats und Client-Mods",
        punkte: [
            "Client-Modifikationen wie Shader, Minimaps etc., die keinen Vorteil gegenüber anderen Spielern geben, sind im Projekt erlaubt und sogar erwünscht.",
            "Modifikationen wie X-Ray, Cheats oder Ähnliches sind verboten. Das Nutzen solcher Mods kann zu einem zeitweisen Ausschluss aus dem Projekt führen.",
        ],
    },
    {
        titel: "Respektvoller Umgang",
        punkte: [
            "Zwischen allen Teilnehmern sollte ein respektvoller Umgang und Ton herrschen. Keiner wird ernsthaft beleidigt (Späße sind natürlich ausgenommen) oder aus irgendeinem Grund diskriminiert, ausgeschlossen oder Ähnliches.",
        ],
    },
    {
        titel: "Symbolik",
        punkte: [
            "Politische Andeutungen aller Art sowie Symboliken, Zeichen oder Ähnliches sind nicht gestattet.",
        ],
    },
];

export default function Winterprojekt2026() {

    return (
        <>
            <HeaderSection/>
            <RegelSection/>
            <LastEdited date="01.11.2026"/>
        </>
    );

    function HeaderSection() {
        return (
            <section className="max-w-6xl mx-auto text-center">
                <Hero
                    title="Winterprojekt 2026 Regelwerk"
                    subtitle="Dieses Jahr gibt es erstmals ein festes Regelwerk. Ich bitte alle Teilnehmer, sich dieses durchzulesen."
                />
            </section>
        );
    }

    function RegelSection() {
        return (
            <section className="max-w-6xl mx-auto px-4 py-8">
                <div className="mt-6">
                    {regeln.map((regel, index) => (
                        <RegelItem key={regel.titel} regel={regel} nummer={index + 1}/>
                    ))}
                </div>
            </section>
        );
    }

    function RegelItem({regel, nummer}) {
        const {titel, punkte, hinweis} = regel;

        return (
            <details className="mb-4 bg-gray-800 rounded-lg p-4 border border-white/10">
                <summary className="cursor-pointer font-semibold text-lg text-teal-400 select-none">
                    {nummer}. {titel.toUpperCase()}
                </summary>
                <ul className="mt-3 list-disc list-inside text-gray-300">
                    {punkte.map((punkt) => (
                        <li key={punkt} className="mb-2">
                            {punkt}
                        </li>
                    ))}
                </ul>

                {hinweis && (
                    <p className="mt-2 text-sm text-gray-400">({hinweis})</p>
                )}
            </details>
        );
    }
}