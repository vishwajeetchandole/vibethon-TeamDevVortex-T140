import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    signup(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">

      <div className="p-8 bg-gray-900 rounded-2xl w-96">

        <h1 className="text-2xl text-cyan-400 mb-6">Signup</h1>

        <input className="w-full p-2 mb-3 bg-black border"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input className="w-full p-2 mb-4 bg-black border"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-cyan-500 py-2 rounded"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}
