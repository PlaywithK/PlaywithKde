"use client";

import Link from 'next/link';
import Image from "next/image";
import Hero from "@/components/hero";
import { H1, H2, H3, P, PLarge} from "@/components/design";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";


export default function Winterprojekt() {
    const {t, common, locale} = usePageBasics("minari");

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")} />

            {/* Beschreibung */}
            <section className="max-w-4xl mx-auto text-center">
                <P className="mb-8">
                    Meine eigenen Minecraft Mods.
                </P>
            </section>

            {/* Hauptbild -- Noch nicht ganz mittig?? */}
            <section className="max-w-4xl mx-auto text-center">
                <Link href={`/${locale}/projects/minecraft/winterprojekt/wp2025`}>
                    <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-xl shadow-lg border border-white border-opacity-10 overflow-hidden cursor-pointer">
                        <Image
                            src="/Winterprojekt_Front.png"
                            alt="Winterprojekt Minecraft Bild"
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-6xl sm:text-6xl font-semibold drop-shadow-lg pointer-events-none">
              2025
            </span>
                    </div>
                </Link>

                <Link href="./../../projects" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all mt-12 mb-12">
                    Zurück zur Projektübersicht
                </Link>
            </section>

            <LastEdited date="04.06.2026" />
        </>
    );
}

