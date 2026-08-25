"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import { usePageBasics } from "@/components/pageBasics";
import { Section } from "@/components/design";

export default function ReportPage() {
    const { t } = usePageBasics("forum");
    const [status, setStatus] = useState("idle");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("sending");
        const form = new FormData(e.currentTarget);

        const res = await fetch("/api/report", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: form.get("title"),
                category: form.get("category"),
                description: form.get("description"),
            }),
        });

        setStatus(res.ok ? "sent" : "error");
        if (res.ok) e.currentTarget.reset();
    }

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")} />

            <Section>
                <div
                    className="relative max-w-xl mx-auto rounded-3xl p-7
          bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent
          border border-white/10 overflow-hidden"
                >
                    <div
                        className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20
            bg-gradient-to-br from-teal-400 to-transparent"
                    />

                    {status === "sent" ? (
                        <p className="relative text-teal-300">{t("success")}</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative space-y-4">
                            <div>
                                <label className="text-xs text-gray-400 mb-1 block">{t("form.titleLabel")}</label>
                                <input
                                    name="title"
                                    required
                                    maxLength={200}
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5
                  text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-400/50"
                                    placeholder={t("form.titlePlaceholder")}
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 mb-1 block">{t("form.categoryLabel")}</label>
                                <select
                                    name="category"
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5
                  text-sm text-white focus:outline-none focus:border-teal-400/50"
                                >
                                    <option value="Bug">{t("form.categories.bug")}</option>
                                    <option value="Cheating">{t("form.categories.cheating")}</option>
                                    <option value="Other">{t("form.categories.other")}</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-gray-400 mb-1 block">{t("form.descLabel")}</label>
                                <textarea
                                    name="description"
                                    required
                                    rows={5}
                                    maxLength={2000}
                                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5
                  text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-400/50 resize-none"
                                    placeholder={t("form.descPlaceholder")}
                                />
                            </div>

                            <button
                                disabled={status === "sending"}
                                className="w-full rounded-xl bg-teal-400/20 border border-teal-400/50 text-teal-300
                py-2.5 text-sm font-medium hover:bg-teal-400/30 transition-colors disabled:opacity-50"
                            >
                                {status === "sending" ? t("form.sending") : t("form.submit")}
                            </button>

                            {status === "error" && (
                                <p className="text-red-400 text-sm">{t("form.error")}</p>
                            )}

                            <p className="text-xs text-gray-600 pt-2">{t("form.anonymousNote")}</p>
                        </form>
                    )}
                </div>
            </Section>

            <LastEdited date="16.08.2026" />
        </>
    );
}