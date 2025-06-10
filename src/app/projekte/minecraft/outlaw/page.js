import Link from 'next/link';

export const metadata = {
  title: "Minecraft Outlaw – Western-Projekt – PlaywithK",
  description: "Minecraft-Projekt im Westernstil mit Atmosphäre und Details.",
};

export default function Outlaw() {
  return (
    <main className="relative min-h-screen text-yellow-100 font-western">
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed brightness-75 sepia"
        style={{ backgroundImage: "url('/minecraft/outlaw/Outlaw_Front.png')" }}
      />

      {/* Hauptinhalt */}
      <section className="relative z-10 max-w-4xl mx-auto bg-yellow-900/70 border border-yellow-700 rounded-xl shadow-xl px-6 py-12 mt-16 backdrop-blur-sm">
        {/* Logo und Titel */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/minecraft/outlaw/NewOutlawLogo.png"
            alt="Minecraft Outlaw Logo"
            className="w-20 h-20 object-contain"
          />
          <h1 className="text-5xl font-bold text-yellow-200 drop-shadow">
            Minecraft Outlaw
          </h1>
        </div>

        {/* Intro */}
        <p className="mb-6 text-yellow-100 leading-relaxed">
          Willkommen im Wilden Westen! In diesem Minecraft-Projekt habe ich eine Westernstadt mit rustikalem Flair,
          staubigen Wegen und stilechten Gebäuden erschaffen – perfekt für Outlaws, Sheriffs und Cowboys.
        </p>

        <img
          src="/minecraft/outlaw/Outlaw_Front.png"
          alt="Minecraft Outlaw Bild"
          className="rounded-lg shadow-lg border-2 border-yellow-600 mb-8"
        />

        {/* Highlights */}
        <h2 className="text-2xl font-bold mb-4 text-yellow-200">Highlights & Features</h2>
        <ul className="list-disc list-inside text-yellow-100 mb-8 space-y-1">
          <li>Westernstadt mit Saloon, Sheriffbüro & Bank</li>
          <li>Kakteen, Präriegras & trockene Flussbetten</li>
          <li>Detailreiche Innenräume im Cowboy-Stil</li>
          <li>Versteckte Gänge und geheime Verstecke</li>
        </ul>

        {/* Neue Sektion: Outlaw Remaster */}
        <h2 className="text-3xl font-bold mb-6 mt-12 text-yellow-300 drop-shadow">Outlaw Remaster</h2>

        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-yellow-100 mb-4 leading-relaxed">
              Mit dem Remaster habe ich die ursprüngliche Westernstadt neu aufgelegt: mit verbesserten Texturen, neuen Baumechaniken und einer stimmungsvollen Lichtführung.
              Ziel war es, die Outlaw-Welt noch immersiver zu gestalten.
            </p>
            <ul className="list-disc list-inside text-yellow-100 space-y-1">
              <li>Neuer Bahnhof mit Lore-System</li>
              <li>Tag-/Nacht-Zyklus mit Redstone-Licht</li>
              <li>Neue Quests & versteckte Secrets</li>
            </ul>
          </div>

          <img
            src="/minecraft/outlaw/Outlaw_Remaster_01.png"
            alt="Remaster Vorschau"
            className="rounded-lg border-2 border-yellow-600 shadow-lg"
          />
        </div>

        {/* Weitere Info-Sektion */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/minecraft/outlaw/Outlaw_Remaster_02.png"
            alt="Remaster Innenstadt"
            className="rounded-lg border-2 border-yellow-600 shadow-lg"
          />

          <div>
            <h3 className="text-xl font-bold text-yellow-200 mb-2">Atmosphäre & Sounddesign</h3>
            <p className="text-yellow-100 leading-relaxed">
              Um das Remaster authentischer zu machen, habe ich Ambientsounds hinzugefügt – von Windgeräuschen bis zu knarrenden Türen. Die Stadt lebt durch Klang.
            </p>
          </div>
        </div>

        {/* Zurück-Link */}
        <Link
          href="/projekte"
          className="inline-block bg-yellow-700 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full border-2 border-yellow-900 shadow transition-all"
        >
          Zurück zur Projektübersicht
        </Link>
      </section>
    </main>
  );
}