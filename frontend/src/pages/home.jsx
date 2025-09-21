import Hero from "../components/hero";
import MedCard from "../components/medcard";
import { useEffect, useState } from "react";

export default function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/meds") // fetch medicines from backend
      .then((res) => res.json())
      .then((data) => {
        // Pick first 3 as featured products
        setFeatured(data.slice(0, 3));
      });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="px-8 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          Featured Medicines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((med) => (
            <MedCard key={med._id} med={med} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="px-8 py-16 bg-gradient-to-r from-green-100 to-green-200 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Medisun Pharma is dedicated to delivering trusted medicines and
          healthcare solutions. With a focus on innovation and quality, we aim
          to improve lives every day.
        </p>
      </section>
    </div>
  );
}
