"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Winterprojekt2025Wiki() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 py-16">
            <div className="w-full max-w-5xl">
                {/* Übersicht */}
                <section className="max-w-6xl mx-auto text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2025 Wiki</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Hier findest du alle Informationen zum Winterprojekt 2025, Tutorials und Infos zu allen Mods.
                    </p>
                </section>

                {/* Inhaltsangabe */}
                <section className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Inhaltsangabe</h2>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2 text-teal-400">Technisches</h3>
                        <ul className="list-decimal list-inside text-gray-300 space-y-2">
                            <li><Link href="#installation" className="text-teal-400 hover:underline">Installation & Setup</Link></li>
                            <li><Link href="#updates" className="text-teal-400 hover:underline">Modliste</Link></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2 text-teal-400">Mods</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><Link href="#mod-ae2" className="text-teal-400 hover:underline">Applied Energistics 2 (AE2)</Link></li>
                            <li><Link href="#mod-backpacks" className="text-teal-400 hover:underline">Sophisticated Backpacks</Link></li>
                            <li><Link href="#mods-emerald" className="text-teal-400 hover:underline">Emerald Tools & Armor</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Hammers Extension</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Extra Generators</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Storage Drawers</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Lets Do Bakery</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Waystones</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Gravestones</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Nether Chest</Link></li>

                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Snowy Spirit</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Winterly</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Snow! Real Magic!</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Macaws Decoration Mods</Link></li>
                            <li><Link href="#mods-hammers" className="text-teal-400 hover:underline">Chimes</Link></li>
                        </ul>
                    </div>
                </section>


                {/* Installation */}
                <section id="installation" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Installation & Setup</h2>
                    <p className="text-gray-300 mb-4">
                        Hier erklären wir Schritt für Schritt, wie man die Map installiert und das Winterprojekt korrekt startet.
                    </p>
                </section>

                {/* Modliste */}
                <section id="modlist" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Modliste</h2>
                    <p className="text-gray-300 mb-6">
                        In dieser Sektion findest du alle wichtigen Mods und Plugins, die für das Winterprojekt benötigt werden, inklusive Installationstipps.
                    </p>

                    {/* Kategorien */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Kernmods */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-teal-300">Kernmods</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Applied Energistics 2 (AE2)</li>
                                <li>Sophisticated Backpacks</li>
                                <li>Hammers Extension (Hammers 3x3)</li>
                                <li>(EnderBoy9217) Simple Emerald Armor and Tools</li>
                                <li>Extra Generators</li>
                                <li>Untitled Duck Mod</li>
                                <li>Storage Drawers</li>
                                <li>Lets Do Bakery</li>
                                <li>Simple Voice Chat</li>
                            </ul>
                        </div>

                        {/* Strukturen */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-teal-300">Strukturen</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Tectonic (Biome Gen)</li>
                                <li>WilliamWithers Overhauled Overworld</li>
                                <li>ChoiceTheorems Overhauled Village</li>
                                <li>Structory</li>
                                <li>YUNG’s Better Desert Temples, Nether Fortresses, Ocean Monuments & Witch Huts</li>
                            </ul>
                        </div>

                        {/* Dekoration */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-teal-300">Deko</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Snowy Spirit</li>
                                <li>Winterly</li>
                                <li>Macaw’s Paths and Pavings, Furniture & Lights and Lamps</li>
                                <li>Chimes</li>
                            </ul>
                        </div>

                        {/* Quality of Life */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-teal-300">Quality of Life</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Waystones</li>
                                <li>Gravestones</li>
                                <li>Nether Chest</li>
                                <li>Snow! Real Magic!</li>
                                <li>Tree Harvester</li>
                                <li>Just Enough Items</li>
                                <li>Jade</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Mods */}
                {/* Mods - Applied Energistics 2 */}
                <section id="mods-ae2" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Applied Energistics 2 (AE2)</h2>

                    {/* Einleitung */}
                    <p className="text-gray-300 mb-6">
                        Applied Energistics 2 ist eine mächtige Mod für Minecraft (Fabric 1.20.1), die euch erlaubt,
                        alle eure Items digital zu speichern, schnell zu finden und automatisch zu verarbeiten.
                        Mit AE2 könnt ihr Crafting-Prozesse automatisieren und große Mengen an Ressourcen effizient verwalten.
                        Diese Anleitung führt euch Schritt für Schritt vom Einstieg bis zu einem funktionierenden ME-System.
                    </p>

                    {/* Abschnitt: Materialien */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">1. Materialien für den Einstieg</h3>
                    <p className="text-gray-300 mb-4">
                        Bevor ihr ein ME-System bauen könnt, müsst ihr einige Grundmaterialien sammeln. Die wichtigsten sind:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
                        <li><strong>Certus Quartz</strong> – Erz, das ihr abbauen und zu Dust verarbeiten müsst.</li>
                        <li><strong>Fluix-Crystals</strong> – Werden aus Redstone, Nether Quartz und Certus Quartz hergestellt.</li>
                        <li><strong>Logic Processor</strong> – Wird aus Fluix-Crystals und Certus Quartz hergestellt, benötigt für Maschinen.</li>
                        <li><strong>ME Cable</strong> – Zum Verbinden aller Komponenten.</li>
                        <li><strong>ME Controller</strong> – Herzstück eures Systems, ohne den läuft nichts.</li>
                        <li><strong>ME Drive</strong> – Lagert eure Storage Cells (1k, 4k, 16k, 64k).</li>
                        <li><strong>ME Terminal / Crafting Terminal</strong> – Zum Zugriff auf das System und zum Craften.</li>
                    </ul>

                    {/* Abschnitt: Craftings */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">2. Wichtige Crafting-Rezepte</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Beispiel: ME Controller */}
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/ae2_mecontroller.png"
                                    alt="ME Controller"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">ME Controller</h4>
                                <p className="text-gray-300">
                                    Verbindet alle Komponenten eures ME-Netzwerks. Crafting: 4 Certus Quartz, 2 Fluix-Crystals, 3 Iron Ingot, 1 Piston.
                                </p>
                            </div>
                        </div>

                        {/* Beispiel: ME Cable */}
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/ae2_mecable.png"
                                    alt="ME Cable"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">ME Cable</h4>
                                <p className="text-gray-300">
                                    Verbindet alle Komponenten des Systems miteinander. Crafting: 1 Fluix Crystal + 1 Quartz Fiber.
                                </p>
                            </div>
                        </div>

                        {/* Crafting Terminal */}
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-32 h-32 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/ae2_terminal.png"
                                    alt="Crafting Terminal"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">Crafting Terminal</h4>
                                <p className="text-gray-300">
                                    Ermöglicht Zugriff auf alle Items im ME-System und erlaubt das Craften direkt aus dem Terminal.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Abschnitt: Aufbau */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">3. Aufbau eines kleinen ME-Systems</h3>
                    <p className="text-gray-300 mb-4">
                        1. Stellt den <strong>ME Controller</strong> in die Mitte eures geplanten Netzwerks.<br />
                        2. Verbindet den Controller mit <strong>ME Cables</strong> zu allen Geräten (Drive, Terminal, Crafting Terminals).<br />
                        3. Setzt einen <strong>ME Drive</strong> daneben und platziert erste <strong>1k Storage Cells</strong> hinein.<br />
                        4. Fügt ein <strong>ME Terminal</strong> hinzu, um Items zu verwalten.<br />
                        5. Testet das System, indem ihr ein paar Items in die Storage Cells legt und wieder abruft.
                    </p>

                    {/* Abschnitt: Tipps */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">4. Tipps für Neulinge</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Startet mit einem kleinen Testnetzwerk, bevor ihr es groß ausbaut.</li>
                        <li>Verwendet kleine Storage Cells (1k/4k) für den Anfang.</li>
                        <li>Erkundet die Crafting-Terminals und automatische Crafting-Möglichkeiten Schritt für Schritt.</li>
                        <li>Speichert eure Items regelmäßig, besonders beim Experimentieren mit Automatisierungen.</li>
                    </ul>
                </section>



                {/* Mods - Emerald Armor & Tools */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Simple Emerald Armor and Tools</h2>

                    {/* Einleitung */}
                    <p className="text-gray-300 mb-8">
                        Mit dieser Mod erhalten wir neue Smaragd Tools und Rüstung, welche zwischen Eisen und Diamant liegen.
                    </p>

                    {/* Tools */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Tools</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Smaragd Schwert", desc: "Ein Schwert aus Smaragd" },
                            { src: "emeraldTools_pickaxe.png", title: "Smaragd Spitzhacke", desc: "Eine Spitzhacke aus Smaragd" },
                            { src: "emeraldTools_axe.png", title: "Smaragd Axt", desc: "Eine Axt aus Smaragd" },
                            { src: "emeraldTools_shovel.png", title: "Smaragd Schaufel", desc: "Eine Schaufel aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Smaragd Hacke", desc: "Eine Hoe aus Smaragd" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/emeraldTools/${src}`}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rüstung */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Rüstung</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { src: "emeraldTools_Helm.png", title: "Smaragd Helm", desc: "Ein Helm aus Smaragd" },
                            { src: "emeraldTools_Chest.png", title: "Smaragd Brustplatte", desc: "Eine Brustplatte aus Smaragd" },
                            { src: "emeraldTools_Legs.png", title: "Smaragd Hose", desc: "Eine Hose aus Smaragd" },
                            { src: "emeraldTools_Boots.png", title: "Smaragd Stiefel", desc: "Stiefel aus Smaragd" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/emeraldTools/${src}`}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mods - Hammers! */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Hammers!</h2>

                    {/* Einleitung */}
                    <p className="text-gray-300 mb-8">
                        Hammers! fügt ein neues Werkzeug hinzu, den Hammer! Dieser kann dafür genutzt werden in einem 3x3 Feld abzubauen.
                        Es gibt 2 verschiedene Varianten des Hammers: Normal und Enhanced. Die Enhanced Varianten haben hierbei mehr Haltbarkeit und machen mehr Schaden.
                        Sneakst du beim abbauen, kannst du den Hammer auch wie eine normale Spitzhacke nutzen.
                    </p>

                    {/* Normal */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Hammer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "hammers_wood.png", title: "Holzhammer", desc: "Der Holzhammer kann mit jeder Art Holz hergestellt werden." },
                            { src: "hammers_stone.png", title: "Steinhammer", desc: "Kann auch mit Deepslate hergestellt werden." },
                            { src: "hammers_gold.png", title: "Goldhammer", desc: "Ein Hammer aus purem Gold!" },
                            { src: "hammers_iron.png", title: "Eisenhammer", desc: "-" },
                            { src: "hammers_dia.png", title: "Diamanthammer", desc: "-" },
                            { src: "hammers_netherite.png", title: "Netheritehammer", desc: "-" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/hammers/${src}`}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Enhanced Hammer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "hammers_netherite.png", title: "Enhanced Stick", desc: "Wird für das craften der Enhanced Hammer benötigt." },
                            { src: "hammers_wood.png", title: "Holzhammer", desc: "Der Holzhammer kann mit jeder Art Holz hergestellt werden." },
                            { src: "hammers_stone.png", title: "Steinhammer", desc: "Kann auch mit Deepslate hergestellt werden." },
                            { src: "hammers_gold.png", title: "Goldhammer", desc: "Ein Hammer aus purem Gold!" },
                            { src: "hammers_iron.png", title: "Eisenhammer", desc: "-" },
                            { src: "hammers_dia.png", title: "Diamanthammer", desc: "-" },
                            { src: "hammers_netherite.png", title: "Netheritehammer", desc: "-" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/hammers/${src}`}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                    <p className="text-gray-300">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
