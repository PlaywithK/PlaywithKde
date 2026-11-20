"use client";

import {galleryImages} from "@/components/winterprojekt/winterprojekt17Data";
import LastEdited from "@/components/lastedited";
import Gallery from "@/components/gallery";

export default function Winterprojekt2017() {
    return (
        <>
            <HeaderSection/>
            <Divider/>
            <DescriptionSection/>
            <Divider/>
            <GallerySection/>
            <LastEdited date="18.10.2026"/>
        </>
    );
}

function HeaderSection() {
    return (
        <section className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2017</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Dies war der Anfang der Winterprojekt-Serie.
            </p>
        </section>
    );
}

function DescriptionSection() {
    return (
        <section className="max-w-6xl mx-auto text-center">
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                2017 begann alles! Zum ersten Mal startete ein Minecraft-Projekt in der Winterzeit, geleitet von
                PlaywithK.
                Das erste Winterprojekt begann ganz simple, aber setzte auch einige Standards, die sich noch für Jahre
                halten sollten.

                Auf der 1.8.8 wurde damals vorallem noch mit Labymod auf dem Server gespielt, welcher nur ein paar
                wenige Plugins hatte, darunter eine Farmwelt und Essentials.
                Auch die besonderen sammelbaren Items fanden schon hier ihren Anfang.
            </p>
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