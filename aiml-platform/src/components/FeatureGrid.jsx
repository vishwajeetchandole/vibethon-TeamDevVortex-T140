import FeatureCard from "./FeatureCard";

export default function FeatureGrid() {
  const features = [
    { title: "ML Playground", desc: "Train models in the browser" },
    { title: "AI Quizzes", desc: "Test your ML knowledge" },
    { title: "Mini Games", desc: "Learn through interaction" },
    { title: "Real Projects", desc: "Build production-ready AI apps" },
    { title: "Data Lab", desc: "Work with datasets easily" },
    { title: "AI Tutor", desc: "Instant concept explanations" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-8 mt-20 pb-20">
      {features.map((item, i) => (
        <FeatureCard key={i} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
}
