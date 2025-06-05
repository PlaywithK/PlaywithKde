'use client';
import { useState, useEffect } from 'react';

export const metadata = {
  title: "YKKE Lyric Quiz – PlaywithK",
  description: "Yung Kafa & Kücük Efendi Lyric Quiz",
};

const lyrics = [
  { line: 'Aber was er hinterlässt, nicht wenig', song: 'Baum im Wald' },
  { line: 'Ich bin wach mit den Eulen', song: 'Wach' },
  { line: 'Ich bin hier doch meine Seele ist woanderst', song: 'Superlaut' },
  { line: 'Blätter fallen, werfe Falten', song: 'Black Mastercard' },
];

export default function LyricQuiz() {
  const [currentLyric, setCurrentLyric] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [answered, setAnswered] = useState(false);

  const getRandomLyric = () => {
    const randomIndex = Math.floor(Math.random() * lyrics.length);
    return lyrics[randomIndex];
  };

  const startQuiz = () => {
    const lyric = getRandomLyric();
    setCurrentLyric(lyric);
    setUserInput('');
    setResult('');
    setAnswered(false);
  };

  const checkAnswer = () => {
    if (!currentLyric) return;

    const userAnswer = userInput.trim().toLowerCase();
    const correctAnswer = currentLyric.song.toLowerCase();

    if (userAnswer === correctAnswer) {
      setResult('Richtig! 🎉');
    } else {
      setResult(`Falsch! Richtige Antwort: ${currentLyric.song} 😢`);
    }
    setAnswered(true);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        <section className="max-w-xl w-full bg-gray-800 rounded-xl shadow-xl border border-white border-opacity-20 p-8 space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-400">🎤 YKKE Lyrics-Quiz</h1>

          {currentLyric && (
            <p className="text-xl font-semibold text-white">{`„${currentLyric.line}“`}</p>
          )}

          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Gib den Songtitel ein"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={answered}
          />

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={checkAnswer}
              disabled={answered}
              className="bg-teal-600 hover:bg-teal-400 text-white font-semibold px-6 py-2 rounded-full shadow transition-all disabled:opacity-50"
            >
              Überprüfen
            </button>
            {answered && (
              <button
                onClick={startQuiz}
                className="bg-white text-gray-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-teal-400 hover:text-white transition-all"
              >
                Nochmal versuchen
              </button>
            )}
          </div>

          {result && (
            <p className={`text-lg font-medium ${result.startsWith('Richtig') ? 'text-green-400' : 'text-red-400'}`}>
              {result}
            </p>
          )}
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