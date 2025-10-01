"use client";

import React from "react";
import Link from "next/link";
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2024</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                        Das Winterprojekt 2024 war das erste Winterprojekt welches ein komplett eigenes gecodetes Plugin in Java erhalten hat!
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Updates</h2>

                    {updates.slice(0, 3).map(({ version, changes }) => (
                        <details key={version} className="mb-6 bg-gray-800 rounded-lg p-4 border border-white/10">
                            <summary className="cursor-pointer font-semibold text-lg text-teal-400 select-none">
                                ⬆️ Update V. {version}
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

                {/* Gallery */}
                <section>
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Community Galerie</h2>
                    <p className="mb-8 max-w-prose">
                        In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map(({ src, alt, caption }, i) => (
                            <div key={i}>
                                <img src={src} alt={alt} className="w-full h-48 object-cover" />
                                <div className="bg-gray-700 p-3 text-sm text-gray-300">{caption}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}