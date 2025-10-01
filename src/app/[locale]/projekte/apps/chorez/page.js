import Link from 'next/link';

export const metadata = {
  title: "Chorez – PlaywithK",
  description: "Chorez",
};

export default function Chorez() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-8 py-16">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400">Chorez</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Diese Seite ist Work-in-Progress!
        </p>
      </section>

      <div className="space-y-20 max-w-5xl mx-auto">
        <p>Hallo Welt!</p>
      </div>
    </main>
  );
}