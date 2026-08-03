import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <nav className="navbar">
        <h3 className="logo">
          FIGURE<span>K</span>
        </h3>
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/products">
          Products
        </Link>
        <Link className="links" to="/admin">
          Admin
        </Link>
      </nav>
    </section>
  );
};

export default Navbar;
