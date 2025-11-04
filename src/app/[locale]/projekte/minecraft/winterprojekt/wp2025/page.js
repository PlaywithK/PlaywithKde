"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { updates, galleryImages } from "../../../../components/winterprojekt24Data";

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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2025</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                        Das Winterprojekt 2024 war das erste Winterprojekt welches ein komplett eigenes gecodetes Plugin in Java erhalten hat!
                    </p>
                </section>

                {/* Download */}
                <section className="mb-16 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Download</h2>
                    <p className="text-gray-300 mb-6 max-w-prose mx-auto">
                        Lade dir das Winteprojekt 2025 Modpack für Modrinth herunter!
                    </p>
                    <a
                        href="/downloads/Winterprojekt2024_Map.zip"
                        download
                        className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all"
                    >
                        Modpack herunterladen 🡇
                    </a>
                </section>

                {/* Gallery */}
                {/*<section>
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Community Galerie</h2>
                    <p className="mb-8 max-w-prose">
                        In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map(({ src, alt, caption }, i) => (
                            <div key={i} className="overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group">
                                <div className="relative w-full h-64 sm:h-72 md:h-80">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>
                                <div className="bg-gray-700 p-3 text-sm text-gray-300">{caption}</div>
                            </div>
                        ))}
                    </div>
                </section>*/}

                {/* Wiki */}
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Mods</h2>

                    <p>Hier findest du alle Infos zu den diesjährigen Mods.</p>

                    <Link href="./wp2025/wiki" className="inline-block mt-6 px-5 py-3 bg-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white font-semibold rounded-lg shadow-md">
                        Zum Wiki →
                    </Link>
                </section>
            </div>
        </main>
    );
}