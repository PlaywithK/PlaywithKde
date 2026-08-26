import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";

const APP_DIR = path.join(process.cwd(), "src", "app", "[locale]");
const IGNORE = new Set(["links", "api"]);
const KEY_OVERRIDES = { contact: "kontakt", imprint: "impressum" };

function collectPages(dir = APP_DIR, segments = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let pages = [];

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        if (entry.name.startsWith("_") || entry.name.startsWith(".") || entry.name.startsWith("[")) continue;
        if (IGNORE.has(entry.name)) continue;

        const childDir = path.join(dir, entry.name);
        const childSegments = [...segments, entry.name];
        const hasPage = ["page.js", "page.jsx", "page.tsx"].some((f) =>
            fs.existsSync(path.join(childDir, f))
        );

        if (hasPage) {
            pages.push({
                url: "/" + childSegments.join("/"),
                key: KEY_OVERRIDES[entry.name] ?? entry.name,
            });
        }
        pages = pages.concat(collectPages(childDir, childSegments));
    }
    return pages;
}

export default async function LinksPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "links" });
    const pages = collectPages();

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")} />
            <section className="max-w-2xl mx-auto mb-12 mt-12">
                <ul className="space-y-2">
                    {pages.map((page) => (
                        <li key={page.url}>
                            <Link
                                href={`/${locale}${page.url}`}
                                className="flex items-center justify-between bg-gray-800/60 hover:bg-gray-700/60 transition rounded-lg px-3 py-2 text-sm"
                            >
                                <span className="text-teal-400 font-medium">{t(page.key)}</span>
                                <span className="text-gray-300 text-xs">{t(`${page.key}.desc`)}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <LastEdited date="26.08.2026" />
        </>
    );
}