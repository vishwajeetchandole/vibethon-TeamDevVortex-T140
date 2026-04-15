import Navbar from "../components/Navbar";
import { modulesData } from "../data/modulesData";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Learn() {
  const { addActivity } = useAuth();
  const navigate = useNavigate();

  const start = (m) => {
    addActivity("learn", `Started ${m.title}`);
    navigate("/quiz");
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-10">

        <h1 className="text-3xl text-cyan-400">Learning Modules</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {modulesData.map((m, i) => (
            <div key={i} className="p-5 bg-gray-900 rounded-xl border border-gray-800">

              <h2 className="text-cyan-400">{m.title}</h2>
              <p className="text-gray-400 text-sm mt-2">{m.desc}</p>

              <button
                onClick={() => start(m)}
                className="mt-4 text-cyan-300"
              >
                Start →
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
