export const metadata = {
  title: "Impressum – PlaywithK",
  description: "Impressum",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-teal-400">Impressum</h1>

        <section className="mb-8 space-y-4 text-gray-300">
          <p>
            Diese Webseite ist ein rein privates, nicht kommerzielles Angebot und dient keinerlei geschäftsmäßigen oder
            journalistisch-redaktionellen Zwecken. Gemäß §5 Telemediengesetz (TMG) besteht daher keine Impressumspflicht.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Kontakt</h2>
          <p className="text-gray-300">E-Mail: <a href="mailto:info@playwithk.de" className="underline hover:text-teal-400">info@playwithk.de</a></p>
        </section>

        <section className="mb-8 space-y-4 text-gray-300">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Nutzungsrecht der Website-Inhalte</h2>
          <p>
            Alle Inhalte dieser Webseite, einschließlich Texte, Bilder und Designs, sind urheberrechtlich geschützt. Eine
            Nutzung, Vervielfältigung oder Verbreitung ohne vorherige schriftliche Genehmigung ist nicht gestattet. Private,
            nicht-kommerzielle Nutzung ist unter Angabe der Quelle erlaubt.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Externe Quellen</h2>
          <p>
            SVG Icons:{' '}
            <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-teal-400">
              https://www.svgrepo.com/
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}