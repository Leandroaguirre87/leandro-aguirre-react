import React from "react";
import carro from "./images/carrito.png";

const CartWidget = () => {
  return (
    <li className="nav-item d-flex justify-content-end">
      <a className="nav-link" href="carro">
        <img src={carro} width="50" alt="carrito" />
      </a>
    </li>
  );
};

export default CartWidget;
