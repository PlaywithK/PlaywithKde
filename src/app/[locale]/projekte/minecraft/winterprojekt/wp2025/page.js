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
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Das Winterprojekt 2025 wird zum zweiten Mal mit einem Modpack gespielt.
                    </p>

                    {/* Download */}
                    <a
                        href="https://modrinth.com/modpack/winterprojekt2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <img
                            src="https://raw.githubusercontent.com/krystejj/anothersimpleelevator/1.21/assets/available-on-modrinth.png"
                            alt="Available on Modrinth"
                            className="mx-auto mb-4 hover:scale-105 transition-transform duration-200"
                        />
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
                <section className="text-center bg-gray-800/60 p-10 rounded-2xl shadow-xl border border-white border-opacity-10">
                    <h2 className="text-3xl font-semibold text-teal-400 mb-4">Mehr Infos</h2>
                    <p className="text-gray-300 mb-6">
                        Entdecke alle Mods, Features und Tipps zum diesjährigen Modpack in unserem eigenen Wiki.
                    </p>
                    <Link
                        href="./wp2025/wiki"
                        className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-3 text-white font-semibold rounded-full transition-all"
                    >
                        Zum Wiki <span>→</span>
                    </Link>
                </section>

            </div>
        </main >
    );
}