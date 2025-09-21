import { Link } from "react-router-dom";
import logo from "/images/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Medisun Pharma" className="h-10" />
        <h1 className="text-2xl font-bold text-green-700">Medisun Pharma</h1>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-600">Home</Link>
        <Link to="/about" className="hover:text-green-600">About</Link>
        <Link to="/products" className="hover:text-green-600">Products</Link>
        <Link to="/contact" className="hover:text-green-600">Contact</Link>
      </div>
    </nav>
  );
}
