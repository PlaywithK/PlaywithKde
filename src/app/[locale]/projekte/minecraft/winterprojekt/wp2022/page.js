"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

                    <div className="my-8 p-5 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex flex-col items-center text-center gap-3">
                        <div>
                            <p className="text-teal-300 font-semibold">Info:</p>
                            <p className="text-gray-300">
                                Diese Seite befindet sich noch im Aufbau, da es nicht viele Medien und Aufnahmen des WP22 gibt.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main >
    );
}