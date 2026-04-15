import { useState } from "react";
import Navbar from "../components/Navbar";
import { gameData } from "../data/gameData";
import { useAuth } from "../context/AuthContext";

export default function Games() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const { addActivity } = useAuth();

  const question = gameData[index];

  const handleClick = (i) => {
    let newScore = score;

    if (i === question.answer) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (index + 1 < gameData.length) {
      setIndex(index + 1);
    } else {
      setDone(true);

      // 🎯 LOG ACTIVITY + XP
      addActivity(
        "game",
        `Completed ML Guess Game - Score ${newScore}/${gameData.length}`
      );
    }
  };

  const restartGame = () => {
    setIndex(0);
    setScore(0);
    setDone(false);
  };

  return (
    <div>
      <Navbar />

      <div className="text-center mt-16 px-6">

        <h1 className="text-4xl font-bold text-cyan-400">
          ML Guess Game 🎮
        </h1>

        {done ? (
          <div className="mt-10">

            <h2 className="text-2xl font-bold text-white">
              Your Score: {score} / {gameData.length}
            </h2>

            <p className="text-gray-400 mt-2">
              {score === gameData.length
                ? "Perfect AI Mind 🔥"
                : "Good try! Keep learning 🚀"}
            </p>

            <button
              onClick={restartGame}
              className="mt-6 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
            >
              Play Again
            </button>

          </div>
        ) : (
          <div className="mt-10 max-w-xl mx-auto bg-gray-900 border border-gray-800 p-6 rounded-2xl">

            <h2 className="text-lg font-semibold text-white">
              {question.question}
            </h2>

            <div className="mt-4 space-y-3 text-left">

              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(i)}
                  className="w-full p-2 bg-black rounded border border-gray-800 hover:border-cyan-500 text-left transition"
                >
                  {opt}
                </button>
              ))}

            </div>

            <p className="text-gray-400 mt-4 text-sm">
              Level {index + 1} / {gameData.length}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
