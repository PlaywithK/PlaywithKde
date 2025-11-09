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

                {/* Inhaltsangabe */}
                <section className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-6 text-teal-400">Inhaltsangabe</h2>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2 text-teal-400">Technisches</h3>
                        <ul className="list-decimal list-inside text-gray-300 space-y-2">
                            <li><Link href="#installation" className="hover:underline">Installation & Setup</Link></li>
                            <li><Link href="#modlist" className="hover:underline">Modliste</Link></li>
                            <li><Link href="#rei" className="hover:underline">Roughly Enough Items</Link></li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-2 text-teal-400">Mods</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><Link href="#mod-ae2" className="hover:underline">Applied Energistics 2 (AE2)</Link></li>
                            <li><Link href="#mod-amendments" className="hover:underline">Amendments</Link></li>
                            <li><Link href="#mod-elevator" className="hover:underline">Another Simple Elevator</Link></li>
                            <li><Link href="#mods-chimes" className="hover:underline">Chimes</Link></li>
                            <li><Link href="#mods-generators" className="hover:underline">Extra Generators</Link></li>
                            <li><Link href="#mod-fishing-crates" className="hover:underline">Fishing Crates</Link></li>
                            <li><Link href="#mods-graves" className="hover:underline">Gravestones</Link></li>
                            <li><Link href="#mods-macaw" className="hover:underline">Macaws Lights & Lamps</Link></li>
                            <li><Link href="#mods-netherchest" className="hover:underline">Nether Chest</Link></li>
                            <li><Link href="#mods-plushies" className="hover:underline">Plushie Mod</Link></li>
                            <li><Link href="#mods-realmagic" className="hover:underline">Snow! Real Magic!</Link></li>
                            <li><Link href="#mods-snowyspirit" className="hover:underline">Snowy Spirit</Link></li>
                            <li><Link href="#mod-backpacks" className="hover:underline">Sophisticated Backpacks</Link></li>
                            <li><Link href="#mods-drawers" className="hover:underline">Storage Drawers</Link></li>
                            <li><Link href="#mod-supplementaries" className="hover:underline">Supplementaries</Link></li>
                            <li><Link href="#mod-tinkers" className="hover:underline">Tinkers Construct</Link></li>
                            <li><Link href="#mods-waystones" className="hover:underline">Waystones</Link></li>
                            <li><Link href="#mod-buidling-wands" className="hover:underline">Wand of Better Building</Link></li>
                            <li><Link href="#mods-winterly" className="hover:underline">Winterly</Link></li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2 text-teal-400">[Let's Do]-Reihe</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                            <li><Link href="#mods-do-farm" className="hover:underline">[Let's Do] Farm & Charm</Link></li>
                            <li><Link href="#mods-do-bakery" className="hover:underline">[Let's Do] Bakery</Link></li>
                            <li><Link href="#mods-do-candle" className="hover:underline">[Let's Do] Candlelight</Link></li>
                            <li><Link href="#mods-do-herbal" className="hover:underline">[Let's Do] Herbal Brews</Link></li>
                            <li><Link href="#mods-do-vinery" className="hover:underline">[Let's Do] Vinery</Link></li>
                            <li><Link href="#mods-do-beach" className="hover:underline">[Let's Do] Beachparty</Link></li>
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
                        In dieser Sektion findest du alle Mods aufgelistet.
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
                                <li>Lets Do Farm & Charm, Bakery, Vinery, HerbalBrews (und evtl. Brewery)</li>
                                <li>Tinkers Construct</li>
                            </ul>
                        </div>

                        {/* Strukturen */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-teal-300">Strukturen</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>Tectonic (Biome Gen)</li>
                                <li>WilliamWithers Overhauled Overworld</li>
                                <li>ChoiceTheorem’s Overhauled Village</li>
                                <li>Structory</li>
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
                                <li>Macaw’s Lights and Lamps</li>
                                <li>Chimes</li>
                                <li>Supplementaries (Restricted)</li>
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
                                <li>REI & Jade</li>
                                <li>ModMenu</li>
                                <li>PWKUtils</li>
                                <li>AnotherSimpleElevator</li>
                                <li>Amendments</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* REI */}
                <section id="rei" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Roughly Enough Items</h2>
                    <p className="text-gray-300 mb-4">
                        Dies ist eine kurze Einführung und Erklärung für <strong>Roughly Enough Items</strong>, ab hier immer <strong>REI</strong> genannt.
                        REI ist eine Mod, die Spielern ermöglicht, sämtliche Rezepte und Verwendungszwecke von Items einzusehen – egal ob aus Vanilla oder Mods.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Auf der rechten Seite deines Inventars findest du eine Liste aller verfügbaren Items. Du kannst mit der Suchleiste unten gezielt nach einem Item suchen oder mit dem Mausrad durch die Liste scrollen. Du kannst auch mit @ nach allen Items einer bestimmten Mod suchen, zum Beispiel @Applied für alle Applied Energistics Items.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Wenn du wissen möchtest, <strong>wie man ein Item herstellt</strong>, bewege den Mauszeiger darüber und drücke <strong>R</strong> (für „Recipe“).
                        Um herauszufinden, <strong>wo ein Item verwendet wird</strong>, drücke <strong>U</strong> (für „Uses“).
                        REI zeigt dir dann übersichtlich alle passenden Herstellungs- oder Verwendungsrezepte an.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods */}
                {/* Mods - Applied Energistics 2 */}
                <section id="mod-ae2" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Applied Energistics 2 (AE2)</h2>

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
                <section id="mods-emerald" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Sophisticated Backpacks</h2>

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
                <section id="mod-amendments" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Amendments</h2>

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
                <section id="mod-supplementaries" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Supplementaries</h2>

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
                <section id="mod-elevator" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Another Simple Elevator</h2>

                    <p className="text-gray-300 mb-8">
                        Another Simple Elevator ist eine kleine, aber super praktische Mod, die es dir erlaubt, dich vertikal in deinem Bau zu bewegen, ohne komplizierte Redstone-Aufzüge zu bauen.
                        Springe nach oben oder drücke Shift, um nach unten zu gehen – vorausgesetzt, es ist ein weiterer Elevator-Block vorhanden.
                    </p>

                    {/* Crafting Rezepte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "elevator_block.png", title: "Elevator Block", desc: "Das Grundrezept: Wolle + Enderperle. Nutze ihn, um zwischen Stockwerken zu teleportieren." },
                            { src: "colored_elevator_block.png", title: "Gefärbter Elevator Block", desc: "Du kannst den Elevator Block einfärben, um ihn farblich an dein Bauwerk anzupassen." },
                        ].map(({ src, title, desc }) => (
                            <div key={title} className="flex items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/anotherSimpleElevator/${src}`}
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
                        Stehe auf einem Elevator-Block und drücke <strong>Jump</strong>, um nach oben zu teleportieren, oder <strong>Shift</strong>, um nach unten zu gehen.
                        Du kannst beliebig viele Elevator-Blöcke übereinander stapeln, um mehrere Stockwerke schnell und bequem zu verbinden.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Fishing Crates */}
                <section id="mod-fishing-crates" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Fishing Crates</h2>

                    <div className="relative w-full h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
                        <Image src="/minecraft/winterprojekt/2025/wiki/fishingCrates/loot_table_example.png" alt="Beispiel Loot-Table" fill className="object-cover" />
                    </div>

                    <p className="text-gray-300 mb-8">
                        Fishing Crates fügt drei neue Loot-Crates hinzu, die beim Angeln gefangen werden können. Jede Crate hat ihre eigene Seltenheit und Loot.
                    </p>

                    {/* Wood Loot */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2 text-teal-300">Wooden Crate</h4>
                        <p className="text-gray-300 mb-2">
                            Enthält hauptsächlich Fisch, Seagrass, Eisen- und Goldbarren, Pfeile, XP-Flaschen und vereinzelt Diamanten oder kleine verzauberte Bücher. Perfekt für den Einstieg beim Angeln.
                        </p>
                    </div>

                    {/* Iron Loot */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2 text-teal-300">Iron Crate</h4>
                        <p className="text-gray-300 mb-2">
                            Bessere Items als die Wooden Crate: mehr XP-Flaschen, Eisen, Gold, Diamanten, Tridents, Wassertränke, Prismarine-Shards und -Crystals sowie gelegentlich verzauberte Bücher.
                        </p>
                    </div>

                    {/* Gold Loot */}
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-2 text-teal-300">Gold Crate</h4>
                        <p className="text-gray-300 mb-2">
                            Die seltenste Crate mit hochwertigen Belohnungen: verzauberte Angelruten, Nautilus-Schalen, Herz des Meeres, Lapis, Amethyst, XP-Flaschen, Prismarine, Tridents, Gold- & Eisenblöcke, Diamond und sogar Ancient Debris.
                        </p>
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Wand of Better Building */}
                <section id="mod-wand-of-better-building" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Wand of Better Building</h2>

                    <p className="text-gray-300 mb-8">
                        Die Wand of Better Building Mod fügt zwei nützliche Zauberstäbe hinzu, die dir das Bauen erheblich erleichtern.
                        Mit dem einen kannst du Wandflächen „extrahieren“ (z.B. ganze Wände kopieren) und mit dem anderen kannst du sie mit nur einem Klick verändern – zum Beispiel von Holz zu Steinziegeln. Einfach, schnell und super praktisch!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                src: "wand_face_extractor.png",
                                title: "Face Extractor",
                                desc: "Mit dem Face Extractor kannst du komplette Flächen von Blöcken auswählen und kopieren. Super praktisch, wenn du z.B. Wände oder große Muster übernehmen willst.",
                                crafting: "/minecraft/winterprojekt/2025/wiki/wandOfBetterBuilding/face_extractor_crafting.png"
                            },
                            {
                                src: "wand_face_changer.png",
                                title: "Face Changer",
                                desc: "Der Face Changer erlaubt es dir, kopierte oder vorhandene Flächen mit nur einem Klick in einen anderen Blocktyp zu verwandeln, z.B. Holz zu Steinziegeln. Ideal für schnelle Änderungen am Bauprojekt.",
                                crafting: "/minecraft/winterprojekt/2025/wiki/wandOfBetterBuilding/face_changer_crafting.png"
                            },
                        ].map(({ src, title, desc, crafting }) => (
                            <div key={title} className="flex flex-col md:flex-row items-center bg-gray-800 rounded-xl shadow-lg border border-white/10 overflow-hidden">
                                <div className="relative w-40 h-40 flex-shrink-0 m-4">
                                    <Image
                                        src={`/minecraft/winterprojekt/2025/wiki/wandOfBetterBuilding/${src}`}
                                        alt={title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="p-4 flex-1">
                                    <h4 className="text-xl font-semibold text-teal-300 mb-2">{title}</h4>
                                    <p className="text-gray-300 mb-4">{desc}</p>
                                    <div className="relative w-full h-40 md:h-32 rounded-xl overflow-hidden">
                                        <Image
                                            src={crafting}
                                            alt={`${title} Crafting`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Storage Drawers */}
                <section id="mod-storage-drawers" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Storage Drawers</h2>

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
                <section id="mod-waystones" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Waystones</h2>

                    <p className="text-gray-300 mb-8">
                        Waystones sind super praktisch, um schnell zwischen Orten zu reisen. Du kannst Waystones überall platzieren, sie miteinander verbinden und sogar über Dimensionen hinweg nutzen. Ideal für Spieler, die viel unterwegs sind oder große Basen haben!
                    </p>

                    {/* Waystones vs Shared Waystones */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Waystones & Shared Waystones</h3>
                    <p className="text-gray-300 mb-6">
                        Ein **normaler Waystone** ist nur für dich oder Spieler deiner Nähe zugänglich. Ein **Shared Waystone** kann mit allen Spielern geteilt werden – jeder kann sich dahin teleportieren, solange er aktiviert ist. Beide können über Crafting hergestellt werden und können später auch über Dimensionen hinweg genutzt werden.
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

                    {/* Warpstone */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Warpstone</h3>
                    <p className="text-gray-300 mb-6">
                        Der **Warpstone** ist etwas anders: Du kannst dich **von ihm weg teleportieren**, aber nicht direkt zu ihm hin. Ideal, um Fluchtpunkte oder strategische Ausgangspunkte zu bauen.
                    </p>

                    {/* Warp Plates */}
                    <h3 className="text-2xl font-semibold mb-4 text-teal-400">Warp Plates</h3>
                    <p className="text-gray-300 mb-6">
                        Mit **Warp Plates** kannst du zwei Punkte miteinander verbinden. Beim Platzieren bekommst du einen kleinen Stein, mit dem du die Verbindung herstellst. Super, um feste Wege zwischen Basen oder wichtigen Orten zu bauen. Warp Plates funktionieren auch über Dimensionen hinweg!
                    </p>

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
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Plushie Mod</h2>
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
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Chimes</h2>
                    <p className="text-gray-300 mb-8">
                        Mit dieser Mod erhalten wir 4 verschiedene Windspiele, welche passende ruhige Töne abspielen.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Chime 1", desc: "Ein Schwert aus Smaragd" },
                            { src: "emeraldTools_pickaxe.png", title: "Chime 1", desc: "Eine Spitzhacke aus Smaragd" },
                            { src: "emeraldTools_axe.png", title: "Chime 1", desc: "Eine Axt aus Smaragd" },
                            { src: "emeraldTools_shovel.png", title: "Chime 1", desc: "Eine Schaufel aus Smaragd" },
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

                {/* Mods - Gravestones */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Gravestones</h2>
                    <p className="text-gray-300 mb-8">
                        Wer hat es nicht schonmal erlebt, beim farmen von Zombies in die Ecke gedrängt, in eine Schlucht gefallen, den Sprung falsch eingeschätzt und BAMM, alle Items weg!
                        Mit Gravestone hast du die Chance deine Items wieder zu bekommen, egal wann und wo du stirbst. An deinem Todespunkt erscheint ein Grab welches nur von dir mit einem Rechtsklick wieder aufgehoben werden kann.
                        Du kannst die verschiedenen Grabsteine auch für Dekorationszwecke craften:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_sword.png", title: "Chime 1", desc: "Ein Schwert aus Smaragd" },
                            { src: "emeraldTools_pickaxe.png", title: "Chime 1", desc: "Eine Spitzhacke aus Smaragd" },
                            { src: "emeraldTools_axe.png", title: "Chime 1", desc: "Eine Axt aus Smaragd" },
                            { src: "emeraldTools_shovel.png", title: "Chime 1", desc: "Eine Schaufel aus Smaragd" },
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

                {/* Mods - Snow! Real Magic! */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Snow! Real Magic! ⛄</h2>
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
                        Snow! Real Magic! fügt einige kleine Tweaks bezüglich Schnee hinzu.
                        Zum einen kann Schnee jetzt auf verschiedene Blöcke platziert werden, um diese in eine Schneevariante zu ändern.
                        Zum anderen ist Schnee jetzt immer durch andere Blöcke ersetzbar, was das bauen in Schneebiomen sehr verbessert.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Snowy Spirit */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Snowy Spirit</h2>
                    <p className="text-gray-300 mb-8">
                        Snowy Spirit fügt einige winterliche Items hinzu, darunter eine neue Music Disc "A Carol", einige Deko-Elemente und Schlitten!
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
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Winterly</h2>
                    <p className="text-gray-300 mb-8">
                        Mit dieser Mod erhalten wir Zuckerstangen, neue winterliche Mützen und Schals, ein komplett neues Material mit dem Wekzeuge gecraftet werden können, sowie Geschenke und einige neue Blöcke!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { src: "emeraldTools_pickaxe.png", title: "Candy Canes", desc: "Tausche einfach den Dye um Rote, grüne oder Blaue Stangen zu bekommen." },
                            { src: "emeraldTools_axe.png", title: "Garland Lights", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Rainy Garland Lights", desc: "-" },
                            { src: "emeraldTools_shovel.png", title: "Schneemann", desc: "-" },
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

                {/* Mods - Macaws Lights and Lamps */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Macaws Lights & Lamps</h2>
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
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Nether Chest</h2>
                    <p className="text-gray-300 mb-8">
                        Diese Mod ist basically ein Briefkasten.
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Tinkers Construct */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Tinkers Construct</h2>
                    <p className="text-gray-300 mb-8">
                        Bitte wenden Sie sich für weitere Informationen bei irwa_. Vielen Dank!
                    </p>
                </section>

                <hr className="border-t border-gray-700 my-12" />

                {/* Mods - Extra Generators */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Extra Generators</h2>
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

                {/* Mods - [Let's Do]-Reihe */}
                <h2 className="text-3xl font-semibold mb-4 text-teal-400">[Let's Do]-Reihe</h2>

                {/* Mods - Farm & Charm */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Farm & Charm</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Bakery */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Bakery</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Candlelight */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Candlelight</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Herbal Brews */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Herbal Brews</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Vinery */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Vinery</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

                {/* Mods - Beachparty */}
                <section id="plushie-mod" className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-semibold mb-4 text-teal-400">Beachparty</h2>
                    <p className="text-gray-300 mb-8">
                        Mod-Beschreibung.
                    </p>
                </section>

            </div>
        </main>
    );
}