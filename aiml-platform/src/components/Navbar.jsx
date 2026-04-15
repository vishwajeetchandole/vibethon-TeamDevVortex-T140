import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between px-8 py-5 bg-black/40 text-white border-b border-gray-800">

      <Link to="/" className="text-cyan-400 font-bold">
        AIML Verse ⚡
      </Link>

      <div className="flex gap-5 text-sm">
        <Link to="/learn">Learn</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/games">Games</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <div className="flex gap-3">
        {user ? (
          <button onClick={logout} className="text-red-400">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="text-cyan-400">Signup</Link>
          </>
        )}
      </div>

    </div>
  );
}
