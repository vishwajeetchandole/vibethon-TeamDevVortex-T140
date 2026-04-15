import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-xl bg-black/40">

      {/* Logo → Home */}
      <Link to="/" className="text-xl font-bold text-cyan-400">
        AIML Verse ⚡
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-sm text-gray-300">

        <Link to="/learn" className="hover:text-cyan-400 transition">
          Learn
        </Link>

        <Link to="/quiz" className="hover:text-cyan-400 transition">
          Quiz
        </Link>

        <Link to="/games" className="hover:text-cyan-400 transition">
          Games
        </Link>

        <Link to="/playground" className="hover:text-cyan-400 transition">
          Playground
        </Link>

        <Link to="/tutor" className="hover:text-cyan-400 transition">
          AI Tutor
        </Link>

        <Link to="/dashboard" className="hover:text-cyan-400 transition">
          Dashboard
        </Link>

      </div>
    </div>
  );
}
