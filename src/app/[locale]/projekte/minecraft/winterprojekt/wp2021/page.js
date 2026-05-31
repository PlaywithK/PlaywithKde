"use client";

import React, { useEffect, useState } from "react";
import { galleryImages } from "@/components/winterprojekt21Data";
import Gallery from "@/components/gallery";
import LastEdited from "@/components/lastedited";
import LastEdited from "@/components/lastedited";

export default function Winterprojekt2021() {
    const typeColors = {
        neu: "text-green-500",
        überarbeitet: "text-orange-400",
        fix: "text-red-500",
    };

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 py-16">
            <div className="w-full max-w-5xl">
                {/* Projektbeschreibung */}
                <section className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2021</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Das Winterprojekt 2021 brachte viele neue Teilnehmer und damit frischen Wind in das Projekt.
                    </p>
                </section>

                {/* Download */}
                <section className="mb-16 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Downloads</h2>
                    <p className="text-gray-300 mb-8 max-w-prose mx-auto">
                        Lade dir die Welt des Winterprojekts 2021 herunter.
                    </p>

                    <div className="my-8 p-5 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex flex-col items-center text-center gap-3">
                        <div>
                            <p className="text-teal-300 font-semibold">Info:</p>
                            <p className="text-gray-300">
                                Einige Teile der Map wurden nachträglich verändert, da einige Spieler leider unschöne Dinge gebaut haben.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://github.com/PlaywithK/PlaywithKde/releases/download/Test/Winterprojekt2024_Map.zip"
                            download
                            className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all inline-flex items-center justify-center gap-2"
                        >
                            🡇 Map herunterladen
                        </a>
                    </div>
                    <p>
                        Minecraft-Version: 1.xx.x
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Gallery */}
                <Gallery
                    title="Community Galerie"
                    description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
                    images={galleryImages}
                />
            </div>

            <LastEdited date="31.05.2026" />
        </main >
    );
}