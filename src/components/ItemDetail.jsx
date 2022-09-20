import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  const onAdd = () => {
    console.log("agregaste al carrito");
  };

  return (
    <div className="container">
      <img src={data.image} width={100} alt={data.title} />
      <div>
        <h2 className="text-center">{data.title}</h2>
        <p className="text-center">${data.price}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
