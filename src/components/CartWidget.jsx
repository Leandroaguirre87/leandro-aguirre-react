import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <li className="nav-item d-flex justify-content-end">
        <NavLink className="nav-link" to="/cart">
          <img src="./images/carrito.png" width="50" alt="carrito" />
        </NavLink>
      </li>
      <span> {totalProducts() || ""}</span>
    </div>
  );
};

export default CartWidget;
