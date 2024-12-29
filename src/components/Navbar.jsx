import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Navbar.css"; // Import the new custom CSS file

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          VENUS PLACEMENTS
        </NavLink>
        <nav className="navbar-links">
          <NavLink to="/" className="navbar-link">Home</NavLink>
          <NavLink to="/about" className="navbar-link">About Us</NavLink>
          <NavLink to="/contact" className="navbar-button">Contact Us</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
