export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-xl bg-black/40">

      <h1 className="text-xl font-bold text-cyan-400">
        AIML Verse ⚡
      </h1>

      <div className="flex gap-6 text-sm text-gray-300">
        {["Learn", "Practice", "Games", "Quiz"].map((item) => (
          <p
            key={item}
            className="hover:text-cyan-400 cursor-pointer transition"
          >
            {item}
          </p>
        ))}
      </div>

    </div>
  );
}
