import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AITutor() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey! I’m your AI Tutor 🤖 Ask me anything about ML!" }
  ]);

  const [input, setInput] = useState("");

  const fakeResponses = [
    "Neural Networks are inspired by the human brain 🧠",
    "Overfitting happens when your model memorizes data instead of learning patterns.",
    "Gradient Descent helps optimize model accuracy.",
    "KNN classifies based on nearest neighbors 📊",
    "Decision Trees split data based on conditions 🌳"
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    const botMsg = {
      role: "bot",
      text: fakeResponses[Math.floor(Math.random() * fakeResponses.length)]
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-10">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          AI Tutor 🤖
        </h1>

        {/* Chat Box */}
        <div className="mt-10 max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-4 h-[500px] flex flex-col">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-2">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%] ${
                  msg.role === "user"
                    ? "ml-auto bg-cyan-500 text-black"
                    : "bg-black border border-gray-700 text-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="flex gap-2 mt-3">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-black border border-gray-700 rounded-lg text-white"
              placeholder="Ask about ML..."
            />

            <button
              onClick={sendMessage}
              className="px-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
            >
              Send
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
