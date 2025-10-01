export const metadata = {
  title: "PWK Entertainment – PlaywithK",
  description: "PWK Entertainment – Videoschnitt & Grafikdesign",
};

const customers = [
  { name: "Anakin Klassen", feedback: "Ich hab mir ein Design für Twitch mit ein paar Panels, einem Offlinescreen und einem Banner bestellt und die Bestellung wurde sehr schnell und genau nach meinen Wünschen bearbeitet!" },
  { name: "kxnkywaifu", feedback: "Ein sehr seriöser und professioneller Unternehmer!" },
  { name: "Christopher Metzler", feedback: "Die Videos aus der PWK Entertainment Produktion sind qualitativ sehr anspruchsvoll gestaltet und beweisen, dass jedem Projekt ein besonderes Maß an Individualismus und Kreativität gegeben wird." },
];

const projects = [
  {
    title: "Twitch-Design für Zetshueikko",
    description: "Individuelle Twitch Panels, Banner und Offline-Screen für Zetshueikko.",
    image: "/Zetshueikko-TwitchOffline_V1.png",
    link: "https://www.twitch.tv/zetshueikko",
  },
  {
    title: "Twitch-Design für Horrorblubb",
    description: "Individuelle und stimmige Designs für Horrorblubb's Twitch-Kanal.",
    image: "/bloodypb.png",
    link: "https://www.twitch.tv/horrorblubb",
  },
  {
    title: "Videobearbeitung für Davidson",
    description: "Längere Videoschnittarbeiten, Erstellung von Thumbnails und Kanaldesigns.",
    image: "/david_banner.jpg",
    link: "https://www.youtube.com/@DavidsonTv_",
  },
];

function StarIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-400 inline-block"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.455a1 1 0 00-1.176 0l-3.388 2.455c-.784.57-1.838-.196-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
    </svg>
  );
}

export default function PWKEntertainment() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center px-8 py-16">
      <div className="w-full max-w-5xl p-10 flex flex-col gap-12">
        <h1 className="text-6xl font-extrabold text-teal-400 tracking-wide drop-shadow-lg">
          PWK Entertainment
        </h1>

        <section>
          <h2 className="text-4xl font-semibold mb-6 text-teal-300 tracking-wide">
            Über PWK Entertainment
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            PWK Entertainment war eine von PlaywithK gegründete Firma, welche sich hauptsächlich um Videoschnitt und Grafikdesign für Social-Media Kanäle kümmerte. Dabei wurden sowohl Shortformat als auch Longformat Videos angenommen, aber auch Designs für Twitch, YouTube oder andere Soziale Kanäle.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-6 text-teal-300 tracking-wide">
            Werdegang & Erfahrungen
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-4">
            PWK Entertainment wurde im September 2020 als E-Commerce-Unternehmen gegründet. Schon kurz nach dem Start gab es erste Interessenten, und das Projekt nahm schnell an Fahrt auf. Obwohl vieles Neuland war, von steuerlichen Pflichten über Rechnungsstellung bis hin zur individuellen Kundenbetreuung, entwickelte sich mit der Zeit eine zuverlässige Arbeitsroutine.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-4">
            Zum Einsatz kamen dabei vor allem Programme wie <strong>Filmora 12</strong>, <strong>DaVinci Resolve</strong>, <strong>Affinity Photo</strong> und <strong>Affinity Designer</strong>. Die Designs und Projekte wurden stets in enger Absprache mit den Kunden entwickelt und, falls notwendig, gemeinsam überarbeitet – bis das Ergebnis wirklich passte.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Trotz des vielversprechenden Starts geriet die Firma nach etwa einem Jahr ins Stocken. Die Aufträge wurden seltener, und ein größerer geplanter Deal, in den viel Zeit und Energie geflossen war, platzte. In der Folge wurde es finanziell schwierig, und letztlich musste ich mich aus persönlichen und wirtschaftlichen Gründen dazu entscheiden, PWK Entertainment zu beenden. Die gesammelten Erfahrungen und das kreative Wachstum in dieser Zeit bleiben mir jedoch als wertvolle Grundlage für meinen weiteren Weg erhalten.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-8 text-teal-300 tracking-wide text-center">
            Kunden
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map(({ title, description, image, link }) => (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800 rounded-xl p-4 shadow-lg border border-white border-opacity-30 flex flex-col items-center hover:border-teal-400 transition"
              >
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <h3 className="text-teal-400 text-xl font-semibold mb-2 text-center">{title}</h3>
                <p className="text-gray-300 text-center">{description}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold mb-8 text-teal-300 tracking-wide text-center">
            Bewertungen
          </h2>
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {customers.map(({ name, feedback }) => (
              <blockquote
                key={name}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-white border-opacity-30"
              >
                <div className="mb-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-200 italic text-lg">„{feedback}“</p>
                <footer className="mt-4 text-teal-400 font-semibold text-right">
                  — {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}