"use client";

import React from "react";
import Link from "next/link";
import { updates, typeColors } from "../../../../../components/winterprojekt24Data";

export default function WinterprojektHistory() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 py-16">
            <div className="w-full max-w-5xl">
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-teal-400 mb-4">Versions-History</h1>
                    <p className="text-gray-300">Hier findest du alle Updates des Winterprojekts 2024.</p>
                    <Link href="../wp2024" className="inline-block mt-6 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg">
                        ⬅️ Zurück zur Übersicht
                    </Link>
                </section>

                {updates.map(({ version, changes }) => (
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
            </div>
        </main>
    );
}