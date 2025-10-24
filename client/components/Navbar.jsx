import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <button onClick={() => window.location.href='/login'}>Login / Signup</button>
  </nav>
);
export default Navbar;
