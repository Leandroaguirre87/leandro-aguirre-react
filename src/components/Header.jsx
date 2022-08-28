import React from "react";
import logo from "./images/logo.png";
import carrito from "./images/carrito.png";

const Header = () => {
  return (
    <div className="container">
      <ul className="nav d-flex align-items-center">
        <a className="navbar">
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
        <li className="nav-item">
          <a className="nav-link" href="carro">
            Carrito <img src={carrito} width="50" alt="carrito" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
