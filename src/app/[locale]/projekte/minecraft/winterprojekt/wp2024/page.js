"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { updates, galleryImages } from "../../../../components/winterprojekt24Data";
import Gallery from "../../../../components/gallery";


export default function Winterprojekt2024() {
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2024</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                        Das erste Winterprojekt mit eigenem Plugin!
                    </p>
                </section>

                {/* Download */}
                <section className="mb-16 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Downloads</h2>
                    <p className="text-gray-300 mb-8 max-w-prose mx-auto">
                        Lade dir die Welt oder die Lobby des Winterprojekts 2024 herunter
                        und erkunde die Map selbst.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://github.com/PlaywithK/PlaywithKde/releases/download/Test/Winterprojekt2024_Map.zip"
                            download
                            className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all inline-flex items-center justify-center gap-2"
                        >
                            🡇 Map herunterladen
                        </a>

                        <a
                            href="https://github.com/PlaywithK/PlaywithKde/releases/download/Test/Winterprojekt2024_Map.zip"
                            download
                            className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all inline-flex items-center justify-center gap-2"
                        >
                            🡇 Lobby herunterladen
                        </a>
                    </div>
                    <p>
                        Minecraft-Version: 1.21.1
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Updates */}
                <section className="mb-8 mt-12">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Versionsverlauf</h2>
                    <p className="text-gray-300 max-w-2xl mb-6">
                        Das Winterprojekt 2024 setzte neue Maßstäbe mit einem eigens entwickelten Server-Plugin, das über mehrere Updates hinweg verbessert wurde. Über 3.500 Zeilen Code sind in das Projekt geflossen, auch wenn am Ende nicht alle geplanten Features dabei waren, war es eine wertvolle Erfahrung.
                    </p>

                    {updates.slice(0, 3).map(({ version, changes }) => (
                        <details key={version} className="mb-6 bg-gray-800 rounded-lg p-4 border border-white/10">
                            <summary className="cursor-pointer font-semibold text-lg text-teal-400 select-none">
                                ⬆️ Update V.{version}
                            </summary>
                            <ul className="mt-3 list-disc list-inside text-gray-300">
                                {changes.map(({ type, text }, i) => (
                                    <li key={i} className="mb-1">
                                        <span className={`font-semibold capitalize mr-2 ${typeColors[type] ?? "text-gray-400"}`}>
                                            {type}:
                                        </span>
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </details>
                    ))}
                    <Link href="./wp2024/updates" className="inline-block mt-6 px-5 py-3 bg-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white font-semibold rounded-lg shadow-md">
                        Alle Updates anzeigen →
                    </Link>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Gallery */}
                <Gallery
                    title="Community Galerie"
                    description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
                    images={galleryImages}
                />
            </div>
        </main>
    );
}