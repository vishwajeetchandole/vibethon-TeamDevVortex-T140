import { motion } from "framer-motion";

export default function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-400 hover:shadow-[0_0_20px_#22d3ee30]"
    >
      <h2 className="text-cyan-400 text-xl font-semibold">
        {title}
      </h2>

      <p className="text-gray-300 mt-2">
        {desc}
      </p>
    </motion.div>
  );
}
