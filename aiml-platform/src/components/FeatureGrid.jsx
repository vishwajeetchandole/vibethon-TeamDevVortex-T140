import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  const features = [
    {
      title: "Interactive Learning",
      desc: "Structured AI/ML modules with clarity",
      icon: "📚"
    },
    {
      title: "Gamified Quizzes",
      desc: "Test knowledge instantly",
      icon: "🧠"
    },
    {
      title: "ML Playground",
      desc: "Train models visually",
      icon: "⚙️"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
}
