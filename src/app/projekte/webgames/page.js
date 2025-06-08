import Link from 'next/link';

export const metadata = {
  title: "Web-Spiele – PlaywithK",
  description: "Web-Spiele",
};


export default function WebgamesOverview() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">

      <section className="relative text-center py-24 px-6 sm:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden rounded-xl shadow-inner">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-6 drop-shadow">
            🎮 Willkommen bei den Webgames!
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Lust auf ein Mini-Game? Hier findest du <span className="text-teal-300 font-medium">kleine, kreative Browser-Spiele</span>,
            die du direkt online spielen kannst – zum Spaß, Ausprobieren oder einfach zwischendurch.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-24"></section>

      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "PWK Orakel",
              description: "Stelle dem PWK Orakel eine Frage und erhalte die ultimative Antwort!",
              link: "/projekte/webgames/pwkorakel",
              color: "from-teal-500 to-purple-500",
            },
            {
              title: "High Stakes",
              description: "High Stakes ist ein Kartenspiel mit dem Ziel, so nah wie möglich an 21 zu kommen.",
              link: "/projekte/webgames/highcard",
              color: "from-pink-500 to-yellow-500",
            },
            {
              title: "Lyric Quiz",
              description: "Errate, aus welchem Song eine Line stammt. Teste dein YKKE-Wissen!",
              link: "/projekte/webgames/lyricquiz",
              color: "from-indigo-500 to-cyan-500",
            },
          ].map(({ title, description, link, color }, idx) => (
            <div
              key={idx}
              className={`
        transform hover:-translate-y-1 rotate-[-2deg] hover:rotate-[-1deg]
        bg-gradient-to-br ${color} rounded-3xl p-6 text-white shadow-lg
        transition-all duration-300 ease-out
      `}
            >
              <h3 className="text-2xl font-bold mb-3 text-center drop-shadow-sm">{title}</h3>
              <p className="text-sm text-center opacity-90 mb-6">{description}</p>
              <div className="text-center">
                <Link
                  href={link}
                  className="inline-block bg-white text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  Jetzt spielen
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-16 text-center">
          <Link
            href="/projekte"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
          >
            Zurück zu allen Projekten
          </Link>
        </div>
      </section>
    </main>
  );
}