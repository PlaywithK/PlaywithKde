"use client";

import Hero from "@/components/hero";
import {usePageBasics} from "@/components/pageBasics";
import LastEdited from "@/components/lastedited";

export default function Gimmelcraft() {
    const {t, common, locale} = usePageBasics("minecraft");

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")}/>

            {/* Beschreibung */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-gray-300 mb-8">
                    Gimmelcraft yeah
                </p>
            </section>

            <LastEdited date="31.05.2026"/>
        </>
    );
}