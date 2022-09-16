import React from "react";

const CartWidget = () => {
  return (
    <li className="nav-item d-flex justify-content-end">
      <a className="nav-link" href="carro">
        <img src="./images/carrito.png" width="50" alt="carrito" />
      </a>
    </li>
  );
};

export default CartWidget;
