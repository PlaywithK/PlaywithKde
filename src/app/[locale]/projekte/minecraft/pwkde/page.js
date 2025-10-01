import Link from 'next/link';

export const metadata = {
  title: "Winterprojekt – Minecraft Projekte – PlaywithK",
  description: "Details zum Winterprojekt Minecraft Bau.",
};

export default function PWKde() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">PlaywithK.de Netzwerk</h1>
        <p className="text-gray-300 mb-8">
          Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
          Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
        </p>

        <img
          src="/Winterprojekt_Front.png"
          alt="Winterprojekt Minecraft Bild"
          className="rounded-xl shadow-lg border border-white border-opacity-10 mb-8"
        />

        <h2 className="text-2xl font-bold text-teal-400 mb-4">Features & Highlights</h2>
        <ul className="list-disc list-inside text-gray-300 mb-8">
          <li>Detailreiche Schneelandschaften und Eishöhlen.</li>
          <li>Gemütliche Holzhäuser mit Kamin und Dekorationen.</li>
          <li>Ein kleiner Weihnachtsmarkt mit Ständen und Lichtern.</li>
          <li>Komplette Beleuchtung und Atmosphäre mit Redstone-Mechanismen.</li>
        </ul>

        <Link href="/projekte" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
          Zurück zur Projektübersicht
        </Link>
      </section>
    </main>
  );
}