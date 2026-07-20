"use client";

import {H2, P, PSmall, Section} from "@/components/design";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";
import {ChangelogTag, ChangelogTagType} from "@/components/changelogTags";

type ChangelogChange = {
    tags: ChangelogTagType[],
    text: string
}

type ChangelogEntry = {
    date: string,
    changes: ChangelogChange[]
}

const entries: ChangelogEntry[] = [
    {
        date: "20.07.2026",
        changes: [
            {tags: ["new"], text: "Added changelog subpage"},
        ],
    },
    {
        date: "19.07.2026",
        changes: [
            {tags: ["new"], text: "Added Game-Development subpage"},
            {tags: ["improved"], text: "Design changed of FAQ"},
        ],
    },
    {
        date: "14.07.2026",
        changes: [
            {tags: ["new"], text: "Added Numble Subpage"},
            {tags: ["fix"], text: "Link to Numble Subpage from the projects page"},
        ],
    },
    {
        date: "13.07.2026",
        changes: [
            {tags: ["new"], text: "Added App-Development subpage"},
        ],
    },
    {
        date: "06.06.2026",
        changes: [
            {tags: ["new"], text: "Translated subpages pwkentertainment, playwithk, imprint and projects"},
        ],
    },
    {
        date: "05.06.2026",
        changes: [
            {tags: ["new"], text: "New translation system"},
        ],
    },
    {
        date: "04.06.2026",
        changes: [
            {tags: ["new"], text: "Changed images in project page"},
            {tags: ["fix"], text: "Links in and to project subpage"},
        ],
    },
];

export default function Changelog() {
    const {t, common, locale} = usePageBasics("changelog");

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <Section className="!max-w-3xl">
                <div className="relative pl-8 sm:pl-10">
                    {/* Vertikale Timeline-Linie */}
                    <div
                        className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-teal-600/30 to-transparent"
                        aria-hidden="true"
                    />

                    <div className="flex flex-col gap-10">
                        {entries.map((entry, idx) => (
                            <div key={idx} className="relative">
                                {/* Punkt auf der Linie */}
                                <div
                                    className="absolute -left-8 sm:-left-10 top-1.5 w-3 h-3 rounded-full bg-teal-400 ring-4 ring-gray-900"
                                    aria-hidden="true"
                                />

                                <PSmall className="mb-2 text-teal-400 font-semibold tracking-wide">
                                    {entry.date}
                                </PSmall>

                                <div className="bg-gray-800 border border-white/10 rounded-xl p-5 shadow-lg flex flex-col gap-4">
                                    {entry.changes.map((change, changeIdx) => (
                                        <div key={changeIdx} className="flex items-start gap-4">
                                            <div className="flex flex-shrink-0 flex-wrap gap-2">
                                                {change.tags.map((tag) => (
                                                    <ChangelogTag key={tag} type={tag}/>
                                                ))}
                                            </div>
                                            <P className="!text-base">{change.text}</P>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <LastEdited date="20.07.2026"/>
        </>
    );
}