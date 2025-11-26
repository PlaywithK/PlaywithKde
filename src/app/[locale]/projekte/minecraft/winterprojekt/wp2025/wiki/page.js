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
                        Hier findest du alle Infos zum diesjährigen Projekt, sowie Einführungen in die meisten Mods.
                    </p>
                </section>

                {/* Start Sektion (Modliste & Inhalt Side-by-Side) */}
                <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        {/* Modliste */}
                        <section id="modlist" className="scroll-mt-24 max-w-6xl mx-auto mb-16">
                            <h2 className="text-3xl font-semibold mb-4 text-teal-400">Modliste</h2>
                            <p className="text-gray-300 mb-6">
                                In diesem Abschnitt findest du eine vollständige Liste aller enthaltenen Mods, ausgenommen von Libaries und Dependencies.
                            </p>

                            {/* Kategorien */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Main Mods */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-teal-300">Hauptmods</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li>Applied Energistics 2 (AE2)</li>
                                        <li>Sophisticated Backpacks</li>
                                        <li>Simple Emerald Armor and Tools</li>
                                        <li>Extra Generators</li>
                                        <li>Untitled Duck Mod</li>
                                        <li>Storage Drawers</li>
                                        <li>Fishing Crates</li>
                                        <li>Lets Do Farm & Charm, Bakery, Vinery, HerbalBrews</li>
                                        <li>Tinkers Construct (Hephaestus)</li>
                                    </ul>
                                </div>

                                {/* Strukturen */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-teal-300">Strukturen</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li>WilliamWithers Overhauled Overworld</li>
                                        <li>ChoiceTheorem’s Overhauled Village</li>
                                        <li>YUNG’s Better Desert Temples, Nether Fortresses, Ocean Monuments & Witch Huts</li>
                                        <li>DnT Pillager Outpost Overhaul</li>
                                        <li>Tidal Towns</li>
                                    </ul>
                                </div>

                                {/* Dekoration */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-teal-300">Deko</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li>Snowy Spirit</li>
                                        <li>Winterly</li>
                                        <li>Macaws Lights and Lamps</li>
                                        <li>Chimes</li>
                                        <li>Supplementaries</li>
                                        <li>Decorative Food</li>
                                        <li>Plushie Mod</li>
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
                                        <li>FallingTree</li>
                                        <li>Wand of Better Building</li>
                                        <li>Simple Voice Chat</li>
                                        <li>Sound Physics Remastered</li>
                                        <li>Roughly Enough Items & Jade</li>
                                        <li>ModMenu</li>
                                        <li>AnotherSimpleElevator</li>
                                        <li>Amendments</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Inhaltsangabe */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-xl p-5 shadow-lg">
                            <section className="max-w-6xl mx-auto mb-16">
                                <h2 className="text-3xl font-semibold mb-6 text-teal-400">Schnell-Links</h2>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-teal-400">Technisches</h3>
                                    <ul className="list-decimal list-inside text-gray-300 space-y-2">
                                        <li><Link href="#installation" className="hover:underline">Installation & Setup</Link></li>
                                        <li><Link href="#rei" className="hover:underline">Roughly Enough Items</Link></li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-2xl font-semibold mb-2 text-teal-400">Einleitungen in Mods</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li><Link href="#mods-ae2" className="hover:underline">Applied Energistics 2 (AE2)</Link></li>
                                        <li><Link href="#mods-amendments" className="hover:underline">Amendments</Link></li>
                                        <li><Link href="#mods-elevator" className="hover:underline">Another Simple Elevator</Link></li>
                                        <li><Link href="#mods-chimes" className="hover:underline">Chimes</Link></li>
                                        <li><Link href="#mods-generators" className="hover:underline">Extra Generators</Link></li>
                                        <li><Link href="#mods-fishing-crates" className="hover:underline">Fishing Crates</Link></li>
                                        <li><Link href="#mods-graves" className="hover:underline">Gravestones</Link></li>
                                        <li><Link href="#mods-macaw" className="hover:underline">Macaws Lights & Lamps</Link></li>
                                        <li><Link href="#mods-netherchest" className="hover:underline">Nether Chest</Link></li>
                                        <li><Link href="#mods-plushies" className="hover:underline">Plushie Mod</Link></li>
                                        <li><Link href="#mods-realmagic" className="hover:underline">Snow! Real Magic!</Link></li>
                                        <li><Link href="#mods-snowyspirit" className="hover:underline">Snowy Spirit</Link></li>
                                        <li><Link href="#mods-backpacks" className="hover:underline">Sophisticated Backpacks</Link></li>
                                        <li><Link href="#mods-drawers" className="hover:underline">Storage Drawers</Link></li>
                                        <li><Link href="#mods-supplementaries" className="hover:underline">Supplementaries</Link></li>
                                        <li><Link href="#mods-tinkers" className="hover:underline">Tinkers Construct</Link></li>
                                        <li><Link href="#mods-waystones" className="hover:underline">Waystones</Link></li>
                                        <li><Link href="#mods-buidling-wands" className="hover:underline">Wand of Better Building</Link></li>
                                        <li><Link href="#mods-winterly" className="hover:underline">Winterly</Link></li>
                                    </ul>

                                    <h3 className="text-xl font-semibold mb-2 text-teal-400">[Lets Do]-Reihe</h3>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                                        <li><Link href="#mods-do-farm" className="hover:underline">[Lets Do] Farm & Charm</Link></li>
                                        <li><Link href="#mods-do-bakery" className="hover:underline">[Lets Do] Bakery</Link></li>
                                        <li><Link href="#mods-do-candle" className="hover:underline">[Lets Do] Candlelight</Link></li>
                                        <li><Link href="#mods-do-herbal" className="hover:underline">[Lets Do] Herbal Brews</Link></li>
                                        <li><Link href="#mods-do-vinery" className="hover:underline">[Lets Do] Vinery</Link></li>
                                        <li><Link href="#mods-do-beach" className="hover:underline">[Lets Do] Beachparty</Link></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>

                {/* Installation */}
                <section id="installation" className="scroll-mt-24 max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Installation & Setup</h2>
                    <p className="text-gray-300 mb-4">
                        Unser diesjähriges Modprojekt ist nun offiziell auf Modrinth erhältlich!
                    </p>
                    <p className="text-gray-300 mb-4">
                        Dieses gibt es in 2 Versionen: Die normale und die Enhanced Version.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Während die Ennhanced Version ein Komplettpaket mit einigen Performance und Quality of Life Mods sowie Shadern bietet, beinhaltet die Normale Version nur die benötigten Mods. Somit steht es euch völlig frei auch eigene clientside Mods hinzuzufügen oder ganz eigene Packs zu erstellen.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Wenn du kein Modrinth nutzt und die Mods mit einem anderen Launcher verwenden möchtest, kannst du dir hier die ZIP mit allen Mods herunterladen. Bei einigen Launchern kannst du auch die .mrpack-Datei von Modrinth direkt importieren.
                    </p>

                    <div className="my-6 p-4 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex items-start gap-3 animate-fade-in">
                        <div className="flex-shrink-0 text-teal-400 mt-0.5">
                            💡
                        </div>
                        <div>
                            <p className="text-teal-300 font-semibold">Tipp:</p>
                            <p className="text-gray-300">
                                Wenn du Hilfe bei der Installation brauchst, melde dich gerne bei einem der Teilnehmer.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4 text-teal-400">PWKs Winterprojekt 2025</h2>

                    <div className="flex gap-4 mb-8">
                        {/* Modrinth Button */}
                        <a
                            href="https://modrinth.com/modpack/pwks-winterprojekt2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src="https://raw.githubusercontent.com/krystejj/anothersimpleelevator/1.21/assets/available-on-modrinth.png"
                                alt="Available on Modrinth"
                                className="h-12 hover:scale-105 transition-transform duration-200"
                            />
                        </a>

                        {/* ZIP Download Button */}
                        <a
                            href="/downloads/PWKs-Winterprojekt-2025.zip"
                            download
                            className="inline-flex items-center justify-center h-12 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 hover:scale-105 transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                            </svg>
                            Download ZIP
                        </a>
                    </div>

                    <h2 className="text-xl font-semibold mb-4 text-teal-400">PWKs Enhanced Winterprojekt 2025</h2>

                    <div className="flex gap-4 mb-8">
                        {/* Modrinth Button */}
                        <a
                            href="https://modrinth.com/modpack/pwks-enhanced-winterprojekt2025"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src="https://raw.githubusercontent.com/krystejj/anothersimpleelevator/1.21/assets/available-on-modrinth.png"
                                alt="Available on Modrinth"
                                className="h-12 hover:scale-105 transition-transform duration-200"
                            />
                        </a>

                        {/* ZIP Download Button */}
                        <a
                            href="/downloads/PWKs-Winterprojekt-2025.zip"
                            download
                            className="inline-flex items-center justify-center h-12 px-6 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-400 hover:scale-105 transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                            </svg>
                            Download ZIP
                        </a>
                    </div>
                </section>

                {/* REI */}
                <section id="rei" className="max-w-6xl mx-auto mb-16 p-8 bg-emerald-500/30 rounded-2xl border border-emerald-700 hover:border-emerald-500 transition-all duration-300">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_logo.webp"
                                    alt="REI Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Roughly Enough Items</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Rezepte</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    {/* Einführung */}
                    <p className="text-gray-300 mb-8">
                        Dies ist eine kurze Einführung und Erklärung für <strong>Roughly Enough Items</strong>, ab hier immer <strong>REI</strong> genannt.
                        REI ist eine Mod, die Spielern ermöglicht, sämtliche Rezepte und Verwendungszwecke von Items einzusehen – egal ob aus Vanilla oder Mods.
                    </p>

                    {/* Visuelle Einstellungen */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Visuelle Einstellungen</h3>

                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="md:w-1/2 text-gray-300 leading-relaxed">
                            <p className="mb-4">
                                Bevor wir uns mit den Funktionen von REI vertraut machen, kümmern wir uns erst um das Aussehen der Mod.
                                Sobald du dein Inventar oder einen Block wie Werkbank oder Ofen öffnest, hast du an der rechten Seite ein neues Interface mit vielen Items.
                                Dort befindet sich auch die Suchleiste, über die du Items suchen und Einstellungen vornehmen kannst.
                            </p>
                            <p className="mb-4">
                                Um die Größe des REI-Menüs anzupassen, klicke auf das <strong>Zahnrad</strong>, dann auf <em>Mehr Optionen → Layout → Boundaries</em>.
                                Hier kannst du einstellen, wie viel Platz des Bildschirms das Menü einnehmen soll und wie viele Items pro Zeile angezeigt werden.
                            </p>
                        </div>

                        <div className="flex flex-col md:w-1/2 gap-4">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_config.png"
                                    alt="REI Config Menü"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative w-full h-64 rounded-xl overflow-hidden">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_changesize.png"
                                    alt="REI Menügröße ändern"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Suchleisten-Position */}
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                        <div className="md:w-1/2 text-gray-300 leading-relaxed">
                            <p className="mb-4">
                                Um die Position deiner Suchleiste zu ändern, kannst du über das Werkbank-Symbol hovern und eine neue Position auswählen.
                            </p>
                            <p>
                                Wenn das Werkbank-Symbol nicht angezeigt wird, aktiviere es über das Zahnrad-Symbol beim Hovern.
                            </p>
                        </div>

                        <div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden">
                            <Image
                                src="/minecraft/winterprojekt/2025/wiki/rei/rei_searchbar_pos.png"
                                alt="Suchleiste Positionieren"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Suchfunktionen */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Suchfunktionen</h3>
                    <p className="text-gray-300 mb-6">
                        REI besitzt verschiedene Suchmodi:
                        du kannst nach dem Item-Namen suchen (z. B. <code>Chest</code>),
                        nach einer Mod mit <code>@modname</code> (z. B. <code>@applied</code>),
                        oder beides kombinieren (z. B. <code>@applied chest</code>).
                        Mit dem Filter <code>$</code> kannst du nach Item-Typen suchen (z. B. <code>$crops</code> für alle anpflanzbaren Dinge).
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-72 rounded-xl overflow-hidden mb-2">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_searchName.png"
                                    alt="Suche nach Name"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-300 text-sm">
                                🔎 <strong>Name:</strong> Suche nach dem Item-Namen.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-72 rounded-xl overflow-hidden mb-2">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_searchMod.png"
                                    alt="Suche nach Mod"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-300 text-sm">
                                🧩 <strong>Mod:</strong> Suche nach Items einer Mod mit <code>@modname</code>.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-72 rounded-xl overflow-hidden mb-2">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_searchModAndName.png"
                                    alt="Suche nach Mod und Name"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-300 text-sm">
                                ⚙️ <strong>Kombiniert:</strong> Mod + Itemname (z. B. <code>@applied chest</code>).
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-40 h-72 rounded-xl overflow-hidden mb-2">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/rei/rei_searchTag.png"
                                    alt="Suche nach Tag"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-gray-300 text-sm">
                                🌱 <strong>Tag-Suche:</strong> Nach Item-Typen suchen, z. B. <code>$crops</code>.
                            </p>
                        </div>
                    </div>

                    {/* Rezepte & Uses */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Rezepte & Verwendung</h3>
                    <div className="text-gray-300 mb-8 leading-relaxed">
                        <p className="mb-3">
                            Um zu sehen, <strong>wie man ein Item herstellt</strong>, bewege den Mauszeiger darüber und drücke <kbd>R</kbd> („Recipe“).
                        </p>
                        <p className="mb-3">
                            Um herauszufinden, <strong>wo oder wie ein Item verwendet wird</strong>, drücke <kbd>U</kbd> („Uses“).
                        </p>
                        <p>
                            Items können favorisiert werden mit <kbd>A</kbd>. Favorisierte Items erscheinen auf der linken Seite und lassen sich jederzeit wieder entfernen.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                        <div className="relative w-full md:w-1/2 h-72 rounded-xl overflow-hidden">
                            <Image
                                src="/minecraft/winterprojekt/2025/wiki/rei/rei_recipe.png"
                                alt="REI Rezeptansicht"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="relative w-full md:w-1/2 h-72 rounded-xl overflow-hidden">
                            <Image
                                src="/minecraft/winterprojekt/2025/wiki/rei/rei_use.png"
                                alt="REI Uses Ansicht"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Tipp Box */}
                    <div className="my-8 p-5 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex items-start gap-3">
                        <div className="flex-shrink-0 text-teal-400 mt-0.5">💡</div>
                        <div>
                            <p className="text-teal-300 font-semibold">Tipp:</p>
                            <p className="text-gray-300">
                                Mit einem Klick auf das Werkbank-Icon kannst du nur Rezepte sehen, die du mit den Materialien in deinem Inventar craften kannst.
                                Dies funktioniert auch in Kombination mit der Suchfunktion.
                            </p>
                        </div>
                    </div>
                </section>


                <hr className="border-t border-gray-700 my-12" />

                {/* Mods */}
                {/* Mods - Applied Energistics 2 */}
                <section id="mods-ae2" className="scroll-mt-24 max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Applied Energistics 2 (AE2)</h2>
                        <span className="text-sm text-gray-400 italic">Digitales Lager & Logistik</span>
                    </header>

                    {/* Einleitung */}
                    <p className="text-gray-300 mb-6">
                        <strong>Applied Energistics 2</strong> ist eine umfangreichsten Lager- und Logistikmod.
                        Sie erlaubt es dir, dein eigenes digitales Lagersystem zu bauen – mit Autocrafting,
                        kabelloser Verbindung und vielem mehr. Klingt kompliziert, ist aber gar nicht so schlimm wie man denkt.
                    </p>

                    <h3 className="text-3xl font-semibold mb-4 text-teal-400">Grundfunktionen</h3>
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Lager</h3>
                    <p className="text-gray-300 mb-6">
                        Das sogenannte Matter Energy System – kurz <strong>ME-System</strong> – ist das Herzstück von AE2.
                        Es erlaubt dir, Millionen von Items und sogar Flüssigkeiten zentral zu speichern und über ein Terminal
                        blitzschnell darauf zuzugreifen. Kein Sortieren, keine Kistenwände – einfach alles digital an einem Ort.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Autocrafting</h3>
                    <p className="text-gray-300 mb-6">
                        Mit Autocrafting kannst du deine gespeicherten Items automatisch zu neuen Items verarbeiten lassen.
                        Dafür nutzt du <strong>Molecular Assembler</strong> und <strong>Pattern Terminals</strong>,
                        um Baupläne zu hinterlegen. Dein System kümmert sich dann um den Rest.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Logistik</h3>
                    <p className="text-gray-300 mb-6">
                        AE2 kann Items unglaublich effizient bewegen – kaum eine Mod ist so schnell und stabil.
                        Ob du Rohstoffe verarbeitest, Maschinen belieferst oder nur Ordnung schaffen willst:
                        Das ME-System macht es möglich, und zwar nahezu verzögerungsfrei.
                    </p>

                    {/* Beginning */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Mit AE2 beginnen</h3>

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/ae2/meteor.png"
                            alt="Meteor Kompass"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <p className="text-gray-300 mb-6">
                        Zu Beginn brauchst du Materialien aus einem abgestürzten Meteoriten. Diese findest du
                        verteilt über die ganze Welt. Um sie leichter aufzuspüren, kannst du dir einen
                        <strong> Meteor-Kompass </strong> herstellen. Dieser zeigt dir die Richtung zum nächsten Meteoriten.
                        Der Kompass wird jedoch nicht klassisch in der Werkbank hergestellt – du brauchst zuerst ein paar Geräte.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "ae2-charger.png", title: "Charger", desc: "Wird genutzt, um Items wie den Kompass aufzuladen." },
                            { src: "ae2-crank.png", title: "Kurbel", desc: "Damit kannst du Geräte wie den Charger anfangs manuell betreiben, bevor du Strom hast." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/ae2/${src}`}
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

                    <div className="mb-8">
                        <div className="flex items-centeroverflow-hidden">
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/ae2/ae2-charger_placed.png"
                                    alt="Charger mit Kurbel"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">Charger mit Kurbel</h4>
                                <p className="text-gray-300">
                                    Lege den Kompass in den Charger und drehe etwa 20-mal an der Kurbel, um daraus
                                    einen <strong>Meteorite Kompass</strong> zu machen.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-6">
                        In den Meteoriten findest du einen <strong>Mysterious Cube</strong>. Beim Abbauen erhältst du
                        vier verschiedene <strong>Inscriber Presses</strong>, die du später für Schaltkreise brauchst.
                        Sammle außerdem etwas <strong>Skystone</strong> – das Material, aus dem die Meteoriten bestehen.
                        Es wird später in mehreren Rezepten benötigt.
                    </p>

                    <p className="text-gray-300 mb-6">
                        Auch <strong>Certus Quartz</strong> solltest du unbedingt mitnehmen. Du findest ihn im Meteoriten
                        oder auch in der Welt als Erze. Er ist ein zentrales Material für fast alle AE2-Rezepte.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Komponenten herstellen</h3>
                    <p className="text-gray-300 mb-6">
                        Nun, da du alle wichtigen Materialien hast, kannst du mit dem Bau deiner ersten Maschine beginnen:
                        dem <strong>Inscriber</strong>. Damit stellst du die Schaltkreise her, aus denen später Prozessoren werden.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "ae2-inscriber.png", title: "Inscriber", desc: "Wird benötigt, um die Inscriber Presses zu verwenden und Schaltkreise herzustellen." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/ae2/${src}`}
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

                    <p className="text-gray-300 mb-6">
                        Mit dem Inscriber, einer Kurbel und deinen Presses kannst du jetzt Circuits herstellen.
                        Für den Anfang brauchst du einen <strong>Engineering Processor</strong>.
                        Lege dafür in den Inscriber die <strong>Engineering Press</strong> und einen Diamanten, um
                        einen <strong>Printed Engineering Circuit</strong> zu erhalten.
                        Kombiniere diesen später mit Redstone und Silikon – und du hast deinen ersten Prozessor!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "ae2-printedEngineeringCircuit.png", title: "Printed Engineering Circuit", desc: "Ein wichtiger Zwischenschritt für Prozessoren." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/ae2/${src}`}
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

                    <p className="text-gray-300 mb-6">
                        Für spätere Rezepte wirst du <strong>Fluix-Kristalle</strong> brauchen. Diese bekommst du,
                        indem du <strong>Charged Certus Quartz</strong>, <strong>Redstone</strong> und
                        <strong>Nether Quartz</strong> in Wasser wirfst.
                        Charged Certus Quartz erhältst du, indem du normalen Certus Quartz im Charger – wie zuvor beim Kompass – auflädst.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Das erste ME-System</h3>

                    <p className="text-gray-300 mb-6">
                        Nun kommen wir zum spannenden Teil – dein erstes funktionsfähiges <strong>ME-System</strong>.
                        Es wirkt am Anfang nach viel, aber keine Sorge: Wir bauen das Stück für Stück zusammen.
                        Sobald du die Grundstruktur einmal hast, kannst du es später beliebig erweitern.
                    </p>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">1. Energiequelle</h4>
                    <p className="text-gray-300 mb-6">
                        Jedes ME-System braucht Strom. In AE2 heißt dieser <strong>AE-Energie</strong> oder kurz „AE Units“.
                        Du kannst fast jede Mod-Stromquelle (RF, FE, EU usw.) über einen <strong>Energy Acceptor</strong> anschließen.
                        Am Anfang reicht oft schon ein kleiner Generator oder eine Batterie aus deinem Technikmod.
                    </p>

                    <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden mb-8">
                        <div className="relative w-40 h-40 flex-shrink-0">
                            <Image
                                src="/minecraft/winterprojekt/2025/wiki/ae2/energy_acceptor.png"
                                alt="Energy Acceptor"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-teal-300 mb-2">Energy Acceptor</h4>
                            <p className="text-gray-300">Verbindet dein ME-System mit Stromquellen anderer Mods.</p>
                        </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">2. ME-Controller</h4>
                    <p className="text-gray-300 mb-6">
                        Der <strong>ME-Controller</strong> ist das Gehirn deines Systems.
                        Er verteilt den Strom und die sogenannten <strong>Channels</strong> an alle angeschlossenen Geräte.
                        Für kleine Systeme kannst du sogar erstmal ohne ihn starten – aber später ist er unverzichtbar.
                    </p>

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/ae2/me_controller_recipe.png"
                            alt="ME Controller Rezept"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-300 mb-6">
                        Der Controller wird aus <strong>Fluix-Blöcken</strong>, <strong>Engineering-Prozessoren</strong> und
                        etwas <strong>Skystone</strong> gebaut. Wenn du ihn platzierst, achte darauf, dass die Pfeile an den Seiten
                        anzeigen, wo Channels aktiv sind – das ist später beim Ausbau wichtig.
                    </p>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">3. ME-Drive</h4>
                    <p className="text-gray-300 mb-6">
                        Das <strong>ME-Drive</strong> ist dein Festplattengehäuse.
                        Hier kommen deine Speicherzellen hinein, auf denen deine Items landen.
                        Ein Drive kann bis zu zehn Speicherzellen gleichzeitig halten.
                    </p>

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/ae2/me_drive_recipe.png"
                            alt="ME Drive Rezept"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">4. Speicherzellen</h4>
                    <p className="text-gray-300 mb-6">
                        Ohne Speicherzellen kann dein ME-System keine Items lagern.
                        Für den Anfang reicht eine einfache <strong>1k ME Storage Cell</strong>.
                        Später kannst du auf 4k, 16k oder 64k aufrüsten.
                    </p>

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/ae2/me_storagecell_recipe.png"
                            alt="1k ME Storage Cell Rezept"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-300 mb-6">
                        Eine Speicherzelle besteht aus <strong>Certus Quartz</strong>, <strong>Redstone</strong>
                        und einem <strong>Logic Processor</strong>.
                        Sie wird in das ME-Drive eingesetzt und speichert automatisch alle Items, die du im Terminal einlagerst.
                    </p>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">5. ME-Terminal</h4>
                    <p className="text-gray-300 mb-6">
                        Das <strong>ME-Terminal</strong> ist dein Fenster zum System.
                        Hier siehst du alle gespeicherten Items, kannst sie herausnehmen, hineinlegen oder Rezepte planen.
                    </p>

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/ae2/me_terminal_recipe.png"
                            alt="ME Terminal Rezept"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <p className="text-gray-300 mb-6">
                        Es wird aus einem <strong>Illuminated Panel</strong>, einem <strong>Logic Processor</strong>
                        und etwas <strong>Fluix Glass Cable</strong> gebaut.
                        Das Terminal muss mit einem Kabel an den Controller oder Energy Acceptor angeschlossen sein,
                        damit es funktioniert.
                    </p>

                    <h4 className="text-xl font-semibold mb-3 text-teal-300">6. Verbinden und Starten</h4>
                    <p className="text-gray-300 mb-6">
                        Jetzt hast du alle Teile zusammen. Baue sie am besten in folgender Reihenfolge auf:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
                        <li>Energy Acceptor (mit deiner Stromquelle verbunden)</li>
                        <li>ME-Controller (optional, aber empfohlen)</li>
                        <li>ME-Drive mit einer Speicherzelle</li>
                        <li>ME-Terminal zum Zugriff</li>
                        <li>Alle Teile mit <strong>Fluix-Kabeln</strong> verbinden</li>
                    </ul>

                    <p className="text-gray-300 mb-6">
                        Sobald alles korrekt verbunden ist und Strom hat, leuchten die Geräte blau – das Zeichen, dass dein
                        <strong>erstes ME-System</strong> aktiv ist. 🎉
                        Du kannst nun Items direkt ins Terminal legen, sie werden automatisch auf der Speicherzelle abgelegt.
                    </p>

                    <p className="text-gray-300 mb-6">
                        Ab hier stehen dir unzählige Erweiterungen offen:
                        <strong>Autocrafting</strong>, <strong>Kabelnetzwerke</strong>, <strong>kabellose Terminals</strong> und vieles mehr.
                        Aber das Wichtigste hast du geschafft – dein Lager ist digital, ordentlich und bereit für alles, was noch kommt.
                    </p>

                    {/*<p className="text-gray-300 mb-6">
    Der <strong>ME-Controller</strong> ist das Herz deines Systems. Er versorgt alles mit Strom 
    und verwaltet sogenannte <strong>Channels</strong>.  
    Jede Seite des Controllers kann 8 Channels unterstützen – also 8 Geräte. 
    Wenn du mehr anschließt, wird alles darüber hinaus nicht mehr erkannt.
  </p>

  <p className="text-gray-300 mb-6">
    Ein einfaches ME-System besteht aus ein paar Grundkomponenten:  
    Einem <strong>ME-Controller</strong>, einem <strong>ME-Drive</strong> (für deine Speicherzellen), 
    einem <strong>ME-Terminal</strong> und natürlich einer <strong>Energiequelle</strong>.  
    Dazu kommen noch ein paar <strong>Fluix-Kabel</strong>, um alles zu verbinden.  
    Damit hast du dein erstes funktionsfähiges digitales Lager – Glückwunsch!
  </p>*/}
                </section>

                <hr className="border-t border-gray-700 my-12" />


                {/* Mods - Sophisticated Backpacks */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Sophisticated Backpacks</h2>
                        <span className="text-sm text-gray-400 italic">Rucksäcke</span>
                    </header>

                    {/* Einleitung */}
                    <p className="text-gray-300 mb-8">
                        Sophisticated Backpacks fügt neue Rucksäcke hinzu, welche genutzt werden können um unterwegs mehr Inventarplatz zu haben.
                    </p>

                    {/* Backpack */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Rucksäcke</h3>
                    <p className="text-gray-300 mb-8">
                        Die Rucksäcke kommen in verschiedenen Farben, werden aber alle mit demselben Grundrezept hergestellt.
                        Es gibt aber auch größere Backpacks wenn du z.b. Eisen, Diamanten oder sogar Netherite zum craften nutzt, welche auch mehr Upgrades nutzen können.
                        Du kannst deinen Rucksack wie ein Rüstungsteil anziehen oder ihn in deinem Inventar behalten.
                        Mit [B] kannst du deinen Rucksack nun immer und überall öffnen.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Rucksack", desc: "Ein Schwert aus Smaragd" },
                            { src: "emeraldTools_pickaxe.png", title: "Farbiger Rucksack", desc: "Eine Spitzhacke aus Smaragd" },
                            { src: "emeraldTools_axe.png", title: "Kupfer Rucksack", desc: "Eine Axt aus Smaragd" },
                            { src: "emeraldTools_shovel.png", title: "Eisen Rucksack", desc: "Eine Schaufel aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Gold Rucksack", desc: "Eine Hoe aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Diamant Rucksack", desc: "Eine Hoe aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Netherite Rucksack", desc: "Eine Hoe aus Smaragd" },
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
                    <p className="text-gray-300 mb-8">
                        Rucksäcke können sogar wie Truhen auf dem Boden platziert werden wenn du dabei Shift drückst!
                    </p>

                    {/* Upgrades */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Upgrades</h3>
                    <p className="text-gray-300 mb-8">
                        Das besondere an Sophisticated Backpacks ist, dass du diese Upgraden kannst! So kannst du zum Beispiel größere Stacks tragen, Erze automatisch schmelzen und einiges mehr.
                        Um die gecrafteten Upgrades zu nutzen gehe einfach in deinen Backpack und lege das Upgrade in den Upgrade-Slot.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { src: "emeraldTools_Helm.png", title: "Smaragd Helm", desc: "Ein Helm aus Smaragd" },
                            { src: "emeraldTools_Chest.png", title: "Smaragd Brustplatte", desc: "Eine Brustplatte aus Smaragd" },
                            { src: "emeraldTools_Legs.png", title: "Smaragd Hose", desc: "Eine Hose aus Smaragd" },
                            { src: "emeraldTools_Boots.png", title: "Smaragd Stiefel", desc: "Stiefel aus Smaragd" },
                            { src: "emeraldTools_Helm.png", title: "Smaragd Helm", desc: "Ein Helm aus Smaragd" },
                            { src: "emeraldTools_Chest.png", title: "Smaragd Brustplatte", desc: "Eine Brustplatte aus Smaragd" },
                            { src: "emeraldTools_Legs.png", title: "Smaragd Hose", desc: "Eine Hose aus Smaragd" },
                            { src: "emeraldTools_Boots.png", title: "Smaragd Stiefel", desc: "Stiefel aus Smaragd" },
                            { src: "emeraldTools_Helm.png", title: "Smaragd Helm", desc: "Ein Helm aus Smaragd" },
                            { src: "emeraldTools_Chest.png", title: "Smaragd Brustplatte", desc: "Eine Brustplatte aus Smaragd" },
                            { src: "emeraldTools_Legs.png", title: "Smaragd Hose", desc: "Eine Hose aus Smaragd" },
                            { src: "emeraldTools_Boots.png", title: "Smaragd Stiefel", desc: "Stiefel aus Smaragd" },
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Amendments */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Amendments</h2>
                        <span className="text-sm text-gray-400 italic">Vanilla+</span>
                    </header>

                    <p className="text-gray-300 mb-6">
                        <strong>Amendments</strong> ist eine der Mods, die man erst gar nicht bemerkt – und dann nie wieder missen möchte.
                        Sie verändert viele kleine Dinge in Minecraft, sodass sich das Spiel natürlicher, runder und einfach liebevoller anfühlt.
                        Fast alles, was du hier findest, wirkt wie eine logische Ergänzung zum Vanilla-Spiel.
                    </p>

                    {/* Deko und Blöcke */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Deko und Blöcke</h3>

                    <p className="text-gray-300 mb-4">
                        Banner und Flower Pots können jetzt auch <strong>an der Decke hängen</strong>. Das macht Innenräume oder Tavernen richtig gemütlich
                        – und endlich sehen auch verwunschene Gewächshäuser so aus, wie man sie sich immer vorgestellt hat.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/hanging_flowerpots.png" alt="Hängende Blumentöpfe" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Teppiche können nun auch <strong>auf Treppen und Slabs</strong> platziert werden. Damit kannst du endlich fließende Übergänge
                        gestalten, ohne dass dein Teppich mitten auf der Treppe aufhört.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/carpet_stairs.png" alt="Teppich auf Treppen" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Blöcke können jetzt auch <strong>auf Seerosen</strong> platziert werden. Dadurch lassen sich endlich richtige
                        Wasserbrücken oder dekorative kleine Plattformen auf Teichen bauen.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/lilypad_blocks.png" alt="Blöcke auf Seerosen" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Kuchen lassen sich jetzt <strong>stapeln</strong>! Wenn du mehrere normale Kuchen übereinander stellst, entsteht
                        eine richtige <strong>Torte</strong> – perfekt für Feierlichkeiten oder Cafés.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/cake_stack.png" alt="Gestapelte Kuchen" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        <strong>Hanging Signs</strong> können jetzt Items oder Banner-Muster halten. Damit kannst du deine Läden, Tavernen
                        oder Lager viel persönlicher beschriften.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/hanging_sign_items.png" alt="Hanging Signs mit Items" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Auch <strong>Musikboxen</strong> zeigen jetzt, welche Schallplatte gerade eingelegt ist – ein kleines Detail,
                        das das Musikgefühl gleich noch etwas schöner macht.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/jukebox_disc.png" alt="Musikbox mit sichtbarer Schallplatte" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Und ja – <strong>Köpfe</strong> können nun gestackt werden, und du kannst <strong>Kerzen auf sie stellen</strong>.
                        Das ergibt wunderschöne, leicht gruselige oder festliche Deko für jedes Haus.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/candle_heads.png" alt="Kerzen auf Köpfen" fill className="object-cover" />
                    </div>

                    {/* Interaktionen */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Neue Interaktionen</h3>

                    <p className="text-gray-300 mb-4">
                        Wenn du mit einer <strong>Fackel</strong> auf Mobs schlägst, werden sie kurzzeitig <strong>in Brand gesetzt</strong>.
                        Vorsicht – das kann dir selbst auch passieren, wenn du zu nah dran bist!
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/torch_attack.png" alt="Mit Fackel Mobs anzünden" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Ein <strong>Schneeball</strong> friert jetzt getroffene Mobs für einen kurzen Moment ein. Eine kleine,
                        aber nützliche Spielerei – besonders im Winter.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/snowball_freeze.png" alt="Mobs mit Schneeball einfrieren" fill className="object-cover" />
                    </div>

                    {/* Verbesserte Blöcke */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Verbesserte Blöcke</h3>

                    <p className="text-gray-300 mb-4">
                        <strong>Tripwire Hooks</strong> können jetzt als kleine <strong>Item-Halter</strong> genutzt werden.
                        Ideal, um Werkzeuge, Waffen oder dekorative Objekte an der Wand zu präsentieren.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/tripwire_display.png" alt="Tripwire Hooks als Item Display" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        <strong>Cauldrons</strong> wurden komplett überarbeitet. Sie sind jetzt <strong>Bedrock Cauldrons</strong> und können
                        gefärbt werden, Suppe kochen oder sogar Tränke halten – richtige kleine Alleskönner!
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/bedrock_cauldron.png" alt="Bedrock Cauldron mit Suppe" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-4">
                        Auch das <strong>Lectern</strong> (Lesepult) wurde verbessert – Bücher lassen sich nun besser bearbeiten und steuern,
                        was vor allem für Redstone-Bauer und RPG-Projekte spannend ist.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/lectern_editing.png" alt="Verbessertes Lectern" fill className="object-cover" />
                    </div>

                    {/* Details & Atmosphäre */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Details & Atmosphäre</h3>

                    <p className="text-gray-300 mb-4">
                        Fackeln und Laternen werden jetzt <strong>3D in der Hand</strong> gehalten, was Bewegungen realistischer aussehen lässt.
                        Wenn du das lieber im alten Stil behalten möchtest, kannst du es ganz einfach in der Config ausschalten.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/amendments/3d_torch.png" alt="3D Laternen und Fackeln" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 italic">
                        Insgesamt macht Amendments Minecraft einfach etwas logischer – und viel gemütlicher.
                        Es sind keine großen Features, aber viele kleine Dinge, die du nach kurzer Zeit gar nicht mehr missen willst.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Supplementaries */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Supplemanteries</h2>
                        <span className="text-sm text-gray-400 italic">Alles Mögliche</span>
                    </header>

                    <p className="text-gray-300 mb-8">
                        Supplementaries erweitert Minecraft mit vielen kleinen, cleveren Features.
                        Es fügt neue Werkzeuge, Dekorationen, Mechaniken und Interaktionsmöglichkeiten hinzu, die das Spiel lebendiger machen.
                        Einige Dinge brauchen nur ein kleines Bild und eine kurze Erklärung, andere haben wir in eigenen Sektionen genauer beschrieben.
                    </p>

                    {/* Kleine Features mit Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "urn.png", title: "Urnen", desc: "Finde Urnen in Höhlen mit kleinen Schätzen wie Rüstung, Material oder Items." },
                            { src: "flex_plant.png", title: "Flex-Pflanze", desc: "Neue Pflanze, droppt Samen, kann angebaut werden und für Deko oder Seile genutzt werden." },
                            { src: "ash.png", title: "Asche", desc: "Asche entsteht in Basalt Deltas oder bei brennenden Blöcken. Wird für Asche-Blöcke oder Seife genutzt." },
                            { src: "fodder.png", title: "Fodder", desc: "Tiere fressen automatisch ein bisschen davon und können sich ohne Spielerinteraktion vermehren." },
                            { src: "bamboo_spikes.png", title: "Bamboo Spikes", desc: "Verursacht Overtime-Damage, kann vergiftet oder mit Slowness/Weakness versehen werden." },
                            { src: "quiver.png", title: "Quiver", desc: "Hält bis zu 6 Pfeilstacks, inkl. tipped arrows, und erlaubt schnelles Wechseln zwischen ihnen." },
                            { src: "rope_arrow.png", title: "Rope Arrow", desc: "Spawnt ein kletterbares Seil. Vertikal hochklettern oder horizontal als Dekoration nutzen." },
                            { src: "crank.png", title: "Crank", desc: "Gibt Redstone-Signale je nach Drehung aus. Mit Shift-Klick Richtung ändern." },
                            { src: "ballows.png", title: "Ballows / Blasebalg", desc: "Beschleunigt Öfen, oxidiert Kupfer oder verschiebt Items/Entities." },
                            { src: "soap.png", title: "Seife", desc: "Entfernt Farbe oder Wachs von Blöcken und Items wie Wolle, Kerzen, Terracotta usw." },
                            { src: "bomb.png", title: "Bombe", desc: "Entfernt Gras und Environment-Blöcke, ohne feste Blöcke zu zerstören, verursacht Schaden." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/supplementaries/${src}`}
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

                    {/* Größere Features mit eigener Sektion */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Flöte</h3>
                    <p className="text-gray-300 mb-8">
                        Mit der Flöte kannst du Musik spielen und Tiere auf dich binden. Sobald du spielst, folgen sie dir – perfekt für eine kleine Tierband oder kreative Bauprojekte.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/supplementaries/flute.png" alt="Flöte mit Tierbindung" fill className="object-cover" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Speaker Block</h3>
                    <p className="text-gray-300 mb-8">
                        Der Speaker Block kann Nachrichten in einem bestimmten Bereich wiedergeben. Wenn du ihn im Amboss umbenennst, übernimmt er den neuen Namen. Ideal, um Spieler oder Mobs in der Nähe zu informieren.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/supplementaries/speaker_block.png" alt="Speaker Block" fill className="object-cover" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Turntable</h3>
                    <p className="text-gray-300 mb-8">
                        Mit dem Turntable kannst du Entities wie Tiere oder Armor Stands drehen. Super für dekorative Szenen oder mechanische Spielereien.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/supplementaries/turntable.png" alt="Turntable" fill className="object-cover" />
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Another Simple Elevator */}
                <section id="mods-elevator" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/elevator/elevator_logo.webp"
                                    alt="Another Simple Elevator Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Another Simple Elevator</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Aufzüge</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Another Simple Elevator ist eine kleine, aber super praktische Mod, die es dir erlaubt, dich vertikal zu bewegen, ohne komplizierte Redstone-Aufzüge bauen zu müssen.
                    </p>
                    <p className="text-gray-300 mb-8">
                        Stehe auf einem Elevator-Block und drücke <strong>Jump</strong>, um dich nach oben zu teleportieren, oder <strong>Sneak</strong>, um nach unten zu gehen.
                        Du kannst beliebig viele Elevator-Blöcke übereinander stapeln, um mehrere Stockwerke schnell und bequem zu verbinden.
                    </p>


                    {/* Crafting Rezepte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "elevator_white.png", title: "Elevator Block", desc: "Das Grundrezept: Wolle + Enderperle. Nutze ihn, um zwischen Stockwerken zu teleportieren." },
                            { src: "elevator_colored.png", title: "Gefärbter Elevator Block", desc: "Du kannst den Elevator Block einfärben, um ihn farblich an dein Bauwerk anzupassen." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/elevator/${src}`}
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

                    <p className="text-gray-300 mb-6">
                        Du kannst Elevator-Blöcke auch färben, indem du sie in einen farbigen Cauldron tauchst.
                        Dafür musst du zuerst Wasser und dann die gewünschte Farbe in einen Kessel machen und mit einem weißen Elevator-Block darauf rechtsklicken.
                    </p>
                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/elevator/elevator_cauldron.png"
                            alt="Colored Cauldron for coloring Elevator Blocks"
                            fill
                            className="object-cover object-bottom"
                            priority
                        />
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Fishing Crates */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/fishingcrates/fishingcrates_logo.webp"
                                    alt="Fishing Crates Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Fishing Crates</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Loot-Boxen</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Fishing Crates fügt drei neue Loot-Crates hinzu, die beim Angeln gefangen werden können. Jede Crate hat ihre eigene Seltenheit und Loot.
                    </p>


                    {/* Loot Crates */}
                    {[
                        {
                            title: "Wooden Crate",
                            desc: "Enthält hauptsächlich Fisch, Seagrass, Eisen- und Goldbarren, Pfeile, XP-Flaschen und vereinzelt Diamanten oder kleine verzauberte Bücher. Perfekt für den Einstieg beim Angeln.",
                            img: "/minecraft/winterprojekt/2025/wiki/fishingcrates/fishingcrate_wooden.png"
                        },
                        {
                            title: "Iron Crate",
                            desc: "Bessere Items als die Wooden Crate: mehr XP-Flaschen, Eisen, Gold, Diamanten, Tridents, Wassertränke, Prismarine-Shards und -Crystals sowie gelegentlich verzauberte Bücher.",
                            img: "/minecraft/winterprojekt/2025/wiki/fishingcrates/fishingcrate_iron.png"
                        },
                        {
                            title: "Gold Crate",
                            desc: "Die seltenste Crate mit hochwertigen Belohnungen: verzauberte Angelruten, Nautilus-Schalen, Herz des Meeres, Lapis, Amethyst, XP-Flaschen, Prismarine, Tridents, Gold- & Eisenblöcke, Diamond und sogar Ancient Debris.",
                            img: "/minecraft/winterprojekt/2025/wiki/fishingcrates/fishingcrate_gold.png"
                        },
                    ].map(({ title, desc, img }) => (
                        <div key={title} className="flex items-center gap-6 mb-6">
                            {/* Bild links */}
                            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                                <Image
                                    src={img}
                                    alt={title}
                                    fill
                                    style={{ transform: "scale(2) translateY(-15%)", transformOrigin: "center" }}
                                    className="object-cover"
                                />
                            </div>

                            {/* Text rechts, vertikal mittig */}
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                <p className="text-gray-300">{desc}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Wand of Better Building */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/wands/wands_logo.webp"
                                    alt="Wand of Better Building Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Wand of Better Building</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Schnelleres Bauen</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Die Wand of Better Building Mod fügt zwei nützliche Zauberstäbe hinzu, die dir das Bauen erheblich erleichtern.
                        Mit dem einen kannst du Wandflächen „extrahieren“ (z.B. ganze Wände kopieren) und mit dem anderen kannst du sie mit nur einem Klick verändern – zum Beispiel von Holz zu Steinziegeln. Einfach, schnell und super praktisch!
                    </p>

                    <div className="mb-8">
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/wands/wands_star.png"
                                    alt="Grabstein"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">Star</h4>
                                <p className="text-gray-300">
                                    Um den Wand of Better Building zu craften, benötigst du zuerst diesen Building Star.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "wands_builderswand.png", title: "Builders Wand", desc: "Der Builders Wand lässt dich Block-Flächen mit einem Klick expandieren." },
                            { src: "wands_changing.png", title: "Changing Wand", desc: "Der Changing Wand kann die Blöcke einer Fläche mit einem Klick ändern." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/wands/${src}`}
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Storage Drawers */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Storage Drawers</h2>
                        <span className="text-sm text-gray-400 italic">Lager</span>
                    </header>

                    <p className="text-gray-300 mb-8">
                        Storage Drawers ist eine super praktische Mod für Lagersysteme, vorallem bevor du ein ME-System hast.. Statt Haufen von Kisten zu bauen, kannst du Items ordentlich stapeln, sehen, wie viel noch drin ist, und alles schnell erreichen. Ideal für Basislager und große Projekte!
                    </p>

                    {/* Grundprinzip */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Grundprinzip</h3>
                    <p className="text-gray-300 mb-6">
                        Die Mod fügt verschiedene Arten von Schubladen hinzu: einzelne, doppelte oder vierfache Drawers. Jede Schublade kann **ein Item aufnehmen** (oder ein Item pro Slot bei großen Varianten). Die Items werden automatisch gestapelt und angezeigt, wie viele noch da sind. So hast du immer den Überblick!
                    </p>

                    {/* Drawer Typen */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "single_drawer.png", title: "Single Drawer", desc: "Nimmt eine Art von Item auf, stapelt es und zeigt die Anzahl an. Perfekt für kleine Mengen." },
                            { src: "double_drawer.png", title: "Double Drawer", desc: "Zwei Slots für verschiedene Items, ideal um verwandte Materialien zusammen zu lagern." },
                            { src: "quad_drawer.png", title: "Quad Drawer", desc: "Vier Slots auf kleinem Raum – sehr platzsparend für große Lagersysteme." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/storageDrawers/${src}`}
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

                    {/* Zusatzfunktionen */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Zusatzfunktionen</h3>
                    <p className="text-gray-300 mb-6">
                        Storage Drawers kann noch mehr: Mit **Trimmed Drawers** lassen sich mehrere Drawers zu einem großen Block verbinden, der optisch sauber aussieht. Es gibt **Locks**, um Items vor versehentlichem Entfernen zu schützen, und sogar **Upgrades**, wie größere Kapazität, Automatisierung oder Anzeige für Redstone-Signale.
                    </p>

                    {/* Crafting */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Crafting</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { src: "single_drawer_crafting.png", title: "Single Drawer Crafting", desc: "Das Rezept für den einfachen Drawer – perfekt für den Einstieg." },
                            { src: "double_drawer_crafting.png", title: "Double Drawer Crafting", desc: "Zwei Items in einer Schublade – spart Platz und organisiert Materialien clever." },
                            { src: "quad_drawer_crafting.png", title: "Quad Drawer Crafting", desc: "Vierfach-Drawer für fortgeschrittene Lagersysteme." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/storageDrawers/${src}`}
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

                    <p className="text-gray-300 mt-6">
                        Mit Storage Drawers baust du also ein sauberes, kompaktes Lager, das leicht zu bedienen ist und Platz spart – perfekt für jede Basis!
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Waystones */}
                <section id="mods-waystones" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    {/* Header */}
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/waystones/waystones_logo.webp"
                                    alt="Waystones Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Waystones</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Teleportation</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Waystones sind super praktisch, um schnell zwischen Orten zu reisen. Du kannst Waystones überall platzieren, sie miteinander verbinden und sogar über Dimensionen hinweg nutzen. Ideal für Spieler, die viel unterwegs sind oder große Basen haben!
                    </p>

                    {/* Waystones vs Shared Waystones */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Waystones & Shared Waystones</h3>
                    <p className="text-gray-300 mb-6">
                        Ein <strong>Waystone</strong> ist nur für dich oder Spieler deiner Nähe zugänglich. Ein <strong>Shared Waystone</strong> kann mit allen Spielern geteilt werden – jeder kann sich mit einem weiteren Sharestone zu ihm teleportieren.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "waystones_waystone.png", title: "Waystone", desc: "Der klassische Waystone – teleportiere dich zu ihm oder von ihm weg. Perfekt, um Orte schnell zu erreichen." },
                            { src: "waystones_sharestone.png", title: "Shared Waystone", desc: "Kann von allen Spielern genutzt werden. Super praktisch für öffentliche Basen oder Gemeinschaftsprojekte." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/waystones/${src}`}
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

                    {/* Warpstone */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Warpstone</h3>
                    <p className="text-gray-300 mb-6">
                        Der <strong>Warpstone</strong> ist etwas anders: Du kannst dich <strong>von ihm weg teleportieren</strong>, aber nicht wieder zu ihm hin.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "waystones_warpstone.png", title: "Warpstone", desc: "Der klassische Waystone – teleportiere dich zu ihm oder von ihm weg. Perfekt, um Orte schnell zu erreichen." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/waystones/${src}`}
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

                    {/* Warp Plates */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Warp Plates</h3>
                    <p className="text-gray-300 mb-6">
                        Mit <strong>Warp Plates</strong> kannst du zwei Punkte miteinander verbinden. Beim Platzieren bekommst du einen kleinen Stein, mit dem du die Verbindung herstellst.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "waystone.png", title: "Waystone", desc: "Der klassische Waystone – teleportiere dich zu ihm oder von ihm weg. Perfekt, um Orte schnell zu erreichen." },
                            { src: "shared_waystone.png", title: "Shared Waystone", desc: "Kann von allen Spielern genutzt werden. Super praktisch für öffentliche Basen oder Gemeinschaftsprojekte." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/waystones/${src}`}
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

                    {/* Scrolls */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Scrolls</h3>
                    <p className="text-gray-300 mb-6">
                        Es gibt drei Scroll-Typen:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { src: "crafting_warpstone.png", title: "Return Scroll", desc: "Teleportiert dich zu deinem zuletzt aktivierten Waystone." },
                            { src: "crafting_warp_plate.png", title: "Bound Scroll", desc: "Teleportiert dich zu einem bestimmten Waystone, den du beim Crafting gebunden hast." },
                            { src: "crafting_scrolls.png", title: "Warp Scroll", desc: "Funktioniert ähnlich wie ein Warpstone – du kannst dich weg teleportieren, aber nicht direkt zu ihm hin." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/waystones/${src}`}
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Plushie Mod */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-teal-400">Plushie Mod</h2>
                        <span className="text-sm text-gray-400 italic">Sammelbare Kuscheltiere</span>
                    </header>

                    <p className="text-gray-300 mb-8">
                        Die <span className="text-teal-300 font-semibold">Plushie Mod</span> bringt eine
                        Extraportion Gemütlichkeit in dein Zuhause! Von Creepern über Axolotl bis hin zu Endermen – von nahezu jedem bekannten
                        Minecraft-Mob gibt es jetzt ein passendes Plushie.
                        Du kannst sie auf Regale, Betten oder in gemütliche Ecken stellen – perfekt,
                        um deiner Basis ein bisschen Leben und Persönlichkeit zu verleihen.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Rucksack", desc: "Ein Schwert aus Smaragd" },
                            { src: "emeraldTools_pickaxe.png", title: "Farbiger Rucksack", desc: "Eine Spitzhacke aus Smaragd" },
                            { src: "emeraldTools_axe.png", title: "Kupfer Rucksack", desc: "Eine Axt aus Smaragd" },
                            { src: "emeraldTools_shovel.png", title: "Eisen Rucksack", desc: "Eine Schaufel aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Gold Rucksack", desc: "Eine Hoe aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Diamant Rucksack", desc: "Eine Hoe aus Smaragd" },
                            { src: "emeraldTools_hoe.png", title: "Netherite Rucksack", desc: "Eine Hoe aus Smaragd" },
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Chimes */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/chimes/chimes_logo.png"
                                    alt="Chimes Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Chimes</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Dekoration</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Mit dieser Mod werden 6 verschiedene Windspiele hinzugefügt, welche passende beruhigende Töne abspielen.
                        Zudem verjagen sie Phantome, sind also perfekt für Nachtaktive!
                    </p>

                    <div className="my-6 p-4 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex items-start gap-3 animate-fade-in">
                        <div className="flex-shrink-0 text-teal-400 mt-0.5">
                            💡
                        </div>
                        <div>
                            <p className="text-teal-300 font-semibold">Tipp:</p>
                            <p className="text-gray-300">
                                Du kannst mit Shift+Rechtsklick auf einen Chime, diesen stummstellen und auch wieder freischalten.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "chimes_bamboo.png", title: "Bamboo Wind Chime", desc: "Kann nach dem platzieren mit einer Axt gestripped werden, um den Sound zu verändern." },
                            { src: "chimes_copper.png", title: "Copper Wind Chime", desc: "Mein persönlicher Favorit!" },
                            { src: "chimes_iron.png", title: "Iron Wind Chime", desc: "Etwas höhere Töne als der Copper-Chime." },
                            { src: "chimes_amethyst.png", title: "Amethyst Wind Chime", desc: "Hat einen Vibe von Glitzer." },
                            { src: "chimes_glass.png", title: "Glass Wind Bell", desc: "Eine japanisch angehauchte Glassglocke, welcher auch gefärbt werden kann." },
                            { src: "chimes_glass_dying.png", title: "Glass Wind Bell färben", desc: "Die obere Farbe wird das Glas färben und die untere den Banner." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/chimes/${src}`}
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Gravestones */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/graves/graves_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Gravestones</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Grabsteine</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/graves/graves_banner.png"
                            alt="Meteor Kompass"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <p className="text-gray-300 mb-8">
                        Wer hat es nicht schonmal erlebt, beim farmen von Zombies in die Ecke gedrängt, in eine Schlucht gefallen, den Sprung falsch eingeschätzt und BAMM, alle Items weg!
                        Mit Gravestone hast du die Chance deine Items wieder zu bekommen, egal wann und wo du stirbst. An deinem Todespunkt erscheint ein Grab welches nur von dir mit einem Rechtsklick wieder aufgehoben werden kann.
                    </p>
                    <p className="text-gray-300 mb-8">
                        Du kannst die verschiedenen Grabsteine auch für Dekorationszwecke craften:
                    </p>
                    <div className="mb-8">
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/graves/graves_crafting.png"
                                    alt="Grabstein"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">Grabstein</h4>
                                <p className="text-gray-300">
                                    Du kannst auf Grabsteine auch schreiben, wie auf Schildern!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "graves_crafting_1.png", title: "Verwitterter Grabstein", desc: "Brenne einen Grabstein im Ofen" },
                            { src: "graves_crafting_2.png", title: "Kaputter Grabstein", desc: "Brenne einen Verwitterten Grabstein im Ofen" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/graves/${src}`}
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Snow! Real Magic! */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Snow! Real Magic! Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Snow! Real Magic! ⛄</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Schnee Utility</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_banner.png"
                            alt="Real Magic Schnee-Blöcke"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <p className="text-gray-300 mb-8">
                        <strong>Snow! Real Magic!</strong> fügt einige kleine Tweaks bezüglich Schnee hinzu.
                        Zum einen kann Schnee jetzt auf verschiedene Blöcke platziert werden, um diese in eine Schneevariante zu ändern.
                        Zum anderen ist Schnee jetzt immer durch andere Blöcke ersetzbar, was das bauen in Schneebiomen sehr vereinfacht.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Snowy Spirit */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Snowy Spirit</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Dekoration</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Snowy Spirit fügt einige winterliche Items hinzu, darunter eine neue Music Disc, einige Deko-Elemente und Schlitten!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Schlitten", desc: "Es gibt Schlitten in allen Holzvarianten!" },
                            { src: "emeraldTools_pickaxe.png", title: "Candy Canes", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Candy Cane Block", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Lichterketten", desc: "Lichterketten können in allen Farben gecraftet werden" },
                            { src: "emeraldTools_shovel.png", title: "Prismatic Lichterketten", desc: "Eine Lichterkette, die in allen Farben leuchtet" },
                            { src: "emeraldTools_shovel.png", title: "Wreath", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Snow Globe", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Eierlikör", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Gumdrop(s)", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Lebkuchen-Block", desc: "Aus dem Block können auch Treppen, Slabs, Türen und Trapdoors gebaut werden." },
                            { src: "emeraldTools_shovel.png", title: "Lebkuchen-Block mit Zuckerguss", desc: "-" },
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
                    <p className="text-gray-300 mb-8">
                        Tipp: Um Ginger zu erhalten musst du zuerst Wild Ginger in der Welt finden. Baust du diesen ab erhälst du eine Ginger Flower welche ganz normal auf Farmland angepflanzt werden kann.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Winterly */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/winterly/winterly_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Winterly</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Dekoration</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Mit dieser Mod erhalten wir Zuckerstangen, neue winterliche Mützen und Schals, ein komplett neues Material mit dem Wekzeuge gecraftet werden können, sowie Geschenke und einige neue Blöcke!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "winterly_candy.png", title: "Candy Canes", desc: "Tausche einfach den Dye um Rote, grüne oder Blaue Stangen zu bekommen." },
                            { src: "emeraldTools_axe.png", title: "Garland Lights", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Rainy Garland Lights", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Schneemann", desc: "-" },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/winterly/${src}`}
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Macaws Lights and Lamps */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Macaws Lights and Lamps</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Dekoration</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Wolltest du schon immer mehr Optionen für Licht in Minecraft haben? Dann ist diese Mod perfekt für dich!
                        Wir erhalten viele verschiedene Lampen, Laternen und sogar Ventilatoren mit denen wir unsere Builds ausleuchten können.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Lamp", desc: "Kann in allen Farben gecraftet werden." },
                            { src: "emeraldTools_axe.png", title: "Ceiling Light", desc: "Kann in allen Farben gecraftet werden." },
                            { src: "emeraldTools_axe.png", title: "Wall Lamp", desc: "Kann nach dem platzieren mit dye gefärbt werden." },
                            { src: "emeraldTools_axe.png", title: "Square Wall Lamp", desc: "Kann nach dem platzieren mit dye gefärbt werden." },
                            { src: "emeraldTools_axe.png", title: "Paper Lamp", desc: "Kann in allen Farben gecraftet werden." },
                            { src: "emeraldTools_shovel.png", title: "Tiki Torch", desc: "Kann in allen Holzvarianten, sowie mit Soul-Fackeln gecraftet werden." },
                            { src: "emeraldTools_shovel.png", title: "Street Lamp Post", desc: "Kann auch mit Soul-Laternen hergestellt werden." },
                            { src: "emeraldTools_shovel.png", title: "Double Street Lamp Post", desc: "Kann auch mit Soul-Laternen hergestellt werden." },
                            { src: "emeraldTools_shovel.png", title: "Lavalampe", desc: "-" },
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Nether Chest */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/netherchest/netherchest_logo.webp"
                                    alt="Nether Chest Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Nether Chest</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Öffentliche Kiste</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <div className="relative w-full max-w-md h-64 mx-auto mb-8">
                        <Image
                            src="/minecraft/winterprojekt/2025/wiki/netherchest/netherchest_key.png"
                            alt="Nether Chest Key Items"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </div>

                    <p className="text-gray-300 mb-8">
                        Die <strong>Nether Chest</strong> ist eine spezielle Kiste mit mehreren öffentlichen Inventaren.
                        Jedes Inventar wird über einen sogenannten Key gesteuert.
                        Wenn du zum Beispiel 5 Karotten in den Key-Slot legst, kann nur jemand auf die Items zugreifen,
                        der ebenfalls 5 Karotten in seinen Key-Slot gelegt hat.
                    </p>
                    <p className="text-gray-300 mb-8">
                        Auf diese Weise lassen sich mehrere Inventare einfach teilen – ähnlich wie bei einer Enderchest,
                        auf die jeder mit dem richtigen Key Zugriff hat.
                    </p>

                    <p className="text-gray-300 mb-8">
                        Die Kiste kann aber auch ohne Key verwendet werden, sodass alle Spieler mit einer Nether Chest auf die Items zugreifen können.
                    </p>

                    <div className="mb-8">
                        <div className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                            <div className="relative w-40 h-40 flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/netherchest/netherchest_crafting.png"
                                    alt="Netherchest Crafting"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="text-xl font-semibold text-teal-300 mb-2">Nether Chest</h4>
                                <p className="text-gray-300">
                                    Die Nether Chest wird mit einem Nether Star gecraftet.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Tinkers Construct */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Tinkers Construct</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Schmiede</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Bitte wenden Sie sich für weitere Informationen bei irwa_. Vielen Dank!
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Extra Generators */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Extra Generators</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Stromgeneratoren</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />

                    <p className="text-gray-300 mb-8">
                        Extra Generators fügt 18 neue Generatoren hinzu, welche Strom für Applied Energistics 2 generieren können.
                        Es gibt viele verschiedene Varianten von Generatoren.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                    <h2 className="text-2xl font-semibold mb-4 text-teal-400">Gen1</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Crafting", desc: "-" },
                            { src: "emeraldTools_axe.png", title: "Usage", desc: "-" },
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

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - [Lets Do]-Reihe */}
                <h2 className="text-3xl font-semibold mb-4 text-teal-400">[Lets Do]-Reihe</h2>
                <p className="text-gray-300 mb-8">
                    Die [Lets Do]-Reihe ist eine Reihe an Farm und Essensmods, welche neue Crops, neues Essen und vieles mehr hinzufügt.
                </p>

                {/* Mods - Farm & Charm */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Farm & Charm</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Farming</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Bakery */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Bakery</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Bäckerei</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Candlelight */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Candlelight</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Mahlzeiten & Dekorationen</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Herbal Brews */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Herbal Brews</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Tee</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Vinery */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Vinery</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Wein</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Beachparty */}
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16 p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300">
                    <header className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
                                <Image
                                    src="/minecraft/winterprojekt/2025/wiki/realmagic/realmagic_logo.webp"
                                    alt="Chimes Icon"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-3xl font-bold text-teal-400">Beachparty</h2>
                        </div>
                        <span className="text-sm text-gray-400 italic">Strand</span>
                    </header>
                    <hr className="border-t border-gray-700 my-4" />
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

            </div>
        </main >
    );
}