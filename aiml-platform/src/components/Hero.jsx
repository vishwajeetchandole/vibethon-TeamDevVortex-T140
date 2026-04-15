import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-center mt-20 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold"
      >
        Learn AI & ML the{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_20px_#22d3ee]">
          Fun Way
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mt-5 max-w-xl mx-auto"
      >
        Interactive AI learning platform with coding, games, quizzes, and real-world simulations.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold shadow-lg shadow-cyan-500/30"
      >
        Start Learning 🚀
      </motion.button>

    </div>
  );
}
