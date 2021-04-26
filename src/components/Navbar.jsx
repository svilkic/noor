import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-nav">
      <div className="w-container">
        <a href="#" className="w-nav-brand"></a>
        <nav className="w-nav-menu">
          <Link to="/" className="w-nav-link">
            Home
          </Link>
          <Link to="#" className="w-nav-link">
            O nama
          </Link>
          <Link to="/kontakt" className="w-nav-link">
            Kontakt
          </Link>
          <Link to="#" className="w-nav-link">
            Usluge
          </Link>
          <Link to="#" className="w-nav-link">
            Portfolio
          </Link>
        </nav>
        <div className="w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
      <div className="w-nav-overlay"></div>
    </div>
  );
};

export default Navbar;
