import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) return alert("Fill all fields 😤");

    signup(email, password);
    navigate("/learn");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      {/* CARD */}
      <div className="card p-8 w-full max-w-sm">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-cyan-600 text-center">
          Create Account 🚀
        </h1>

        <p className="text-gray-500 text-sm text-center mt-2">
          Start your AI/ML learning journey
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          className="w-full border p-3 rounded-xl mt-6 outline-none focus:border-cyan-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mt-3 outline-none focus:border-cyan-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* SIGNUP BUTTON */}
        <button
          onClick={handleSignup}
          className="btn-primary w-full mt-5"
        >
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-gray-500 mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-600 hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}
