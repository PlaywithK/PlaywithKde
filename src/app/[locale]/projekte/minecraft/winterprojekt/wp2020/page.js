"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServerStatusCard from "../../../../components/serverstatus";
import { updates, galleryImages } from "../../../../components/winterprojekt24Data";
import Gallery from "../../../../components/gallery";

export default function Winterprojekt2020() {
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
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2020</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        Das Winterprojekt 2020 war das erste seiner Art, welches in einer der neueren Versionen stattfand.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Desc */}
                <section className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                        BlaBla
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
                        Lade dir die Map vom Winterprojekt 2020 herunter und sieh sie dir an!
                    </p>
                    <a
                        href="https://github.com/PlaywithK/PlaywithKde/releases/download/Test/Winterprojekt2024_Map.zip"
                        download
                        className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all"
                    >
                        Map herunterladen 🡇
                    </a>
                </section>

            </div>
        </main >
    );
}