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
      const acc = (Math.random() * 20 + 75).toFixed(2);
      setAccuracy(acc);
      setTraining(false);

      addActivity("playground", `Model trained with ${acc}% accuracy`);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      <div className="flex justify-center px-6 mt-10">

        <div className="card p-8 w-full max-w-xl">

          <h1 className="text-2xl font-bold text-cyan-600">
            ML Playground ⚙️
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Upload dataset → Train model → Get AI result
          </p>

          <input
            type="file"
            className="mt-6 w-full border p-3 rounded-xl"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="text-green-600 mt-3 text-sm">
              Selected: {file.name}
            </p>
          )}

          <button
            onClick={handleTrain}
            className="btn-primary mt-6 w-full"
          >
            Train Model 🚀
          </button>

          {training && (
            <p className="text-yellow-500 mt-4 text-sm animate-pulse">
              Training AI model...
            </p>
          )}

          {accuracy && (
            <div className="mt-6 text-center">

              <h2 className="text-xl font-semibold">
                Accuracy: {accuracy}%
              </h2>

              <p className="text-gray-500 text-sm">
                Simulated ML training result
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
