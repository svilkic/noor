import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-nav">
      <div className="w-container">
        <a href="#" className="w-nav-brand"></a>
        <nav className="w-nav-menu">
          <a href="#" className="w-nav-link">
            Home
          </a>
          <a href="#" className="w-nav-link">
            O nama
          </a>
          <a href="#" className="w-nav-link">
            Kontakt
          </a>
          <a href="#" className="w-nav-link">
            Usluge
          </a>
          <a href="#" className="w-nav-link">
            Portfolio
          </a>
        </nav>
        <div className="w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
      <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
    </div>
  );
};

export default Navbar;
