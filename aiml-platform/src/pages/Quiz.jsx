import { useState } from "react";
import Navbar from "../components/Navbar";
import { quizData } from "../data/quizData";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = quizData[current];

  const handleAnswer = (index) => {
    if (index === question.answer) {
      setScore(score + 1);
    }

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="text-center mt-16 px-6">

        <h1 className="text-4xl font-bold text-cyan-400">
          AI Quiz Engine 🧠
        </h1>

        {showResult ? (
          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              Your Score: {score} / {quizData.length}
            </h2>

            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setShowResult(false);
              }}
              className="mt-6 px-5 py-2 bg-cyan-500 rounded-lg"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="mt-10 max-w-xl mx-auto bg-gray-900 border border-gray-800 p-6 rounded-2xl">

            <h2 className="text-lg font-semibold">
              {question.question}
            </h2>

            <div className="mt-4 space-y-3 text-left">

              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="w-full p-2 bg-black rounded border border-gray-800 hover:border-cyan-500 text-left"
                >
                  {opt}
                </button>
              ))}

            </div>

            <p className="text-gray-400 mt-4 text-sm">
              Question {current + 1} / {quizData.length}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
