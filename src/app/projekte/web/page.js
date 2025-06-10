export const metadata = {
  title: "Webentwicklung – PlaywithK.de",
  description: "Meine Reise durch die Webentwicklung",
};

export default function Webentwicklung() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Webentwicklung</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Hier dokumentiere ich meine persönliche Reise in der Webentwicklung – von ersten Webseiten bis zu modernen Web-Apps.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-16">
        {/* Sektion: Making Of */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">Making Of</h2>

          <p className="text-gray-200 mb-4">
            Die Entwicklung von Taskify war (und ist) eine spannende Reise. Hier teile ich die Tools, Frameworks und Learnings, die mich geprägt haben.
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>
              <strong className="text-teal-400">React & Next.js</strong>: Für schnelles und modernes Frontend-Development mit SSR und Routing.
            </li>
            <li>
              <strong className="text-teal-400">Tailwind CSS</strong>: Utility-first CSS Framework, das mein Styling radikal vereinfacht hat.
            </li>
            <li>
              <strong className="text-teal-400">VSCode</strong>: Mein Haupteditor mit vielen hilfreichen Extensions für Webdev.
            </li>
            <li>
              <strong className="text-teal-400">State Management</strong>: Ich nutze <code>Zustand</code> und <code>React Context</code> je nach Anwendungsfall.
            </li>
            <li>
              <strong className="text-teal-400">Testing</strong>: Erste Schritte mit <code>Jest</code> und <code>React Testing Library</code>.
            </li>
            <li>
              <strong className="text-teal-400">Deployment</strong>: Gehostet wird Taskify über <code>Vercel</code> – einfach und schnell.
            </li>
          </ul>

          <p className="text-gray-400">
            Ich lerne mit jedem Feature, das ich baue – sei es in Performance, UX oder Architektur. Webentwicklung bleibt für mich ein ständiger Lernprozess.
          </p>
        </div>
      </section>
    </main>
  );
}