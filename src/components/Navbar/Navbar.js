import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark  navbar-style ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="../Images/meals.png" alt="Logo" width="50" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link className="nav-link px-2" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link px-2" to="/mealpage">
                Meals & Drinks
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link px-2" to="/add_own_recipe">
                Add Recipe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
