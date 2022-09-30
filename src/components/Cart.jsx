import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div>
        <p>No hay productos en el carrito!</p>
        <Link to="/">
          <button>Seguir de Compras</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
      <div className="col-md-4">
        <button className="btn btn-danger" onClick={clearCart}>
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
