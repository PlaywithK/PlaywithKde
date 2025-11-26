"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServerStatusCard from "../../../../components/serverstatus";
import { updates, galleryImages } from "../../../../components/winterprojekt25Data";
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

                    <ServerStatusCard />

                </section>

                <hr className="border-t border-gray-700 my-12" />

                <section className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-2xl font-bold mb-6 text-teal-400">Regeln</h3>
                    <ol className="list-decimal text-left mx-auto w-fit">
                        <li>Geht respektvoll miteinander um.</li>
                        <li>Keine Cheats, Mods mit unfairen Vorteilen oder X-Ray, Duping ist nicht Verboten, aber auch nicht gerne gesehen.</li>
                        <li>Es darf gestreamt werden, solange Privates von anderen Teilnehmern respektiert wird.</li>
                        <li>Großes Griefen ist verboten.</li>
                    </ol>

                    <div className="my-8 p-5 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex items-start gap-3">
                        <div>
                            <p className="text-teal-300 font-semibold">Grundlegend gilt:</p>
                            <p className="text-gray-300">
                                Das Projekt stellt den Spielspaß jedes einzelnen Spielers in den Mittelpunkt, was bedeutet, dass PvP, Trolls und weiteres im Rahmen dessen bleiben sollten, sodass jeder daran Spaß hat.
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Gallery */}
                <Gallery
                    title="Community Galerie"
                    description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
                    images={galleryImages}
                />

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