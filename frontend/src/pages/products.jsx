import { useEffect, useState } from "react";
import MedCard from "../components/medcard";

export default function Products() {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setMeds(data));
  }, []);

  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {meds.map((med) => (
        <MedCard key={med._id} med={med} />
      ))}
    </section>
  );
}
