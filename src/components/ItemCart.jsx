import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ product }) => {
  const subTotal = product.price * product.quantity;
  const { removeProduct } = useCartContext();

  return (
    <div className="row">
      <div className="col-md-3">
        <img className="imgCart" src={product.image} alt={product.title} />
      </div>
      <div className="col-md-3">
        <p>
          Titulo: {product.title} - ({product.quantity})
        </p>
      </div>
      <div className="col-md-3">Precio:{subTotal}</div>
      <div className="col-md-3">
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
