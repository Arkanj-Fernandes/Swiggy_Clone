import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-brand">Swiggy Clone</h1>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
