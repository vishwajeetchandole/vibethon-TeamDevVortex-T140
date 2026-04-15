import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function AITutor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const { addActivity } = useAuth();

  const handleAsk = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: `🤖 AI: "${input}" is a great question (demo response)` }
    ];

    setMessages(newMessages);
    addActivity("ai", `Asked AI: ${input}`);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE WRAPPER (IMPORTANT FOR VISIBILITY) */}
      <div className="flex flex-col items-center px-6 py-10">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-cyan-600">
          AI Tutor 🤖
        </h1>

        <p className="text-gray-500 mt-2 text-center">
          Ask anything about AI/ML concepts
        </p>

        {/* CHAT BOX */}
        <div className="card w-full max-w-2xl mt-8 p-6">

          {/* MESSAGES */}
          <div className="h-80 overflow-y-auto space-y-3 border-b pb-4">

            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-10">
                Start asking AI questions...
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-xl text-sm w-fit max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-cyan-50 text-right"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          {/* INPUT */}
          <div className="flex gap-2 mt-4">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI something..."
              className="flex-1 border p-3 rounded-xl outline-none focus:border-cyan-500"
            />

            <button onClick={handleAsk} className="btn-primary">
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
