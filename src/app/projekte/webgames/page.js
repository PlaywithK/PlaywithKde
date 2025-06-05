import Head from 'next/head';
import Link from 'next/link';

export default function WebgamesOverview() {
  return (
    <>
      <Head>
        <title>Web-Spiele – PlaywithK.de</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
        <section className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-teal-400 text-center">Web-Spiele</h1>

          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-center">
            Hier findest du eine kleine Sammlung an HTML-Spielen, die ich aus Spaß und zum Lernen entwickelt habe. Klick dich durch und probier sie aus!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PWK Orakel",
                description: "Stelle dem PWK Orakel eine Frage und erhalte die ultimative Antwort!",
                link: "/projekte/webgames/pwkorakel",
              },
              {
                title: "High Card",
                description: "High Stakes ist ein Kartenspiel in dem es das Ziel ist, so nah wie möglich an die Zahl 21 heranzukommen, ohne diese zu überschreiten.",
                link: "/projekte/webgames/highcard",
              },
              {
                title: "Lyric Quiz",
                description: "Das YKKE Lyric-Quiz ist ein Spiel in dem du eine zufällige Line aus einem Song von Yung Kafa & Kücük Efendi angezeigt bekommst und du kannst versuchen zu erraten, aus welchem Lied diese stammt! Viel Erfolg!",
                link: "/projekte/webgames/lyricquiz",
              },
            ].map(({ title, description, link }, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-teal-400 text-center">{title}</h3>
                <div className="flex-1 flex items-center justify-center text-center">
                  <p className="text-gray-300 text-sm">{description}</p>
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={link}
                    className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
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
    </>
  );
}