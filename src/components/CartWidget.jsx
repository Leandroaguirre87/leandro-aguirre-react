import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <li className="nav-item d-flex justify-content-end">
      <NavLink className="nav-link" to="/cart">
        <img src="./images/carrito.png" width="50" alt="carrito" />
      </NavLink>
    </li>
  );
};

export default CartWidget;
