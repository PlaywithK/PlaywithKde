"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "Was ist Lorem Ipsum?",
    answer: "Lorem Ipsum ist ein Platzhaltertext in der Druck- und Satzindustrie.",
  },
  {
    question: "Warum wird es verwendet?",
    answer: "Es wird verwendet, um eine visuelle Vorschau eines Designs zu ermöglichen.",
  },
  {
    question: "Woher kommt es?",
    answer: "Es stammt aus einem lateinischen Text von Cicero.",
  },
];

export default function FAQ() {
  // Zustand: Array mit Indizes der geöffneten Fragen
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      // Wenn schon offen: schließen
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // Wenn zu, dann öffnen
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 sm:px-8 lg:px-12 py-12">
      <h1 className="text-5xl font-extrabold mb-12 text-teal-400 text-center">FAQ</h1>

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
                  className={`w-6 h-6 text-teal-400 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
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
                className={`px-6 pb-6 text-gray-300 text-base sm:text-lg overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
                style={{ transitionProperty: "max-height" }}
              >
                {isOpen && <p>{answer}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}