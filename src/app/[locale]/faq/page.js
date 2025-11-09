"use client";

import Hero from "./../components/hero";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqItems = [
    {
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      question: t("question4"),
      answer: t("answer4"),
    },
    {
      question: t("question5"),
      answer: t("answer5"),
    },
  ];

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
      <Hero title={t("title")} subtitle={t("desc")} />

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map(({ question, answer }, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <div key={index} className="rounded-lg shadow-md">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg border border-white border-opacity-20 bg-gray-800"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="text-lg sm:text-xl font-semibold">{question}</span>
                <svg
                  className={`w-6 h-6 text-teal-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                  } px-6 pt-4 pb-6 bg-gray-700 text-gray-100 text-base sm:text-lg leading-relaxed rounded-b-lg`}
              >
                <p>{answer}</p>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}