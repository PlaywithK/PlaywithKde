"use client";

import Hero from "./../components/hero";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import SteamRecentGamesXML from '../components/steamrecentgames';
import AniListProfile from '../components/anilistprofile';
import Link from "next/link";
import Image from "next/image";

export default function PlaywithK() {
  const t = useTranslations("PlaywithK");
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    document.title = locale === "de"
      ? "PlaywithK - PlaywithK.de"
      : "PlaywithK - PlaywithK.de";
  }, [locale]);

  return (
    <>
    <Hero title="PlaywithK im Web" subtitle="Hier findest du alles, was mich auch abseits von Projekten begeistert – Games, Anime & Musik." />

      {/* About */}
      <section
        id="profile"
        className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-30"
      >
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <Image
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
                <Image
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
            <Link
              href="/playwithk"
              className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
              Mehr von PlaywithK entdecken
            </Link>
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
                "Der Anfangs auf ein paar Tage geschätzte Subathon begann zu eskalieren, als einige Zuschauer über 300€ da ließen. Fast genau einen Monat waren wir dauerhaft live und haben einiges erlebt! Vielen Dank an jeden der gespendet hat und beim Stream dabei war! Das war eine Hammer Zeit!",
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

      {/* Steam Section */}
      <section className="max-w-5xl mx-auto mb-16 bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6">
        <h2 className="text-2xl font-semibold text-teal-400 mb-4">🎮 Steam</h2>
        <p className="text-gray-300 mb-6">
          Auch auf Steam bin ich seit dem 05. April 2016 vertreten. Ich besitze eine Umfangreiche Sammlung an Spielen und DLCs, die stätig wächst. Meine Spielabschlussrate liegt zwar bei nur 30%, aber dafür besitze ich eine vielfältige Auswahl an Spielen aus verschiedenen Genren. Zudem haben sich über die Jahre schon 21.000 Erfolge und über 100 Abzeichen angesammelt. Auch habe ich mit dem Release von Counter Strike 2 mit dem Skin-Trading und spielen von Counter Strike begonnen und versuche mich stetig zu verbessern. Mein meistgespieltes Spiel bleibt allerdings Paladins. Vielleicht sehen wir uns ja mal im Spiel! 👾
        </p>
        {/* Steam Mini-Profil */}
        <div className="w-full flex justify-center mb-4 overflow-hidden">
          <iframe
            src="https://gamer2810.github.io/steam-miniprofile/?accountId=76561198296152389&interactive=true&vanityId=playwithk&lang=german"
            style={{ width: '600px', height: '400px' }}
            className="border-0 rounded-lg shadow-lg"
            name="steamiFrame"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* Steam Zuletzt gespielt */}
        <h3 className="text-center text-2xl font-semibold text-teal-400 mb-4">
          Zuletzt gespielt in den letzten 2 Wochen
        </h3>
        <SteamRecentGamesXML />
      </section>

      {/* AniList Section */}
      <AniListProfile />

      {/* Spotify Section */}
      <section className="max-w-5xl mx-auto mb-24 bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6">
        <h2 className="text-2xl font-semibold text-teal-400 mb-4">🎵 Spotify</h2>
        <p className="text-gray-300 mb-6">
          Musik ist ein wichtiger Teil meines Alltags. Hier kannst du sehen, was ich so höre:
        </p>
        {/* Spotify IFrame */}
        <div className="flex justify-center">
          <a
            href="https://data-card-for-spotify.herokuapp.com/card?user_id=y7nfn3levk4tlppfjwj9lofi0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://data-card-for-spotify.herokuapp.com/api/card?user_id=y7nfn3levk4tlppfjwj9lofi0"
              alt="Spotify Profil Card"
              className="rounded-lg shadow-lg"
            />
          </a>
        </div>
      </section>
    </>
  );
}