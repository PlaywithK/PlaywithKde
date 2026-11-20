"use client";

import {galleryImages} from "@/components/winterprojekt/winterprojekt20Data";
import LastEdited from "@/components/lastedited";
import Gallery from "@/components/gallery";

export default function Winterprojekt2020() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Winterprojekt 2020</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                Das Winterprojekt 2020 war das erste seiner Art, welches in einer der neueren Versionen stattfand.
            </p>
        </section>
    );
}

function DownloadSection() {
    return (
        <section className="mb-16 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-teal-400">Download</h2>
            <p className="text-gray-300 mb-8 max-w-prose mx-auto">
                Lade dir die Welt des Winterprojekts 2020 herunter und erkunde sie selbst.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="https://drive.usercontent.google.com/download?id=17a7TA20_W6uXBDqCsChG0JnnVkJwuKUC&export=download&confirm=t"
                    target="_blank"
                    rel="noopener noreferrer"
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