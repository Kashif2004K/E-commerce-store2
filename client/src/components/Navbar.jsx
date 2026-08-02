import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Producst</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
