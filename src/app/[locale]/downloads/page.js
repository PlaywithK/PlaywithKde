"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";



export default function DownloadsPage() {
    const t = useTranslations("Downloads");
    const params = useParams();
    const locale = params.locale;

    useEffect(() => {
        document.title =
            locale === "de"
                ? "Alle Downloads - PlaywithK.de"
                : "All Downloads - PlaywithK.de";
    }, [locale]);

    const pages = [
        {
            name: t("wp24.map"),
            url: `/downloads/chorez.zip`,
            description: t("wp24.map.desc"),
        },
    ];

    return (
        <>
            <Hero title={t("title")} subtitle={t("subtitle")} />

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

            <LastEdited date="31.05.2026" />
        </>
    );
}