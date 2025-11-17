"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "../../../../components/winterprojekt21Data";
import Gallery from "../../../../components/gallery";

export default function Winterprojekt2022() {
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2022</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Das Winterprojekt 2022 war das erste Modprojekt der Reihe.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                <section className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Das Winterprojekt 2022 war das erste Modprojekt der Reihe und fand in der 1.19.2 statt.
                        Dank Mineceater gab es in diesem Projekt auch das beliebte Durst-System.
                    </p>
                </section>

                {/* Gallery */}
                <Gallery
                    title="Community Galerie"
                    description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
                    images={galleryImages}
                />

                {/* Download */}
                <section className="mb-16 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Download</h2>
                    <p className="text-gray-300 mb-6 max-w-prose mx-auto">
                        Leider kann ich für dieses Projekt keinen Download anbieten, da einige Spieler unschöne Dinge auf dem Server gebaut haben.
                    </p>
                </section>

            </div>
        </main >
    );
}