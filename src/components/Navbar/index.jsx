// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link to="/home">Home</Link>
      </div>
      <div className="navbar-center">
        <Link to="/analyze">Analyze</Link>
        <Link to="/moderate">Moderate</Link>
      </div>
      <div className="navbar-end">
        <Link to="/account">Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;
