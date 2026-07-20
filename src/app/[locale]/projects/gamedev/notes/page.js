"use client";

import {useEffect, useState} from "react";
import {H2, P, Section} from "@/components/design";
import {Markdown} from "@/components/markdown-content";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {useDocumentTitle} from "@/components/documentTitle";
import {usePageBasics} from "@/components/pageBasics";

export default function GameDevNotes() {
    const {t, common, locale} = usePageBasics("gamedevnotes");
    const [content, setContent] = useState("");

    useDocumentTitle(t("pageTitle"));

    useEffect(() => {
        fetch(`/markdown/gamedev_notes.${locale}.md`)
            .then((res) => res.text())
            .then(setContent);
    }, [locale]);

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <Section>
                <H2 className="text-2xl font-boldmb-3">{t("disclaimer.title")}</H2>
                <P>{t("disclaimer.desc")}</P>
            </Section>

            <Section width="max-w-4xl">
                {content ? <Markdown content={content}/> : <p className="text-gray-500">Lädt...</p>}
            </Section>

            <LastEdited date="19.07.2026"/>
        </>
    );
}