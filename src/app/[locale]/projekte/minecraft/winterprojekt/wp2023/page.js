"use client";

import React, { useEffect, useState } from "react";
import { galleryImages } from "@/components/winterprojekt23Data";
import Gallery from "@/components/gallery";
import LastEdited from "@/components/lastedited";

export default function Winterprojekt2023() {
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2023</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        In 2023 kam eine andere Worldgen in das Projekt, mit der sich nicht jeder anfreunden konnte.
                    </p>
                </section>

                {/* Download */}
                <section className="mb-16 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Download</h2>
                    <p className="text-gray-300 mb-8 max-w-prose mx-auto">
                        Lade dir die Welt oder die Lobby des Winterprojekts 2024 herunter und erkunde die Map selbst.
                    </p>

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