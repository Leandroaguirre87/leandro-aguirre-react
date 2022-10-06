import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import Form from "./Form";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();

  const [orderId, setOrderId] = useState("");

  const handleId = (numeroDeOrden) => {
    setOrderId(numeroDeOrden);
  };

  if (cart.lengh === 0) {
    return (
      <div>
        <p>no tenes productos</p>
        <Link to="/">ir al home</Link>
      </div>
    );
  }

  if (orderId) {
    return (
      <div>
        <p>gracias por tu compra</p>
        <p>te dejamos el codigo de referencia: {orderId}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Form handleId={handleId} />
        </div>
        <div className="col-md-6">
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <p>total a pagar{totalPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
