import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";

const links = [
  { name: "Početna", destination: "/" },
  { name: "Portfolio", destination: "/portfolio" },
  { name: "Usluge", destination: "/usluge" },
  { name: "O nama", destination: "/onama" },
  { name: "Kontakt", destination: "/kontakt" },
];

const Navbar = () => {
  const [navbarShow, setNavbarShow] = useState(false);

  const navSlide = () => {
    setNavbarShow(!navbarShow);
  };

  return (
    <div
      id="navbar"
      className={` navbar-active ${navbarShow ? "navbar-show" : "navbar-hide"}`}
      style={{
        width: "100%",
        zIndex: "10",
      }}
    >
      <div className="container p0 w-100 ">
        <div className="bg-primary-light w-nav shadow-soft">
          <nav className="d-flex just-end">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.destination}
                className="w-nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="navButton" onClick={navSlide}>
          <MdKeyboardArrowDown
            className={`navIcon ${navbarShow ? "rotate" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
