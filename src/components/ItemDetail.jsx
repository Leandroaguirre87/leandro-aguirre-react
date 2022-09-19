import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <img src="./images/bologna.png" width={100} alt={data.title} />
      <div>
        <h2 className="text-center">{data.title}</h2>
        <p className="text-center">${data.price}</p>
        <ItemCount stock="5" initial={1} onAdd={0} />
      </div>
    </div>
  );
};

export default ItemDetail;
