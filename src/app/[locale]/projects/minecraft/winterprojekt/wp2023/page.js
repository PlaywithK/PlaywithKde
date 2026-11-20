"use client";

import {galleryImages} from "@/components/winterprojekt/winterprojekt23Data";
import Gallery from "@/components/gallery";
import LastEdited from "@/components/lastedited";

export default function Winterprojekt2023() {
    return (
        <>
            <HeaderSection/>
            <DownloadSection/>
            <Divider/>
            <GallerySection/>
            <LastEdited date="18.10.2026"/>
        </>
    );
}

function HeaderSection() {
    return (
        <section className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2023</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                In 2023 kam eine andere Worldgen in das Projekt, mit der sich nicht jeder anfreunden konnte.
            </p>
        </section>
    );
}

function DownloadSection() {
    return (
        <section className="mb-16 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-teal-400">Download</h2>
            <p className="text-gray-300 mb-8 max-w-prose mx-auto">
                Lade dir die Welt oder die Lobby des Winterprojekts 2024 herunter und erkunde die Map selbst.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://github.com/PlaywithK/PlaywithKde/releases/download/Test/Winterprojekt2024_Map.zip"
                    download
                    className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all inline-flex items-center justify-center gap-2"
                >
                    🡇 Map herunterladen
                </a>
            </div>
            <p>
                Minecraft-Version: 1.xx.x
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