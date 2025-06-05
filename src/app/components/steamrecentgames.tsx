'use client';

import { useEffect, useState } from 'react';

type RecentGame = {
  appID: string;
  name: string;
  playtimeTwoWeeks: string; // z.B. "120" (Minuten)
  logo: string; // URL zum Bild
};

export default function SteamRecentGamesXML() {
  const [games, setGames] = useState<RecentGame[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecentGamesXML() {
      try {
        const res = await fetch('/api/steamRecentGames');
        if (!res.ok) throw new Error(`HTTP Fehler! Status: ${res.status}`);
        const text = await res.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");

        const gameElements = Array.from(xmlDoc.querySelectorAll("gamesList > games > game"));

        const parsedGames = gameElements.map(game => {
          const appID = game.querySelector("appID")?.textContent || "";
          const name = game.querySelector("name")?.textContent || "";
          const playtimeTwoWeeks = game.querySelector("hoursLast2Weeks")?.textContent || "0";
          const logo = game.querySelector("logo")?.textContent || "";

          const logoUrl = logo;

          return { appID, name, playtimeTwoWeeks, logo: logoUrl };
        })
          .sort((a, b) => parseFloat(b.playtimeTwoWeeks) - parseFloat(a.playtimeTwoWeeks))
          .slice(0, 10);

        setGames(parsedGames);
      } catch (err) {
        setError('Fehler beim Laden der Steam-Spiele.');
      } finally {
        setLoading(false);
      }
    }

    fetchRecentGamesXML();
  }, []);

  if (loading) return <p className="text-gray-400">Lade zuletzt gespielte Spiele …</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (games.length === 0) return <p className="text-gray-400">Keine kürzlich gespielten Spiele gefunden.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
      {games.map(({ appID, name, playtimeTwoWeeks, logo }) => (
        <div
          key={appID}
          className="bg-gray-700 p-2 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          title={`${name}\nSpielzeit letzte 2 Wochen: ${Math.round(parseFloat(playtimeTwoWeeks))}h`}
        >
          <img src={logo} alt={name} className="w-full rounded" />
          <p className="text-xs mt-1 text-center truncate">{name}</p>
          <p className="text-xs text-gray-400 text-center">{Math.round(parseFloat(playtimeTwoWeeks))}h gespielt</p>
        </div>
      ))}
    </div>
  );
}