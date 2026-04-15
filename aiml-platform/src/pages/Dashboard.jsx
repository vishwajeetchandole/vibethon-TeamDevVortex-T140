import Navbar from "../components/Navbar";

export default function Dashboard() {
  const user = {
    name: "AI Learner",
    xp: 320,
    level: 4,
    streak: 5,
    completed: 3
  };

  return (
    <div>
      <Navbar />

      <div className="px-8 mt-16">

        <h1 className="text-4xl font-bold text-cyan-400">
          Dashboard 📊
        </h1>

        <p className="text-gray-400 mt-2">
          Track your AI/ML learning progress
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">XP Points</h2>
            <p className="text-3xl font-bold text-cyan-400">{user.xp}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">Level</h2>
            <p className="text-3xl font-bold text-cyan-400">{user.level}</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">Streak 🔥</h2>
            <p className="text-3xl font-bold text-cyan-400">{user.streak} days</p>
          </div>

          <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <h2 className="text-gray-400">Completed</h2>
            <p className="text-3xl font-bold text-cyan-400">{user.completed}</p>
          </div>

        </div>

        {/* Progress Section */}
        <div className="mt-10 p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl">

          <h2 className="text-xl font-semibold text-white">
            Learning Progress 🚀
          </h2>

          <div className="mt-4 w-full bg-gray-800 rounded-full h-3">
            <div className="bg-cyan-500 h-3 rounded-full w-[60%]"></div>
          </div>

          <p className="text-gray-400 mt-2 text-sm">
            60% completed towards next level
          </p>

        </div>

      </div>
    </div>
  );
}
