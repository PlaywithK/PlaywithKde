{/* Alter Code von PlaywithK-Page */ }

import SteamRecentGamesXML from '../components/steamrecentgames';
import AniListProfile from '../components/anilistprofile';

{/* Steam Section */ }
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

{/* AniList Section */ }
<AniListProfile />

{/* Spotify Section */ }
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