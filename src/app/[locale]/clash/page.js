"use client";

import { useEffect, useState } from "react";
import Hero from "./../components/hero";

const lyrics = [
    `"Irgendwann, wenn es klappt, schließt mein Herz hiermit mal ab"\n– Ghost, Paperblossom`,
    `"Bin ein Geist, der nicht geht, weil er nicht weiß was ihn am Leben hält"\n– Ghost, Paperblossom`,
    `"Frag' mich ob es echt ist wenn ich lach"\n– YKKE`,
    `"Ist der Boden wo ich steh wirklich echt?"\n– YKKE`,
    `"Wer Feind ist war mal Freund für mich"\n– Antiheld, Paperblossom`,
    `"Kein Schritt war je ein Sieg"\n– Hellseher, Paperblossom`,
    `"Dieser Multi- wird zum Singleplayer now"\n– Hellseher, Paperblossom`,
    `"Ich möcht' auch garnicht atmen, ich möcht' auch garnicht sein"\n– Hellseher, Paperblossom`,
    `"Ich möcht nur eines, dass du meine Hand hälst"\n- Hellseher, Paperblossom`,
    `"Ich wollt' sie wieder aufbauen, all' die Träume, Stein für Stein"\n– Hellseher, Paperblossom`,
    `"Ich ersticke an der Nacht"\n– Hellseher, Paperblossom`,
    `"Wollten immer Freunde sein, doch glaub' uns fehlte der Mut"\n– Monster, Paperblossom`,
    `"Habe mich immer benommen, ja ich weiß, nicht immer gut"\n– Monster, Paperblossom`,
];

const posts = [
    {
        date: "09.11.2025",
        title: "Wäre alles anders gekommen",
        content: "Wäre alles anders gekommen, wäre ich vielleicht ein Musiker, war ich doch so musikalisch. Wäre alles anders gekommen hätte es vielleicht mit YouTube geklappt. Wäre alles anders gekommen, würde ich so viel an jene denken, die nicht mehr sind? Wäre alles anders gekommen, wäre ich vielleicht Programmierer. Wäre alles anders gekommen, hätte ich glücklich sein können? Aber stattdessen bin ich ein Lügner, ein Betrüger, ein missgünstiger Mensch. Ein Konstrukt voller Illusionen, verwirrenden Lügen, Fassaden und Kopfschmerz. Verloren im Nichts obwohl ich alles hätte haben können.",
    },
    {
        date: "26.09.2025",
        title: "Was ich möchte...",
        content: "Ich möchte nicht aufstehen, aber ich möchte auch nicht liegen bleiben. Ich möchte nicht atmen, aber ich möchte auch nicht damit aufhören. Ich möchte ein guter Freund sein, und doch möchte ich alleine sein. Ich möchte leben.Ich möchte dass es mir gut geht, aber ich schaffe es nicht etwa dafür zu tun.Ich fühle mich so leer, so nutzlos, wie eine Zeitverschwendung.Ich fühle mich schwer und träge, antriebslos... Diese Welt erdrückt mich.Ich passe nicht in sie hinein.Es reiht sich Fehler an Fehler an Fehler...und ich frage mich, wird es jemals einen Moment geben, in dem ich wirklich leben kann?",
    },
    {
        date: "07.09.2020",
        title: "Aneinanderreihung von Fehlern",
        content: "Mein Leben ist eine einzige Aneinanderreihung von Fehlern.",
    },
        {
        date: "03.02.2017",
        title: "Angst & Hoffnung",
        content: "Viele beklagen sich oft über ihr Leben. Das Leben scheint oft gegen einen zu sein und einem nur böses zu wollen. Aber alles hat zwei Seiten! Auch das Leben kann schön sein. Man muss nur schauen was man selbst daraus macht. Ich dachte immer mein Leben wäre komplett Scheiße, alles schien gegen mich zu sein. Meine Schule, die Liebe und letztendlich auch meine Freunde. Doch manchmal muss man loslassen und einen Ausweg suchen. Egal wo. Solange man sich beherrscht und dabei nichts zerstört ist alles gut. Ich dachte das Leben sei sinnlos und blöd. Das Leben sei unbrauchbar weil wir alle sowieso sterben werden. Doch ich habe mir selbst klar gemacht dass das Leben auch schön sein kann. Und auch wenn man irgendwann stirbt, so sollte man das Schöne im Leben nutzen. Jedes mal wenn ich über den Tod nachdenke oder auch nur dieses Wort höre wird mir übel und mich überkommt ein seltsames Gefühl. Angst und ein Drang zu weinen, auch wenn ich das oftmals versuche zu unterdrücken. Doch manchmal geht das nicht. Ich zittere dann am ganzen Körper ohne zu wollen. Der Gedanke dass die sterben werden, die ich liebe und dass sie mich verlassen ist schrecklich. Es zerstört mich innerlich. Es macht mir Angst. Es bessert sich nur langsam bis gar nicht. Während ich das hier schreibe zittere ich und dieses seltsame Gefühl überkommt mich. Aber wie ich schon sagte, jeder sollte etwas aus seinem Leben machen! Und ich denke auch ich habe irgendeine Funktion auf dieser Welt. Wer weiss, vielleicht gibt es danach ja noch etwas. Ich hoffe es. Denn ansonsten wäre da nur… nichts. Und genau das ist, wovor ich Angst habe. Das hört sich vielleicht komisch an und das ist es auch, aber ich kann nichts daran ändern.",
    },
];

export default function Clash() {
    const [currentLyric, setCurrentLyric] = useState(lyrics[0]);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        document.title = "/clash - PlaywithK.de";

        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                const random = Math.floor(Math.random() * lyrics.length);
                setCurrentLyric(lyrics[random]);
                setAnimate(true);
            }, 100);
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            {/* Hero */}
            <Hero title="/clash" subtitle="/clash ist eine nicht indexierte Unterseite von playwithk.de auf der ich Gedanken-Snippets von mir teile und archiviere." />

            {/* Lyrics */}
            <section className="px-4 max-w-4xl mx-auto py-16 text-center">
                <div className="relative">
                    <p
                        key={currentLyric}
                        className={`text-2xl sm:text-2xl font-light text-gray-200 italic leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] ${animate ? "animate-fade-in-up" : ""
                            } transition-all duration-700`}
                    >
                        {currentLyric}
                    </p>
                </div>
            </section>

            {/* Posts */}
            <section className="px-4 sm:px-8 py-16 max-w-4xl mx-auto">

                {/* Trigger Warning */}
                <section className="px-4 sm:px-8 sm:pb-8 max-w-4xl mx-auto -mt-8">
                    <div className="bg-red-600 text-white font-semibold rounded-xl shadow-lg border border-white border-opacity-20 p-4 text-center">
                        ⚠️ Triggerwarning: Die folgenden Themen können belastende Inhalte enthalten!!
                    </div>
                </section>

                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-teal-400 text-center">
                    Gedanken
                </h2>

                <div className="flex flex-col gap-8">
                    {posts.map((post, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 border border-white border-opacity-20 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl sm:text-2xl font-semibold text-teal-400">{post.title}</h3>
                                <span className="text-gray-400 text-sm sm:text-base">{post.date}</span>
                            </div>
                            <p className="text-gray-300 text-base sm:text-lg">{post.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
