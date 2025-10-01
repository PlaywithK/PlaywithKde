"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

//export const metadata = {
//  title: "Webentwicklung – PlaywithK.de",
//  description: "Meine Reise durch die Webentwicklung",
//};

export default function Webentwicklung() {
  const steps = [
    {
      year: "2015",
      title: "HTML entdeckt",
      desc: `Ich habe angefangen, einfache Webseiten mit reinem HTML zu erstellen. Das war meine allererste Erfahrung mit Programmierung überhaupt. Ich habe viel experimentiert und erste kleine Seiten lokal gespeichert.`,
    },
    {
      year: "2016",
      title: "CSS gelernt",
      desc: `Mit CSS habe ich begonnen, Farben, Layouts und Positionierungen zu verstehen. Ich konnte meine HTML-Seiten jetzt auch optisch ansprechend gestalten und habe erste kleine Projekte gemacht.`,
    },
    {
      year: "2019",
      title: "Erste Website live",
      desc: `Meine erste Webseite ging live – ich habe sie über IONOS gehostet und war stolz, eine eigene Domain und Webseite online zu haben. Das war ein großer Schritt in Richtung professioneller Webentwicklung.`,
    },
    {
      year: "2020",
      title: "WordPress ausprobiert",
      desc: `Ich habe kurzzeitig mit WordPress gearbeitet und Themes angepasst. Obwohl ich WordPress praktisch fand, bin ich letztlich doch zu reinem HTML und CSS zurückgekehrt, weil ich mehr Kontrolle wollte.`,
    },
    {
      year: "2022",
      title: "PlaywithK v1",
      desc: `Die erste Version meiner Webseite PlaywithK.de entstand mit HTML, CSS und JavaScript. Ich habe Features gebaut, die Spaß machen und mich in moderner Webentwicklung weitergebracht haben.`,
    },
    {
      year: "2025",
      title: "Next.js + Tailwind",
      desc: `Ich habe PlaywithK.de komplett neu aufgesetzt: Mit Next.js für schnelle Server-Rendering-Performance, Tailwind CSS für stilvolle und effiziente Gestaltung und modernen Webtechnologien.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = Array.from(container.children);

    const containerRect = container.getBoundingClientRect();
    const containerMiddle = containerRect.top + containerRect.height / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const childMiddle = rect.top + rect.height / 2;
      const distance = Math.abs(containerMiddle - childMiddle);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Webentwicklung</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Hier dokumentiere ich meine persönliche Reise in der Webentwicklung – von ersten Webseiten bis zu modernen Web-Apps.
        </p>
      </section>

      <div className="flex max-w-6xl mx-auto h-[70vh] gap-12">
        <aside className="w-24 sm:w-32 flex-shrink-0 sticky top-16 h-[70vh] flex flex-col items-center justify-center py-12 relative">
          <div className="absolute left-1/2 top-12 bottom-12 w-1 bg-teal-600/50 transform -translate-x-1/2"></div>

          {steps.map((step, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="flex items-center mb-10 relative cursor-pointer select-none"
                style={{ zIndex: isActive ? 10 : 1 }}
              >
                <div
                  className={`rounded-full border-4 border-teal-400 bg-gray-900 transition-all duration-300
                  ${isActive ? "w-6 h-6" : "w-4 h-4 border-teal-600 bg-gray-800"}`}
                ></div>

                <span
                  className={`ml-4 font-semibold transition-all duration-300
                    ${isActive ? "text-teal-400 text-lg" : "text-gray-500 text-sm"}`}
                >
                  {step.year}
                </span>
              </div>
            );
          })}
        </aside>

        <section
          ref={containerRef}
          className="flex-1 overflow-y-scroll snap-y snap-mandatory px-6 sm:px-16 py-12 space-y-20"
          style={{ scrollSnapType: "y mandatory" }}
        >
          {steps.map((step, i) => {
            const isActive = i === activeIndex;
            const isPrev = i === activeIndex - 1;
            const isNext = i === activeIndex + 1;

            return (
              <div
                key={i}
                className={`snap-center flex flex-col items-center justify-center min-h-[80vh] transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : ""}
                  ${isPrev || isNext ? "opacity-50 scale-90" : "opacity-0 scale-75 pointer-events-none"}`}
                style={{ transitionProperty: "opacity, transform" }}
              >
                <div className="max-w-2xl text-center bg-gray-800/70 backdrop-blur-md p-10 rounded-2xl shadow-lg border border-teal-600">
                  <h3 className="text-3xl font-extrabold text-teal-400 mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-lg whitespace-pre-line">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}