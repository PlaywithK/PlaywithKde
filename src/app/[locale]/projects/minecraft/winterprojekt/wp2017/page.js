"use client";

import React, { useEffect, useState } from "react";
import { updates, galleryImages } from "@/components/winterprojekt/winterprojekt24Data";
import LastEdited from "@/components/lastedited";
import Gallery from "@/components/gallery";

export default function Winterprojekt2017() {
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2017</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Dies war der Anfang der Winterprojekt-Serie.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                <section className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        2017 begann alles! Zum ersten Mal startete ein Minecraft-Projekt in der Winterzeit, geleitet von PlaywithK.
                        Das erste Winterprojekt begann ganz simple, aber setzte auch einige Standards, die sich noch für Jahre halten sollten.

                        Auf der 1.8.8 wurde damals vorallem noch mit Labymod auf dem Server gespielt, welcher nur ein paar wenige Plugins hatte, darunter eine Farmwelt und Essentials.
                        Auch die besonderen sammelbaren Items fanden schon hier ihren Anfang.
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