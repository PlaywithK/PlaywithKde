"use client";

import Link from "next/link";
import Hero from "@/components/hero";
import {usePageBasics} from "@/components/pageBasics";
import LastEdited from "@/components/lastedited";

export default function DownloadsPage() {
    const {t, common, locale} = usePageBasics("downloads");

    const pages = [
        {
            name: t("wp25.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp25.map.desc"),
        },
        {
            name: t("wp24.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp24.map.desc"),
        },
        {
            name: t("wp23.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp23.map.desc"),
        },
        {
            name: t("wp22.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp22.map.desc"),
        },
        {
            name: t("wp17.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp17.map.desc"),
        },

    ];

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <section className="max-w-2xl mx-auto mb-12 mt-12">
                <ul className="space-y-2">
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link
                                href={page.url}
                                className="flex items-center justify-between bg-gray-800/60 hover:bg-gray-700/60 transition rounded-lg px-3 py-2 text-sm"
                            >
                                <span className="text-teal-400 font-medium">
                                    {page.name}
                                </span>
                                <span className="text-gray-300 text-xs">
                                    {page.description}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <LastEdited date="19.07.2026"/>
        </>
    );
}