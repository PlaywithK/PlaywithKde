"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Hero from "@/components/hero";
import LastEdited from "@/components/lastedited";
import { useParams } from "next/navigation";

export default function FAQ() {
  const t = useTranslations("faq");
  const params = useParams();
  const locale = params.locale;

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqItems = t.raw("items") as {
    question: string;
    answer: string;
  }[];

  useEffect(() => {
    document.title = locale === "de"
      ? "FAQ - PlaywithK.de"
      : "FAQ - PlaywithK.de";
  }, [locale]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Hero title={t("title")} subtitle={t("desc")} />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={index} className="rounded-lg shadow-md">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg border border-white border-opacity-20 bg-gray-800"
                aria-expanded={isOpen}
              >
                <span className="text-lg sm:text-xl font-semibold">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-teal-400 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                  } px-6 pt-4 pb-6 bg-gray-700 text-gray-100 rounded-b-lg`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <LastEdited date="05.06.2026" />
    </>
  );
}