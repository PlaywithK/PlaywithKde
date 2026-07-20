"use client";

import {useState, useMemo, useId} from "react";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import {usePageBasics} from "@/components/pageBasics";

export default function FAQ() {
    const {t, common, locale} = usePageBasics("faq");

    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [query, setQuery] = useState("");
    const baseId = useId();

    const faqItems = t.raw("items") as {
        question: string;
        answer: string;
    }[];

    const filteredItems = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return faqItems.map((item, index) => ({item, index}));
        return faqItems
            .map((item, index) => ({item, index}))
            .filter(
                ({item}) =>
                    item.question.toLowerCase().includes(q) ||
                    item.answer.toLowerCase().includes(q)
            );
    }, [faqItems, query]);

    const toggleIndex = (index: number) => {
        setOpenIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <>
            <Hero title={t("title")} subtitle={t("desc")}/>

            <div className="max-w-3xl mx-auto px-4 sm:px-0">
                {/* Suche */}
                <div className="relative mb-8">
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="7" strokeLinecap="round"/>
                        <path strokeLinecap="round" d="M21 21l-4.35-4.35"/>
                    </svg>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t("searchPlaceholder")}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-800 border border-white/10 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-shadow"
                    />
                </div>

                {/* Liste */}
                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-400 py-12">
                        {t("noResults")}
                    </p>
                ) : (
                    <div
                        className="flex flex-col divide-y divide-white/10 rounded-xl border border-white/10 bg-gray-800 overflow-hidden">
                        {filteredItems.map(({item, index}) => {
                            const isOpen = openIndexes.includes(index);
                            const panelId = `${baseId}-panel-${index}`;
                            const buttonId = `${baseId}-button-${index}`;

                            return (
                                <div
                                    key={index}
                                    className={`relative transition-colors ${
                                        isOpen ? "bg-gray-750 bg-white/[0.03]" : ""
                                    }`}
                                >
                                    {/* Akzentrand links, nur wenn offen */}
                                    <span
                                        className={`absolute left-0 top-0 h-full w-[3px] bg-teal-400 transition-transform origin-top ${
                                            isOpen ? "scale-y-100" : "scale-y-0"
                                        }`}
                                        aria-hidden="true"
                                    />

                                    <button
                                        id={buttonId}
                                        onClick={() => toggleIndex(index)}
                                        className="w-full flex justify-between items-center gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-inset"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                    >
                    <span className="text-base sm:text-lg font-medium text-gray-100">
                      {item.question}
                    </span>

                                        <span
                                            className="relative flex-shrink-0 w-6 h-6 text-teal-400"
                                            aria-hidden="true"
                                        >
                      <span
                          className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                              isOpen ? "rotate-45" : "rotate-0"
                          }`}
                      >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" d="M12 4v16M4 12h16"/>
                        </svg>
                      </span>
                    </span>
                                    </button>

                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className="grid transition-[grid-template-rows] duration-300 ease-out"
                                        style={{gridTemplateRows: isOpen ? "1fr" : "0fr"}}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="px-6 pb-6 text-gray-300 leading-relaxed">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <LastEdited date="20.07.2026"/>
        </>
    );
}