"use client";

import Link from "next/link";
import Hero from "@/components/hero";
import {H2} from "@/components/design";
import Gallery from "@/components/gallery";
import ServerStatusCard from "@/components/serverstatus";
import {galleryImages} from "@/components/winterprojekt/winterprojekt25Data";
import LastEdited from "@/components/lastedited";

export default function Winterprojekt2025() {
    return (
        <>
            <HeaderSection/>
            <Divider/>
            <RulesSection/>
            <Divider/>
            <GallerySection/>
            <LastEdited date="18.10.2026"/>
        </>
    );
}

function HeaderSection() {
    return (
        <section className="max-w-6xl mx-auto text-center">
            <Hero
                title="Winterprojekt 2025"
                subtitle="Das Winterprojekt 2025 wird zum zweiten Mal mit einem Modpack gespielt."
            />

            <ServerStatusCard/>

            <div className="flex justify-center mt-12 mb-12">
                <Link
                    href="./wp2025/wiki"
                    className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 px-6 py-3 text-white font-semibold rounded-full transition-all"
                >
                    Zum Download & Wiki <span>→</span>
                </Link>
            </div>
        </section>
    );
}

function RulesSection() {
    return (
        <section className="max-w-6xl mx-auto text-center">
            <H2 className="mb-6">Regeln</H2>
            <ol className="list-decimal text-left mx-auto w-fit">
                <li>Geht respektvoll miteinander um.</li>
                <li>Keine Cheats, Mods mit unfairen Vorteilen oder X-Ray, Duping ist nicht Verboten, aber auch nicht
                    gerne gesehen.
                </li>
                <li>Es darf gestreamt werden, solange Privates von anderen Teilnehmern respektiert wird.</li>
                <li>Großes Griefen ist verboten.</li>
            </ol>

            <div
                className="my-8 p-5 rounded-xl border border-teal-500/50 bg-gradient-to-r from-gray-800/70 via-gray-900/70 to-gray-800/70 shadow-lg flex items-start gap-3">
                <div>
                    <p className="text-teal-300 font-semibold">Grundlegend gilt:</p>
                    <p className="text-gray-300">
                        Das Projekt stellt den Spielspaß jedes einzelnen Spielers in den Mittelpunkt, was bedeutet, dass
                        PvP, Trolls und weiteres im Rahmen dessen bleiben sollten, sodass jeder daran Spaß hat.
                    </p>
                </div>
            </div>
        </section>
    );
}

function GallerySection() {
    return (
        <Gallery
            title="Community Galerie"
            description="In der Community-Galerie findest du Bilder und Clips aus der Community! Du hast auch einen Moment der es verdient hat hier zu landen? Schicke ihn PlaywithK auf Discord!"
            images={galleryImages}
        />
    );
}

function Divider() {
    return <hr className="border-t border-gray-700 my-12"/>;
}