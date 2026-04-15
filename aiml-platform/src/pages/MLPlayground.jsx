import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function MLPlayground() {
  const [file, setFile] = useState(null);
  const [training, setTraining] = useState(false);
  const [accuracy, setAccuracy] = useState(null);

  const { addActivity } = useAuth();

  const handleTrain = () => {
    if (!file) return alert("Upload dataset first 😤");

    setTraining(true);
    setAccuracy(null);

    setTimeout(() => {
      const fakeAccuracy = (Math.random() * 20 + 75).toFixed(2);

      setAccuracy(fakeAccuracy);
      setTraining(false);

      // 🎯 LOG ACTIVITY + XP
      addActivity(
        "playground",
        `Trained ML Model on ${file.name} → Accuracy ${fakeAccuracy}%`
      );
    }, 2000);
  };

  const reset = () => {
    setFile(null);
    setAccuracy(null);
    setTraining(false);
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-16 text-center">

        <h1 className="text-4xl font-bold text-cyan-400">
          ML Playground ⚙️
        </h1>

        <p className="text-gray-400 mt-3">
          Upload dataset → Train model → Get AI insights
        </p>

        {/* Upload Box */}
        <div className="mt-10 max-w-xl mx-auto bg-gray-900 border border-gray-800 p-6 rounded-2xl">

          <input
            type="file"
            className="w-full text-gray-300"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="text-green-400 mt-3">
              Selected: {file.name}
            </p>
          )}

          <div className="flex gap-3 justify-center mt-6">

            <button
              onClick={handleTrain}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold"
            >
              Train Model 🚀
            </button>

            <button
              onClick={reset}
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg"
            >
              Reset
            </button>

          </div>

        </div>

        {/* Training State */}
        {training && (
          <div className="mt-10 text-yellow-400 animate-pulse">
            Training AI Model... ⚡ Analyzing dataset patterns
          </div>
        )}

        {/* Result */}
        {accuracy && (
          <div className="mt-10">

            <h2 className="text-2xl font-bold text-white">
              Model Accuracy: {accuracy}%
            </h2>

            <p className="text-gray-400 mt-2">
              AI model trained successfully 🎯
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
