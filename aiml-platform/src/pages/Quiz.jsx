import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const quizData = [
  {
    question: "What is supervised learning?",
    options: [
      "Learning without data",
      "Learning with labeled data",
      "Random prediction",
      "No training required"
    ],
    answer: 1
  },
  {
    question: "Which algorithm is used for classification?",
    options: ["K-Means", "Linear Regression", "Decision Tree", "Apriori"],
    answer: 2
  },
  {
    question: "What is overfitting?",
    options: [
      "Model works perfectly",
      "Model memorizes data",
      "Model ignores data",
      "Model trains fast"
    ],
    answer: 1
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const { addActivity } = useAuth();

  const q = quizData[index];

  const handleAnswer = (i) => {
    if (i === q.answer) setScore(score + 1);

    if (index + 1 < quizData.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
      addActivity("quiz", `Scored ${score + 1}/${quizData.length}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      <div className="px-6 mt-10 flex justify-center">

        <div className="card p-8 w-full max-w-xl">

          <h1 className="text-2xl font-bold text-cyan-600">
            AI Quiz Engine 🧠
          </h1>

          {done ? (
            <div className="mt-6 text-center">

              <h2 className="text-xl font-semibold">
                Score: {score}/{quizData.length}
              </h2>

              <button
                onClick={() => {
                  setIndex(0);
                  setScore(0);
                  setDone(false);
                }}
                className="btn-primary mt-4"
              >
                Restart
              </button>

            </div>
          ) : (
            <div className="mt-6">

              <h2 className="font-medium">{q.question}</h2>

              <div className="mt-4 space-y-3">

                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full p-3 border rounded-xl hover:bg-cyan-50 text-left"
                  >
                    {opt}
                  </button>
                ))}

              </div>

              <p className="text-gray-500 text-sm mt-4">
                Question {index + 1}/{quizData.length}
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
