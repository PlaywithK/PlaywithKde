import Link from "next/link";

export const metadata = {
  title: "App-Entwicklung – PlaywithK.de",
  description: "Meine Reise durch die App-Entwicklung",
};

export default function AppEntwicklung() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">App-Entwicklung</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Hier dokumentiere ich meine persönliche Reise in der App-Entwicklung – von der ersten Idee bis hin zur fertigen App.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-16">
        {/* Projekt: Chorez */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Chorez</h2>
          <p className="text-gray-200 mb-4">
            Chorez ist mein erstes App-Projekt. Ich habe damit angefangen, weil ich eine App wollte, die alles vereint:
            To-Do-Liste, Einkaufslisten, Termine und mehr. Statt fünf verschiedene Apps zu nutzen, wollte ich meine eigene zentrale Lösung bauen.
          </p>
          <p className="mb-2">
            Entwickelt wird Chorez mit <span className="text-teal-400">Flutter</span> und <span className="text-teal-400">Dart</span>.
            Ich arbeite hauptsächlich mit <span className="text-teal-400">VSCode</span>, aber auch mit <span className="text-teal-400">Android Studio</span> – je nachdem, was gerade besser passt.
          </p>
          <p className="mb-4">
            Das Ziel: eine schöne, intuitive App für den Alltag, mit Fokus auf Übersichtlichkeit und Nützlichkeit.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Flutter</span>
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Dart</span>
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Chorez</span>
          </div>
        </div>

        {/* Sektion: Making Of */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Making Of</h2>

          <p className="text-gray-200 mb-4">
            Die Entwicklung von Chorez war (und ist) für mich ein spannender Lernprozess. Hier dokumentiere ich die Tools, Frameworks und Erfahrungen, die mich begleitet haben.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>
              <strong className="text-teal-400">Flutter & Dart</strong>: Cross-Plattform Framework, das mir erlaubt, eine App für Android und iOS gleichzeitig zu bauen.
            </li>
            <li>
              <strong className="text-teal-400">VSCode</strong>: Mein bevorzugter Editor für schnelle Iterationen, vor allem wegen der Flutter-Extensions und Performance.
            </li>
            <li>
              <strong className="text-teal-400">Android Studio</strong>: Nutze ich für UI-Previews, Emulatoren und manchmal fürs Debugging.
            </li>
            <li>
              <strong className="text-teal-400">State Management</strong>: Ich experimentiere aktuell mit verschiedenen Ansätzen wie <code>Provider</code> und <code>Riverpod</code>.
            </li>
            <li>
              <strong className="text-teal-400">Testing</strong>: Erste Gehversuche mit Widget- und Integration-Tests.
            </li>
            <li>
              <strong className="text-teal-400">Deployment</strong>: Ziel ist es, die App irgendwann im Play Store und später vielleicht auch im App Store zu veröffentlichen.
            </li>
          </ul>

          <p className="text-gray-400">
            Ich lerne mit jedem Commit etwas Neues – sei es im UI-Design, bei der Architektur oder im Umgang mit Nutzer-Feedback. Die Reise geht weiter!
          </p>
        </div>

      </section>
    </main>
  );
}
