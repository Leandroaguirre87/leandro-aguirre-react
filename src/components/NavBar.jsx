import React from "react";
import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div className="container">
      <ul className="nav d-flex align-items-center">
        <a className="navbar" href="logo">
          <img src={logo} alt="sodi" />
        </a>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="productos">
            Productos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="registro">
            Registro
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="nosotros">
            Nosotros
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
