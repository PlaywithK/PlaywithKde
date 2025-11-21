"use client";

import Hero from "./../../components/hero";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Minecraft() {
    const t = useTranslations("Minecraft");
    const params = useParams();
    const locale = params.locale;

    useEffect(() => {
        document.title = locale === "de"
            ? "Minecraft Projekte - PlaywithK.de"
            : "Minecraft Projects - PlaywithK.de";
    }, [locale]);

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")} />

            {/* Beschreibung */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-gray-300 mb-8">
                    Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
                    Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
                </p>

                <Link href="./../../projekte" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all mt-12 mb-12">
                    Zurück zur Projektübersicht
                </Link>
            </section>
        </>
    );
}
