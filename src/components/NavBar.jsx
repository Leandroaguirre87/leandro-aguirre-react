import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <ul className="nav d-flex align-items-center">
        <NavLink className="navbar" to="/">
          <img src="./images/logo.png" alt="sodi" />
        </NavLink>
        <li className="nav-item">
          <NavLink
            className="nav-link active"
            aria-current="page"
            to="/Productos"
          >
            Productos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Registro">
            Registro
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Nosotros">
            Nosotros
          </NavLink>
        </li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default NavBar;
