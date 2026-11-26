"use client";

import React from "react";
import Hero from "@/components/hero";
import { H3 } from "@/components/design";
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

const regelId = (index) => `regel-${index + 1}`;

export default function Winterprojekt2026Regeln() {
    return (
        <>
            <HeaderSection />
            <RegelNavigation />
            <RegelSection />
            <LastEdited date="26.11.2026" />
        </>
    );
}

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

function RegelNavigation() {
    return (
        <nav
            aria-label="Regelübersicht"
            className="max-w-4xl mx-auto px-4 pt-4"
        >
            <ul className="flex flex-wrap justify-center gap-2">
                {regeln.map((regel, index) => (
                    <li key={regel.titel}>
                        <a
                            href={`#${regelId(index)}`}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-800 px-4 py-2 text-sm text-gray-200 transition-colors hover:border-teal-400 hover:text-teal-400"
                        >
                            <span aria-hidden="true">{regel.icon}</span>
                            <span>
                                {index + 1}. {regel.titel}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

function RegelSection() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
            <div className="space-y-6">
                {regeln.map((regel, index) => (
                    <RegelItem
                        key={regel.titel}
                        id={regelId(index)}
                        regel={regel}
                        nummer={index + 1}
                    />
                ))}
            </div>
        </section>
    );
}

function RegelItem({ id, regel, nummer }) {
    const { titel, punkte, hinweis } = regel;

    return (
        <article
            id={id}
            className="scroll-mt-24 overflow-hidden rounded-xl border border-white/10 border-l-4 border-l-teal-500
                bg-gray-800/50 backdrop-blur-sm shadow-lg transition-colors hover:border-teal-400/40 hover:border-l-teal-400"
        >
            <header className="flex items-center gap-4 border-b border-white/10 bg-gray-800 px-5 py-4">
                <span
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full
                        bg-teal-500/20 text-lg font-bold text-teal-300"
                >
                    {nummer}
                </span>
                <H3 className="flex-1 text-xl font-bold uppercase tracking-wide text-teal-400">
                    {titel}
                </H3>
            </header>

            {/* Punkte */}
            <div className="px-5 py-5">
                <ul className="space-y-3">
                    {punkte.map((punkt) => (
                        <li key={punkt} className="flex gap-3 text-gray-300">
                            <span
                                aria-hidden="true"
                                className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-400"
                            />
                            <span className="leading-relaxed">{punkt}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}