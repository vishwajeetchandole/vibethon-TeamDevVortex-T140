export default function FeatureCard({ title, desc, icon }) {
  return (
    <div className="card card-hover p-6">

      <div className="text-3xl">{icon}</div>

      <h3 className="text-cyan-600 font-semibold mt-3">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-2">
        {desc}
      </p>

    </div>
  );
}
