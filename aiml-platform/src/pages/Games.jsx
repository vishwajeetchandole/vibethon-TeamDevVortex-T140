import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const gameData = [
  {
    question: "Which model is best for clustering?",
    options: ["KNN", "K-Means", "SVM", "Linear Regression"],
    answer: 1
  },
  {
    question: "Which is used for regression?",
    options: ["Decision Tree", "Linear Regression", "CNN", "Naive Bayes"],
    answer: 1
  },
  {
    question: "AI that imitates brain is?",
    options: ["ML", "DL", "NLP", "CV"],
    answer: 1
  }
];

export default function Games() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const { addActivity } = useAuth();

  const q = gameData[index];

  const handleClick = (i) => {
    if (i === q.answer) setScore(score + 1);

    if (index + 1 < gameData.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
      addActivity("game", `Game Score ${score + 1}/${gameData.length}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      <div className="flex justify-center px-6 mt-10">

        <div className="card p-8 w-full max-w-xl">

          <h1 className="text-2xl font-bold text-cyan-600">
            ML Guess Game 🎮
          </h1>

          {done ? (
            <div className="mt-6 text-center">

              <h2 className="text-xl font-semibold">
                Score: {score}/{gameData.length}
              </h2>

              <button
                onClick={() => {
                  setIndex(0);
                  setScore(0);
                  setDone(false);
                }}
                className="btn-primary mt-4"
              >
                Play Again
              </button>

            </div>
          ) : (
            <div className="mt-6">

              <h2 className="font-medium">{q.question}</h2>

              <div className="mt-4 space-y-3">

                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(i)}
                    className="w-full p-3 border rounded-xl hover:bg-cyan-50 text-left"
                  >
                    {opt}
                  </button>
                ))}

              </div>

              <p className="text-gray-500 text-sm mt-4">
                Level {index + 1}/{gameData.length}
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
