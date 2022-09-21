import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`);
    setGoToCart(true);
  };

  return (
    <div className="container">
      <img src={data.image} width={100} alt={data.title} />
      <div>
        <h2 className="text-center">{data.title}</h2>
        <h1 className="text-center">${data.price}</h1>
        {goToCart ? (
          <Link to="/cart">Finalizar Compra</Link>
        ) : (
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
