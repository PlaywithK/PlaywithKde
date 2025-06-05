export const metadata = {
  title: "Kontakt – PlaywithK",
  description: "Kontakt",
};

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-teal-400 text-center">Kontakt</h1>
        <form className="flex flex-col gap-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <label className="flex flex-col text-gray-300">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100"
            />
          </label>
          <label className="flex flex-col text-gray-300">
            E-Mail
            <input
              type="email"
              name="email"
              required
              className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100"
            />
          </label>
          <label className="flex flex-col text-gray-300">
            Nachricht
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 p-3 rounded bg-gray-700 border border-gray-600 focus:border-teal-400 outline-none text-gray-100 resize-none"
            />
          </label>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 transition-colors duration-300 py-3 rounded font-semibold text-gray-900"
          >
            Senden
          </button>
        </form>
      </div>
    </main>
  );
}