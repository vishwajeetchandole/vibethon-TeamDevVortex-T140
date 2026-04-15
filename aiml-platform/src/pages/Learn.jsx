import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div>
      <Navbar />

      <div className="px-8 mt-16">

        {/* Header */}
        <h1 className="text-4xl font-bold text-cyan-400">
          AI/ML Learning Hub 📚
        </h1>

        <p className="text-gray-400 mt-3 max-w-xl">
          Explore structured learning paths, hands-on practice, and real-world ML concepts in a fun way.
        </p>

        {/* Learning Paths */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-cyan-500 transition">
            <h2 className="text-cyan-400 text-xl font-semibold">
              ML Basics
            </h2>
            <p className="text-gray-400 mt-2">
              Learn fundamentals: datasets, models, training, testing.
            </p>
            <button className="mt-4 text-sm text-cyan-400 hover:underline">
              Start Learning →
            </button>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-cyan-500 transition">
            <h2 className="text-cyan-400 text-xl font-semibold">
              Data Science
            </h2>
            <p className="text-gray-400 mt-2">
              Data cleaning, visualization, and feature engineering.
            </p>
            <button className="mt-4 text-sm text-cyan-400 hover:underline">
              Start Learning →
            </button>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-cyan-500 transition">
            <h2 className="text-cyan-400 text-xl font-semibold">
              Deep Learning
            </h2>
            <p className="text-gray-400 mt-2">
              Neural networks, CNNs, RNNs, and modern AI systems.
            </p>
            <button className="mt-4 text-sm text-cyan-400 hover:underline">
              Start Learning →
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">
            🔥 Today's Challenge
          </h2>
          <p className="text-gray-400 mt-2">
            Try building a simple linear regression model and understand how predictions are made.
          </p>

          <Link
            to="/quiz"
            className="inline-block mt-4 px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold"
          >
            Take Quiz →
          </Link>
        </div>

      </div>
    </div>
  );
}
