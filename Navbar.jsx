import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold text-white" to="/">
        Smart Home
      </Link>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">Content</div>
      </div>
      <div className="ms-auto d-flex gap-3">
        <Link className="nav-link text-white" to="/">
          Home
        </Link>
        <Link className="nav-link text-white" to="/about">
          About
        </Link>
        <Link className="nav-link text-white" to="/services">
          Services
        </Link>
        <Link className="nav-link text-white" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
