"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "Wer betreibt diese Webseite?",
    answer: "Diese Webseite wird ausschließich von PlaywithK betrieben. Bei weiteren Fragen zu diesem Thema, schauen sie im Tab  'Webentwicklung' vorbei.",
  },
  {
    question: "Was ist der Zweck der Webseite?",
    answer: "PlaywithK.de dient dazu, über Projekte von und mit PlaywithK zu informieren, sowie zu erkunden und neues zu entdecken!",
  },
  {
    question: "Ist diese Seite privat oder kommerziell?",
    answer: "Die Wwebseite wird ausschließlich privat verwendet und hat keinerlei kommerziellen Nutzen.",
  },
  {
    question: "Darf ich Inhalte von der Webseite weiterverwenden?",
    answer: "Alle Inhalte von PlaywithK.de dürfen, mit einer Verlinkung auf die Webseite, frei verwendet werden.",
  },
  {
    question: "Wie oft werden Inhalte aktualisiert?",
    answer: "Die Informationen der Webseite können veraltet sein, da diese in meiner Freizeit entsteht. Das genau letzte Bearbeitungsdatum kann auf der jeweiligen Seite ganz unten angesehen werden.",
  },
];

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
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
    </main>
  );
}