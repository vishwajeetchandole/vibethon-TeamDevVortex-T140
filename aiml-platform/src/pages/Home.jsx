import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";

export default function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <div className="px-10 mt-16">
        <FeatureGrid />
      </div>

    </div>
  );
}
