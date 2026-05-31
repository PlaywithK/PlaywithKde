"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";

import Link from 'next/link';
import Image from "next/image";

export default function Gimmelcraft() {
    const t = useTranslations("Gimmelcraft");
    const params = useParams();
    const locale = params.locale;

    useEffect(() => {
        document.title = locale === "de"
            ? "Minecraft Gimmelcraft - PlaywithK.de"
            : "Minecraft Gimmelcraft - PlaywithK.de";
    }, [locale]);

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")} />

            {/* Beschreibung */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-gray-300 mb-8">
                    Gimmelcraft yeah
                </p>
            </section>

            <LastEdited date="31.05.2026" />
        </>
    );
}