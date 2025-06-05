'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const suits = ['♥', '♦', '♣', '♠'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export default function HighStakesPage() {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState('');

  const createDeck = () => {
    const newDeck = [];
    for (let suit of suits) {
      for (let value of values) {
        newDeck.push({ value, suit });
      }
    }
    return newDeck.sort(() => Math.random() - 0.5);
  };

  const getCardValue = (card) => {
    if (['J', 'Q', 'K'].includes(card.value)) return 10;
    if (card.value === 'A') return 11;
    return parseInt(card.value);
  };

  const calculateScore = (hand) => {
    let score = hand.reduce((sum, card) => sum + getCardValue(card), 0);
    let aces = hand.filter(card => card.value === 'A').length;
    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }
    return score;
  };

  const drawCard = (hand, setHand) => {
    const newDeck = [...deck];
    const card = newDeck.pop();
    setDeck(newDeck);
    setHand(prev => [...prev, card]);
    return card;
  };

  const startGame = () => {
    const newDeck = createDeck();
    const playerStart = [newDeck.pop(), newDeck.pop()];
    const dealerStart = [newDeck.pop()];
    
    setDeck(newDeck);
    setPlayerHand(playerStart);
    setDealerHand(dealerStart);
    setPlayerScore(calculateScore(playerStart));
    setDealerScore(calculateScore(dealerStart));
    setGameOver(false);
    setResult('');
  };

  const handleHit = () => {
    const card = drawCard(playerHand, setPlayerHand);
    const newScore = calculateScore([...playerHand, card]);
    setPlayerScore(newScore);
    if (newScore > 21) {
      setResult('Du hast verloren!');
      setGameOver(true);
    }
  };

  const handleStand = () => {
    let newDealerHand = [...dealerHand];
    let newDeck = [...deck];

    while (calculateScore(newDealerHand) < 17) {
      const card = newDeck.pop();
      newDealerHand.push(card);
    }

    const finalDealerScore = calculateScore(newDealerHand);
    setDealerHand(newDealerHand);
    setDealerScore(finalDealerScore);

    let outcome;
    if (finalDealerScore > 21 || playerScore > finalDealerScore) {
      outcome = 'Du hast gewonnen!';
    } else if (playerScore === finalDealerScore) {
      outcome = 'Unentschieden!';
    } else {
      outcome = 'Der Dealer gewinnt!';
    }

    setResult(outcome);
    setGameOver(true);
  };

  useEffect(() => {
    startGame();
  }, []);

  const renderCard = (card, index) => (
    <div key={index} className={`card ${['♥', '♦'].includes(card.suit) ? 'text-red-500' : ''} bg-white text-black rounded-lg shadow-md p-2 w-20 h-32 inline-block mx-1 relative`}>
      <span className="absolute top-1 left-2 text-sm font-bold">{card.value}</span>
      <span className="absolute top-5 left-2 text-sm">{card.suit}</span>
      <div className="text-3xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{card.suit}</div>
      <span className="absolute bottom-1 right-2 text-sm font-bold rotate-180">{card.value}</span>
      <span className="absolute bottom-5 right-2 text-sm rotate-180">{card.suit}</span>
    </div>
  );

  return (
    <>
      <Head>
        <title>High Stakes – PlaywithK.de</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 sm:px-6 lg:px-8 py-16">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-teal-400">High Stakes</h1>
<p className="text-gray-300 mb-10 max-w-xl mx-auto">
  Ziehe Karten, besiege den Dealer – wie viel Risiko gehst du ein? Ziel ist es, mit deinen Karten so nah wie möglich an 21 Punkte zu kommen, ohne darüber zu liegen. Der Dealer zieht automatisch, wenn du passt. Wer näher an 21 ist, gewinnt!
</p>

          <div className="bg-gray-800 rounded-lg p-6 border border-white border-opacity-20 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Spieler</h2>
              <div>{playerHand.map(renderCard)}</div>
              <p className="mt-2">Punkte: {playerScore}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Dealer</h2>
              <div>{dealerHand.map(renderCard)}</div>
              <p className="mt-2">Punkte: {dealerScore}</p>
            </div>

            {!gameOver && (
              <div className="space-x-4">
                <button onClick={handleHit} className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-400 transition">Karte ziehen</button>
                <button onClick={handleStand} className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition">Passen</button>
              </div>
            )}

            {gameOver && (
              <div className="mt-6">
                <p className="text-2xl font-bold mb-4">{result}</p>
                <button onClick={startGame} className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md">Nochmal spielen</button>
              </div>
            )}
          </div>

          <div className="mt-10">
            <a href="/projekte/webgames" className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-teal-400 hover:text-white transition-all shadow-md">
              Zurück zur Übersicht
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
