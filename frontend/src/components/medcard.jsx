export default function MedCard({ med }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition">
      <img src={med.image} alt={med.name} className="w-full h-40 object-contain mb-3" />
      <h3 className="text-xl font-semibold text-green-700">{med.name}</h3>
      <p className="text-gray-600 text-sm mt-2">{med.category}</p>
    </div>
  );
}
