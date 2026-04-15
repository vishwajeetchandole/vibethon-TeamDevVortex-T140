import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-24 px-6">

      <h1 className="text-5xl font-bold">
        Learn AI & ML Like a Pro 🚀
      </h1>

      <p className="text-gray-500 mt-4">
        Interactive learning • Games • Quizzes • AI simulations
      </p>

      <div className="mt-8 flex gap-4 justify-center">

        <button
          onClick={() => navigate("/learn")}
          className="btn-primary"
        >
          Start Learning
        </button>

        <button
          onClick={() => navigate("/quiz")}
          className="btn-secondary"
        >
          Try Quiz
        </button>

      </div>

    </div>
  );
}
