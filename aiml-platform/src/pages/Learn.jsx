import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Learn() {
  const navigate = useNavigate();

  const modules = [
    { title: "ML Basics", desc: "Intro to ML concepts" },
    { title: "Data Science", desc: "Data handling & analysis" },
    { title: "Deep Learning", desc: "Neural networks" }
  ];

  return (
    <div>

      <Navbar />

      <div className="px-10 mt-10">

        <h1 className="text-3xl font-bold">Learning Modules</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {modules.map((m, i) => (
            <div key={i} className="card card-hover p-6">

              <h2 className="text-cyan-600 font-semibold">
                {m.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {m.desc}
              </p>

              <button
                onClick={() => navigate("/quiz")}
                className="btn-secondary mt-4"
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
