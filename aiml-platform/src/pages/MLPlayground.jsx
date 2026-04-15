import { useState } from "react";
import Navbar from "../components/Navbar";

export default function MLPlayground() {
  const [file, setFile] = useState(null);
  const [training, setTraining] = useState(false);
  const [accuracy, setAccuracy] = useState(null);

  const handleTrain = () => {
    if (!file) return alert("Upload dataset first 😤");

    setTraining(true);
    setAccuracy(null);

    setTimeout(() => {
      const fakeAccuracy = (Math.random() * 20 + 75).toFixed(2);
      setAccuracy(fakeAccuracy);
      setTraining(false);
    }, 2000);
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-16 text-center">

        <h1 className="text-4xl font-bold text-cyan-400">
          ML Playground ⚙️
        </h1>

        <p className="text-gray-400 mt-3">
          Upload dataset → Train model → See AI results
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

          <button
            onClick={handleTrain}
            className="mt-6 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold"
          >
            Train Model 🚀
          </button>

        </div>

        {/* Training State */}
        {training && (
          <div className="mt-10 text-yellow-400 animate-pulse">
            Training AI Model... ⚡
          </div>
        )}

        {/* Result */}
        {accuracy && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              Model Accuracy: {accuracy}%
            </h2>

            <p className="text-gray-400 mt-2">
              (Simulated AI training result)
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
