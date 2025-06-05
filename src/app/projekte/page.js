import Head from 'next/head';
import Link from 'next/link';

export default function Projekte() {
  return (
    <>
      <Head>
        <title>Projekte – PlaywithK.de</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Meine Projekte</h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Hier findest du eine Sammlung meiner bisherigen Projekte – von kleinen Web-Spielen über App-Experimente bis hin zu größeren Game-Dev-Ideen.
          </p>
        </section>

        <div className="space-y-20 max-w-5xl mx-auto">
          {/* Web-Spiele */}
          <section className="bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-10 p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">🎮</span>
                <h2 className="text-2xl font-bold text-teal-400">Web-Spiele</h2>
              </div>
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                Um HTML, CSS und JavaScript besser zu lernen, habe ich kleine Spiele entwickelt, wie das <strong>PWK Orakel</strong>, <strong>Kartenspiele</strong> oder ein <strong>Lyric-Quiz</strong>.
                Sie sind simpel, machen aber Spaß – perfekt für zwischendurch!
              </p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">PWK Orakel</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Lyric-Quiz</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">HighCard</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Mini Games</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">HTML/CSS/JS</span>
              </div>

              <Link
                href="/projekte/webgames"
                className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
              >
                Zu den Web-Spielen
              </Link>
            </div>
          </section>


          {/* App-Entwicklung */}
          <section className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
            <img src="/img/app-preview.png" alt="Chorez App Vorschau" className="rounded-xl shadow-lg border border-white border-opacity-10" />
            <div>
              <h2 className="text-2xl font-bold text-teal-400 mb-4">App-Entwicklung</h2>
              <p className="text-gray-300 mb-6">
                Mit <strong>Chorez</strong> wollte ich eine All-in-One-App schaffen, die Aufgaben, Notizen, Timer und mehr in einem Tool vereint.
                Warum zehn Apps, wenn es auch eine gut durchdachte geben kann?
              </p>
              <Link
                href="/projekte/app-entwicklung"
                className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
              >
                Mehr zur App-Entwicklung
              </Link>
            </div>
          </section>

          {/* Chorez-App */}
          <section className="grid md:grid-cols-2 gap-10 items-center bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-10 p-6">
            <img
              src="/preview/chorez.png"
              alt="Chorez App"
              className="rounded-xl shadow border border-white/10"
            />
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-3xl">📱</span>
                <h2 className="text-2xl font-bold text-teal-400">Chorez App</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Eine App, die verschiedene Alltagsfunktionen bündelt. Entwickelt mit dem Ziel, Klarheit und Einfachheit in deinen Alltag zu bringen.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">All-in-One</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">To-Dos</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Einkaufslisten</span>
                <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Termine</span>
              </div>
              <Link
                href="/projekte/app-entwicklung"
                className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all"
              >
                Mehr zu Chorez
              </Link>
            </div>
          </section>



          {/* Spieleentwicklung */}
          <section className="grid md:grid-cols-2 gap-10 items-center">
            <img src="/img/gamedev-preview.png" alt="Spieleentwicklung Vorschau" className="rounded-xl shadow-lg border border-white border-opacity-10" />
            <div>
              <h2 className="text-2xl font-bold text-teal-400 mb-4">Spieleentwicklung</h2>
              <p className="text-gray-300 mb-6">
                Von RPG-Ideen über Game-Design-Skizzen bis zu realen Prototypen: Die Spieleentwicklung ist meine kreative Spielwiese. Hier erfährst du alles über meine Journey und aktuelle Projekte.
              </p>
              <Link href="/projekte/spieleentwicklung" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
                Zur Spieleentwicklung
              </Link>
            </div>
          </section>
        </div>

        {/* Minecraft Projekte */}
        <section className="max-w-6xl mx-auto mt-32 px-4 sm:px-8">
          <h2 className="text-4xl font-bold text-teal-400 mb-10 text-center">Minecraft Projekte</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { href: "/minecraft/winterprojekt.html", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt" },
              { href: "/minecraft/newrp.html", src: "/NewRP_Front.png", alt: "NewRP Bild", title: "NewRP" },
              { href: "/minecraft/gimmelcraft.html", src: "/Gimmelcraft_Front.png", alt: "Gimmelcraft Bild", title: "Gimmelcraft" },
              { href: "/minecraft/oneblock.html", src: "/OneBlock_Front.png", alt: "OneBlock Bild", title: "OneBlock" },
              { href: "/minecraft/outlaw.html", src: "/Outlaw_Front.png", alt: "Outlaw Bild", title: "Outlaw" },
              { href: "/minecraft/pwkde.html", src: "/PWKDE_Front.png", alt: "PlaywithK.de Bild", title: "PlaywithK.de" },
            ].map(({ href, src, alt, title }) => (
              <Link
                key={title}
                href={href}
                className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
              >
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover filter blur-sm transition-filter transition-transform duration-500 ease-in-out group-hover:blur-none group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-3xl sm:text-4xl font-semibold text-center drop-shadow-lg pointer-events-none">
                    {title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-24 text-center">
          <Link href="/" className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md">
            Zurück zur Startseite
          </Link>
        </div>
      </main>
    </>
  );
}