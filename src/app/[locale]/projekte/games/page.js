import Link from "next/link";

export const metadata = {
  title: "Game-Entwicklung – PlaywithK",
  description: "Meine Reise durch die Game-Entwicklung",
};

export default function GameEntwicklung() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-400">Game-Entwicklung</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Hier dokumentiere ich meine Reise in der Spieleentwicklung – von ersten Prototypen bis hin zu meinem aktuellen Hauptprojekt.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-16">

        {/* Projekt: VoxPaint */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">🎨 VoxPaint</h2>
          <p className="text-gray-200 mb-4">
            VoxPaint ist ein entspanntes Voxel-Malspiel, inspiriert von „Malen nach Zahlen“. Ziel ist es, 3D-Modelle aus Voxeln farblich korrekt zu gestalten – meditativ und kreativ.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Unity</span>
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Voxel</span>
          </div>
        </div>

        {/* Projekt: VoxGarden */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">🌱 VoxGarden</h2>
          <p className="text-gray-200 mb-4">
            VoxGarden ist ein kleines Wohlfühlspiel im Stil eines „Zen Gardens“ – inspiriert vom Garten-Modus in Plants vs. Zombies. Der Fokus liegt auf Entspannung, Pflege und kleinen Voxel-Details.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Unity</span>
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Casual</span>
          </div>
        </div>

        {/* Projekt: Adventure of Elysia */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">⚔️ Adventure of Elysia</h2>
          <p className="text-gray-200 mb-4">
            Mein Hauptprojekt: Ein Voxel-basiertes Top-Down-RPG mit Crafting, Kämpfen, Erkundung und einer eigenen Welt. Adventure of Elysia verbindet klassische Rollenspielmechaniken mit charmantem, pixeligem Voxel-Stil.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Unity</span>
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Voxel</span>
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">RPG</span>
          </div>
        </div>

        {/* Making Of */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Making Of: Meine Game-Dev-Reise</h2>
          <p className="text-gray-200 mb-4">
            Ich habe verschiedene Game Engines ausprobiert – darunter <span className="text-indigo-400">Unity</span>, <span className="text-indigo-400">Unreal Engine 4 & 5</span> und <span className="text-indigo-400">Godot</span>.
            Am meisten hat mich aber Unity überzeugt – vor allem wegen der Flexibilität und der großen Community.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>Erste Experimente mit Unreal (Blueprints) & Godot (GDScript)</li>
            <li>Umstieg auf Unity für bessere Iterationen und Tooling</li>
            <li>Voxel-Workflows mit MagicaVoxel & Unity Custom Tools</li>
            <li>Top-Down-Kamerasysteme, Navigation, NPC-Systeme in Adventure of Elysia</li>
            <li>Lernprozess rund um Shader, Lighting & Performance-Optimierung</li>
            <li>Ziel: Veröffentlichung auf Itch.io und ggf. Steam</li>
          </ul>

          <p className="text-gray-400">
            Ich sehe Game-Development als eine kreative Spielwiese – jede Idee bringt neue technische Herausforderungen mit sich, die ich mit Begeisterung annehme.
          </p>
        </div>
      </section>
    </main>
  );
}