"use client";

import Link from "next/link";
import {H1, H2, H3, P, PLarge, PSmall, Section} from "@/components/design";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import ProgramCard from "@/components/programcard";
import {usePageBasics} from "@/components/pageBasics";

export default function StreamPage() {
    const {t, common, locale} = usePageBasics("stream");

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">Streams</H2>
            </Section>

            <Section>
                <H2 className="text-2xl font-bold text-teal-400 mb-3">Spiele-Abstimmungen</H2>
            </Section>

            <LastEdited date="16.10.2026"/>
        </>
    );
}