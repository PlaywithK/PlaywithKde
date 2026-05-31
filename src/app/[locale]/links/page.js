"use client";


import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";

export default function LinksPage() {
    const t = useTranslations("Links");
    const params = useParams();
    const locale = params.locale;

    useEffect(() => {
        document.title =
            locale === "de"
                ? "Alle Links - PlaywithK.de"
                : "All Links - PlaywithK.de";
    }, [locale]);

    const pages = [
        {
            name: t("home"),
            url: `/${locale}`,
            description: t("home.desc"),
        },
        {
            name: t("faq"),
            url: `/${locale}/faq`,
            description: t("faq.desc"),
        },
        {
            name: t("impressum"),
            url: `/${locale}/impressum`,
            description: t("impressum.desc"),
        },
        {
            name: t("kontakt"),
            url: `/${locale}/kontakt`,
            description: t("kontakt.desc"),
        },
        {
            name: t("playwithk"),
            url: `/${locale}/playwithk`,
            description: t("playwithk.desc"),
        },
        {
            name: t("projekte"),
            url: `/${locale}/projects`,
            description: t("projekte.desc"),
        },
        {
            name: t("apps"),
            url: `/${locale}/projects/apps`,
            description: t("apps.desc"),
        },
        {
            name: t("chorez"),
            url: `/${locale}/projects/apps/chorez`,
            description: t("chorez.desc"),
        },
        {
            name: t("games"),
            url: `/${locale}/projects/games`,
            description: t("games.desc"),
        },
        {
            name: t("web"),
            url: `/${locale}/projects/web`,
            description: t("web.desc"),
        },
        {
            name: t("webgames"),
            url: `/${locale}/projects/webgames`,
            description: t("webgames.desc"),
        },
        {
            name: t("minecraft"),
            url: `/${locale}/projects/minecraft`,
            description: t("minecraft.desc"),
        },
        {
            name: t("outlaw"),
            url: `/${locale}/projects/minecraft/outlaw`,
            description: t("outlaw.desc"),
        },
        {
            name: t("pwkde"),
            url: `/${locale}/projects/minecraft/pwkde`,
            description: t("pwkde.desc"),
        },
        {
            name: t("winterprojekt"),
            url: `/${locale}/projects/minecraft/winterprojekt`,
            description: t("winterprojekt.desc"),
        },
        {
            name: t("wp2017"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2017`,
            description: t("wp2017.desc"),
        },
        {
            name: t("wp2020"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2020`,
            description: t("wp2020.desc"),
        },
        {
            name: t("wp2021"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2021`,
            description: t("wp2021.desc"),
        },
        {
            name: t("wp2022"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2022`,
            description: t("wp2022.desc"),
        },
        {
            name: t("wp2023"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2023`,
            description: t("wp2023.desc"),
        },
        {
            name: t("wp2024"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2024`,
            description: t("wp2024.desc"),
        },
        {
            name: t("wp2025"),
            url: `/${locale}/projects/minecraft/winterprojekt/wp2025`,
            description: t("wp2025.desc"),
        },
                {
            name: t("pwkentm"),
            url: `/${locale}/pwkentertainment`,
            description: t("pwkentm.desc"),
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
                                <span className="text-teal-400 font-medium">{page.name}</span>
                                <span className="text-gray-300 text-xs">{page.description}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <LastEdited date="31.05.2026" />
        </>
    );
}

