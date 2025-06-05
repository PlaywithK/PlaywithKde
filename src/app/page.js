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

        {/* About */}
        <section
          id="profile"
          className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-30"
        >
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <img
              src="/PWK_Profilbild_round.png"
              alt="Profilbild Kev"
              className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover mb-6 sm:mb-8 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex gap-6 mt-2 sm:mt-4">
              {[
                {
                  href: "https://youtube.com/playwithk",
                  label: "YouTube",
                  iconSrc: "/icon_youtube.svg",
                },
                {
                  href: "https://twitch.tv/playwithk",
                  label: "Twitch",
                  iconSrc: "/icon_twitch.svg",
                },
                {
                  href: "https://tiktok.com/@playwithk",
                  label: "TikTok",
                  iconSrc: "/icon_tiktok.svg",
                },
              ].map(({ href, label, iconSrc }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full bg-teal-600 p-2.5 sm:p-3 shadow-md hover:bg-teal-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <img
                    src={iconSrc}
                    alt={label}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    style={{ filter: 'invert(1)' }}
                    loading="lazy"
                    draggable={false}
                  />
                </a>
              ))}
            </div>

          </div>

          <div className="md:w-2/3 text-gray-300 space-y-6 font-sans text-sm sm:text-base">
            <p className="text-xl font-semibold text-teal-400 leading-relaxed">
              Hey, ich bin Kev - besser bekannt als PlaywithK!
            </p>
            <p className="leading-relaxed">
              Seit 2014 bin ich auf YouTube aktiv gewesen. Damals habe ich kleinere
              Videoprojekte und Vlogs zusammen mit meinem besten Freund hochgeladen.
              2017 war ein Wendepunkt für mich: Ich gründete meinen Kanal
              „PlaywithK“, der sich vor allem auf Gaming konzentrierte. Unter diesem
              Namen war ich auf vielen Plattformen aktiv – von YouTube über Twitch
              bis hin zu Twitter, Instagram und TikTok. Dort habe ich eine kleine
              Community aufgebaut, welche mir sogar einen 1-monatigen Livestream im
              Februar 2024 ermöglichte.
            </p>
            <p className="leading-relaxed">
              Anfang 2025 habe ich all diese Social Media Plattformen allerdings
              hinter mir gelassen. Dies war keine leichte Entscheidung, allerdings hat
              sich seit 2014 einigen an der Social-Media-Welt verändert und ich konnte
              mich damit nicht mehr richtig identifizieren. Zudem habe ich so mehr Zeit
              mich auf andere Bereiche zu konzentrieren. Alle weiteren Infos zu
              kommenden Projekten und allem bezüglich PlaywithK gibt es nun auf
              dieser Webseite. Schau dich gerne um!
            </p>
            <div className="mt-6">
              <a
                href="/playwithk"
                className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
                Mehr von PlaywithK entdecken
              </a>
            </div>

          </div>
        </section>

        {/* Timeline */}
        <section
          id="timeline"
          className="max-w-5xl mx-auto px-0 pt-0 relative"
        >
          {/* Vertikale Linie: auf Desktop mittig, auf Mobil links */}
          <div className="absolute top-0 left-1/2 sm:left-1/2 left-4 -translate-x-1/2 sm:-translate-x-1/2 translate-x-0 w-1 bg-teal-600 h-full"></div>

          <div className="pt-12 relative">
            {[
              {
                date: "30.03.2015",
                title: "Mein erster Kanal",
                description:
                  "Hier beginnt meine Reise auf YouTube. Mit gerademal 14 Jahren drehte ich mit meinem Nintendo 3DS und einem Freund kleine Vlogs und Filmchen, welche ich mit Windows Movie Maker Schnitt und hochlud. Von YouTube erfahren hatte ich von einer Freundin und meine ersten geschauten Videos waren Let's Plays zu Nintendo Games und Minecraft, vorallem das von Gronkh.",
              },
              {
                date: "12.01.2016",
                title: "Der erste Gaming-Kanal",
                description:
                  "Ich schloss Ende 2015 meinen ersten Kanal und erstellte einen neuen um Gaming-Videos, großteils von Minecraft, hochzuladen. Der kanal war stark inspiriert von NebelNiek, welcher zu der Zeit stark an Beliebtheit gewann.",
              },
              {
                date: "13.04.2016",
                title: "Eröffnung eines neuen Kanals",
                description:
                  "Schon nach kurzer Zeit wechselte ich den Kanal und den Namen und lud hier nicht nur Minecraft sondern auch Let's Plays zu anderen Spielen hoch. Zudem begann ich mich mehr an dem YouTuber 'Herr Bergmann' zu inspireren und erstellte auch meine erste eigene Minecraft-Kurzfiilm-Serie.",
              },
              {
                date: "23.07.2017",
                title: "Gründung von PlaywithK",
                description:
                  "2017 wechselte ich dann ein letztes Mal den Kanal und den Namen zum jetzigen 'PlaywithK'. Hier lud ich seitdem mehr oder weniger regelmäßig Videos hoch und begann unter selbigen Namen auch auf Twitch zu streamen.",
              },
              {
                date: "01.09.2023",
                title: "Gründung von PWK Entertainment",
                description:
                  "Nach mehreren Monaten Planung, Seminaren und unendlich viel Papierkram gründete ich ende 2023 meine eigene Videoschnitt und Design-Firma 'PWK Entertainment'. Unter diesem Namen arbeitete ich für unteranderem Davidson, Bloodyhorrorkid, Zetsuheiko und einige weitere.",
              },
              {
                date: "01.02.2024",
                title: "1-monatiger Subathon",
                description:
                  "Der Anfangs auf ein paar Tage geschätzte Subathon begann zu eskalieren, als einige Zuschauer über 200€ da ließen. Fast genau einen Monat waren wir dauerhaft live und haben einiges erlebt! Vielen Dank an jeden der gespendet hat und beim Stream dabei war! Das war eine Hammer Zeit!",
              },
              {
                date: "01.06.2024",
                title: "Auflösung von PWK Entertainment",
                description:
                  "Leider musste ich mich dazu entscheiden PWK Entertainment schweren Herzens aufzugeben. Die Firma war Teil meines Traumes, allerdings habe ich es leider nicht geschafft diese ordentlich zu managen und die Einnahmen konstant zu halten, weshalb ich diese vorerst wieder in den Boden stampfen musste. Aber wer weiß was die Zukunft noch bringt.",
              },
            ].map(({ date, title, description }, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
            mb-12 flex items-center w-full relative
            flex-col sm:flex-row
            ${isLeft ? "sm:flex-row justify-between" : "sm:flex-row-reverse justify-between"}
          `}
                >
                  <div
                    className={`
              w-full sm:w-6/13 p-6 bg-gray-700 rounded-lg shadow-lg border border-white border-opacity-20 z-10
              ${isLeft ? "sm:mr-6" : "sm:ml-6"}
              sm:text-left text-left
            `}
                  >
                    <time className="block mb-2 text-sm font-semibold text-teal-400">{date}</time>
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                  </div>
                  <span
                    className={`
    absolute top-1/2 -translate-y-1/2
    left-1/2 sm:left-1/2 left-4
    -translate-x-1/2 sm:-translate-x-1/2 translate-x-0
    w-6 h-6 bg-teal-600 rounded-full border-4 border-gray-800 z-20
    hidden sm:block
  `}
                    aria-hidden="true"
                  ></span>
                </div>
              );
            })}
          </div>
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
                link: "/projekte/app-entwicklung",
              },
              {
                title: "Spieleentwicklung",
                description:
                  "Schon seit Jahren wollte ich eigene Spiele entwickeln und die Ideen in meinem Kopf sprudeln quasi über. Hier erfährst du alles zu meiner Dev-Journey und meinen momentanen Spiele-Projekten.",
                link: "/projekte/spieleentwicklung",
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