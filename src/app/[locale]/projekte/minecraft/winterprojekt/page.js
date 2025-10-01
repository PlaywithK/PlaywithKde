import Link from 'next/link';
import Image from "next/image";

export const metadata = {
  title: "Winterprojekt – Minecraft Projekte – PlaywithK",
  description: "Details zum Winterprojekt Minecraft Bau.",
};

export default function Winterprojekt() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-400 mb-6">Winterprojekt</h1>
        <p className="text-gray-300 mb-8">
          Das Winterprojekt ist eines meiner liebsten Minecraft-Projekte, bei dem ich eine verschneite Landschaft mit detailreichen Bauten erschaffen habe.
          Ziel war es, eine gemütliche Winterwelt mit vielen kleinen Details zu gestalten.
        </p>

        <Image
          src="/Winterprojekt_Front.png"
          alt="Winterprojekt Minecraft Bild"
          className="rounded-xl shadow-lg border border-white border-opacity-10 mb-8"
        />

        <section className="max-w-6xl mx-auto mt-32 px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { href: "/projekte/minecraft//winterprojekt", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2024" },
              { href: "/projekte/minecraft//winterprojekt", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2020" },
              { href: "/projekte/minecraft//winterprojekt", src: "/Winterprojekt_Front.png", alt: "Winterprojekt Titelbild", title: "Winterprojekt 2017" },
            ].map(({ href, src, alt, title }) => (
              <Link
                key={title}
                href={href}
                className="relative block overflow-hidden rounded-xl shadow-lg border border-white border-opacity-10 group"
              >
                <Image
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

        <Link href="/projekte" className="inline-block bg-teal-600 hover:bg-teal-400 text-white font-medium px-5 py-2 rounded-full shadow transition-all">
          Zurück zur Projektübersicht
        </Link>
      </section>
    </main>
  );
}