'use client';
import { useState, useEffect, useRef } from 'react';

const responses = ["Ja!", "Nein.", "Vielleicht.", "Frag später!", "Auf keinen Fall!", "Natürlich!", "Unklar..."];
const chibiTalkLines = [
    "Hey, lass das!",
    "Wie geht es dir?",
    "Was gibt's Neues?",
    "Lass mich in Ruhe!",
    "Ich bin hier, um zu helfen!",
    "Das ist spannend!",
    "Achtung, ich spreche!",
    "Hmm... interessant!"
];

export default function MagicChibi() {
    const [speech, setSpeech] = useState('...');
    const [chibiSrc, setChibiSrc] = useState('/closed.png');
    const [userQuestion, setUserQuestion] = useState('');
    const speechTimeoutRef = useRef(null);

    const showSpeech = (text) => {
        setSpeech(text);

        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);

        speechTimeoutRef.current = setTimeout(() => {
            setSpeech('');
        }, 5000);
    };

    const askShell = () => {
        if (!userQuestion.trim()) {
            showSpeech("Bitte stelle zuerst eine Frage!");
            return;
        }

        const response = responses[Math.floor(Math.random() * responses.length)];
        showSpeech(response);

        const talkingImages = ['/open.png', '/open_blink.png'];
        setChibiSrc(talkingImages[Math.floor(Math.random() * talkingImages.length)]);

        setTimeout(() => setChibiSrc('/closed.png'), 500);
    };

    const chibiTalk = () => {
        const line = chibiTalkLines[Math.floor(Math.random() * chibiTalkLines.length)];
        showSpeech(line);

        const talkingImages = ['/open.png', '/open_blink.png'];
        setChibiSrc(talkingImages[Math.floor(Math.random() * talkingImages.length)]);

        setTimeout(() => setChibiSrc('/closed.png'), 500);
    };

    const chibiRef = useRef(null);
    useEffect(() => {
        let animationFrameId;

        const animate = () => {
            const time = Date.now() / 1000;
            const posX = Math.sin(time * 1.2) * 6;
            const posY = Math.cos(time * 0.8) * 8;
            const angle = Math.sin(time * 0.5) * 4;

            if (chibiRef.current) {
                chibiRef.current.style.transform = `translate(${posX}px, ${posY}px) rotate(${angle}deg)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Blinzeln
        const blinkInterval = setInterval(() => {
            if (chibiSrc.includes('closed.png')) {
                setChibiSrc('/closed_blink.png');
                setTimeout(() => setChibiSrc('/closed.png'), 200);
            }
        }, 5000);

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearInterval(blinkInterval);
            if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
        };
    }, [chibiSrc]);

    return (
            <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-20 flex flex-col items-center justify-center">
                <section className="max-w-xl w-full bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-20 p-8 text-center relative">
                    <h1 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-8">✨ PWK Orakel ✨</h1>

                    <div className="relative inline-block">
                        <img
                            src={chibiSrc}
                            alt="Magischer PlaywithK Chibi"
                            width={300}
                            height={300}
                            onClick={chibiTalk}
                            ref={chibiRef}
                            className="cursor-pointer select-none transition-transform duration-300"
                            draggable={false}
                        />

                        {/* Sprechblase */}
                        {speech && speech !== '' && (
                            <div
                                className="absolute right-full top-1/3 transform -translate-y-1/2 bg-gray-100 text-black rounded-lg p-3 w-52 shadow-lg opacity-90"
                                style={{ pointerEvents: 'none' }}
                            >
                                {speech}
                                <div
                                    className="absolute top-1/2 right-0 w-0 h-0 border-t-6 border-b-6 border-l-6 border-t-transparent border-b-transparent border-l-gray-100 transform -translate-y-1/2"
                                    style={{ right: '-6px' }}
                                ></div>
                            </div>
                        )}
                    </div>

                    <input
                        type="text"
                        placeholder="Stell deine Frage..."
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                        className="mt-8 w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={askShell}
                            className="bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow transition-all"
                        >
                            Fragen!
                        </button>
                    </div>
                </section>
                <div className="mt-6">
                    <a
                        href="/projekte/webgames"
                        className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md"
                    >
                        Zurück zur Übersicht
                    </a>
                </div>
            </main>
    );
}