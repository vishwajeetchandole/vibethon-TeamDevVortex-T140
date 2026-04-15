import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center mt-20 text-white">
        Please login first 😤
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-16">

        <h1 className="text-4xl font-bold text-cyan-400">
          Dashboard 📊
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">XP</h2>
            <p className="text-3xl text-cyan-400">{user.xp}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">Streak</h2>
            <p className="text-3xl text-cyan-400">{user.streak}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">Activities</h2>
            <p className="text-3xl text-cyan-400">{user.history.length}</p>
          </div>

        </div>

        {/* Activity History */}
        <div className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">

          <h2 className="text-xl text-white mb-4">
            Activity History 🧠
          </h2>

          {user.history.length === 0 ? (
            <p className="text-gray-400">No activity yet</p>
          ) : (
            <div className="space-y-3">
              {user.history.map((h, i) => (
                <div key={i} className="p-3 bg-gray-900 rounded-lg">
                  <p className="text-cyan-400">{h.type}</p>
                  <p className="text-white">{h.title}</p>
                  <p className="text-gray-500 text-sm">{h.date}</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
