export const metadata = {
  title: "Startseite – PlaywithK",
  description: "Startseite",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-[60vh] text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-teal-400 leading-tight">
          Willkommen auf PlaywithK.de
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
          Video Creator · Gamer · Developer
        </p>
      </section>

      {/* Projekte */}
      <section id="projects" className="px-4 sm:px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-teal-400 text-center">Meine Projekte</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web-Spiele",
              description:
                "Hier findest du einige kleine Web-Spiele, welche ich als kleinen Test mit HTML, CSS und Javascript erstellt habe. Viel Spaß beim Spielen!",
              link: "/projekte/webgames",
            },
            {
              title: "App-Entwicklung",
              description:
                "Es hat mich schon immer gestört 20 Apps für jede einzelne Funktion auf meinem Handy zu haben. Also entschloss ich mich irgendwann meine eigene App zu kreieren, bei der alle Funktionen an einem Ort gebündelt sind. Chorez war geboren.",
              link: "/projekte/apps",
            },
            {
              title: "Spieleentwicklung",
              description:
                "Schon seit Jahren wollte ich eigene Spiele entwickeln und die Ideen in meinem Kopf sprudeln quasi über. Hier erfährst du alles zu meiner Dev-Journey und meinen momentanen Spiele-Projekten.",
              link: "/projekte/games",
            },
          ].map(({ title, description, link }, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-400 text-center">{title}</h3>

              <div className="flex-1 flex items-center justify-center text-center">
                <p className="text-gray-300 text-sm sm:text-base">{description}</p>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={link}
                  className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/projekte"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
          >
            Zu allen Projekten
          </a>
        </div>
      </section>
    </main>
  );
}