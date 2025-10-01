'use client';

import { useEffect, useState } from 'react';

type AniListUser = {
    name: string;
    avatar: { large: string };
    statistics: {
        anime: {
            count: number;
            meanScore: number;
            minutesWatched: number;
        };
    };
};

type AniListActivity = {
    __typename: string;
    status?: string;
    progress?: number;
    text?: string;
    media?: {
        title: { romaji: string };
        coverImage?: { medium: string };
    };
};

export default function AniListProfile() {
    const [user, setUser] = useState<AniListUser | null>(null);

    const [activities, setActivities] = useState<AniListActivity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Zuerst UserID holen:
                const userIdQuery = `
        query {
          User(name: "PlaywithK") {
            id
            name
            avatar {
              large
            }
            statistics {
              anime {
                count
                meanScore
                minutesWatched
              }
            }
          }
        }
      `;

                const userRes = await fetch("https://graphql.anilist.co", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ query: userIdQuery }),
                });
                const userData = await userRes.json();

                if (userData.errors) {
                    console.error(userData.errors);
                    setError("Fehler beim Laden der AniList-Daten.");
                    setLoading(false);
                    return;
                }

                const user = userData.data.User;
                setUser(user);

                const activitiesQuery = `
        query {
          Page(perPage: 5) {
            activities(userId: ${user.id}, sort: ID_DESC) {
              __typename
... on ListActivity {
  status
  progress
  media {
    title {
      romaji
    }
    coverImage {
      medium
    }
  }
}
              ... on TextActivity {
                text
              }
            }
          }
        }
      `;

                const activitiesRes = await fetch("https://graphql.anilist.co", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ query: activitiesQuery }),
                });
                const activitiesData = await activitiesRes.json();

                if (activitiesData.errors) {
                    console.error(activitiesData.errors);
                    setError("Fehler beim Laden der AniList-Aktivitäten.");
                    setLoading(false);
                    return;
                }

                setActivities(activitiesData.data.Page.activities);
                setLoading(false);
            } catch (e) {
                setError("Netzwerkfehler beim Laden der AniList-Daten.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    if (loading) return <p className="text-gray-400">Lade AniList-Daten…</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p className="text-gray-400">Keine AniList-Daten gefunden.</p>;

    const daysWatched = (user.statistics.anime.minutesWatched / 1440).toFixed(1);

    return (
        <section className="max-w-5xl mx-auto mb-16 bg-gray-800 rounded-xl shadow-lg border border-white border-opacity-20 p-6">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">📺 AniList</h2>
            <p className="text-gray-300 mb-6">
                Ich schaue Anime seit 2015 und habe auch angefangen Manga zu lesen in 2017. Mein Lieblingsgenres sind Action, Fantasy und Mystery und ich liebe Catgirls ^^
            </p>

            {/* Profil */}
            <div className="flex items-center justify-center mb-6 gap-4">
                <img
                    src={user.avatar.large}
                    alt={user.name}
                    className="w-20 h-20 rounded-full"
                    loading="lazy"
                />
                <h3 className="text-xl font-semibold">{user.name}</h3>
            </div>

            {/* Statistiken */}
            <div className="flex justify-around mb-6 text-center text-gray-300">
                <div>
                    <h4 className="text-2xl font-bold">{user.statistics.anime.count}</h4>
                    <p>Anime insgesamt</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">{daysWatched}</h4>
                    <p>Tage geschaut</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">{user.statistics.anime.meanScore}</h4>
                    <p>Durchschnittliche Bewertung</p>
                </div>
            </div>

            {/* Letzte Aktivitäten */}
            <h3 className="text-teal-400 font-semibold text-xl mb-4 text-center">
                Letzte Aktivitäten
            </h3>
            <div className="space-y-4 max-h-64 overflow-y-auto">
                {activities.length === 0 && (
                    <p className="text-gray-400 italic text-center">Keine Aktivitäten gefunden.</p>
                )}

                {activities.map((activity, idx) => (
                    <div key={idx} className="flex bg-gray-700 rounded-lg shadow p-4 gap-4">
                        {/* Cover-Bild */}
                        {activity.media?.coverImage?.medium && (
                            <img
                                src={activity.media.coverImage.medium}
                                alt={activity.media.title.romaji}
                                className="w-16 h-24 object-cover rounded-md"
                            />
                        )}

                        {/* Text-Inhalt */}
                        <div className="flex-1">
                            {activity.media?.title?.romaji && (
                                <h4 className="text-lg font-semibold text-white mb-1">
                                    {activity.media.title.romaji}
                                </h4>
                            )}
                            {activity.status && (
                                <p className="text-gray-300">
                                    <strong>Status:</strong> {activity.status}
                                </p>
                            )}
                            {activity.progress !== undefined && (
                                <p className="text-gray-300">
                                    <strong>Fortschritt:</strong> Folge {activity.progress}
                                </p>
                            )}
                            {activity.text && (
                                <p className="text-gray-400 mt-2 italic whitespace-pre-line">{activity.text}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}