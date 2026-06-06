"use client";

import { useTranslations } from "next-intl";

export default function LastEdited({ date }: { date: string }) {
    const t = useTranslations("common");

    return (
        <div className="mt-12 text-right text-sm text-gray-500">
            {t ? `${t("meta.lastUpdated")} ${date}` : `Last Edited: ${date}`}
        </div>
    );
}