import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div>
      <Navbar />

      <div className="text-center mt-24">

        <h1 className="text-5xl text-cyan-400 font-bold">
          AIML Learning Platform ⚡
        </h1>

        <p className="text-gray-400 mt-4">
          Learn AI/ML with games, quizzes & playground
        </p>

        <button
          onClick={() => navigate(user ? "/learn" : "/login")}
          className="mt-8 px-6 py-3 bg-cyan-500 text-black rounded-lg"
        >
          Start Learning 🚀
        </button>

      </div>
    </div>
  );
}
