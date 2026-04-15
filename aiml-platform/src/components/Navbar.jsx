import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-10 py-5 border-b bg-white">

      {/* LOGO */}
      <Link
        to="/"
        className="text-xl font-bold text-cyan-600"
      >
        AIML Verse ⚡
      </Link>

      {/* LINKS */}
      <div className="flex gap-6 text-sm text-gray-600">
        <Link className="hover:text-cyan-600" to="/learn">Learn</Link>
        <Link className="hover:text-cyan-600" to="/quiz">Quiz</Link>
        <Link className="hover:text-cyan-600" to="/games">Games</Link>
        <Link className="hover:text-cyan-600" to="/playground">Playground</Link>
        <Link className="hover:text-cyan-600" to="/dashboard">Dashboard</Link>
        <Link className="hover:text-cyan-600" to="/aitutor">AI Tutor</Link>
      </div>

      {/* AUTH BUTTON */}
      <div>

        {!user ? (
          <Link
            to="/login"
            className="btn-primary"
          >
            Sign In
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Sign Out
          </button>
        )}

      </div>

    </div>
  );
}
