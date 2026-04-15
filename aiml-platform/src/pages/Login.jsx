import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    const ok = login(email, password);
    if (ok) navigate(from);
    else alert("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="card p-8 w-full max-w-sm relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold text-cyan-600">
          Login
        </h1>

        <input
          className="w-full border p-3 rounded-xl mt-6"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded-xl mt-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="btn-primary w-full mt-5">
          Login
        </button>

        <p className="text-sm text-gray-500 mt-4">
          No account? <Link className="text-cyan-600" to="/signup">Signup</Link>
        </p>

      </div>

    </div>
  );
}
