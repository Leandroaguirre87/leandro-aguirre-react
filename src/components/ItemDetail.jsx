import React from "react";

const ItemDetail = ({ item }) => {
  const { title, price, image } = item;
  const src = require(`${image}`);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={src} alt={title} />
        </div>
        <div className="col-md-6">
          <h2 className="text-center">{title}</h2>
          <p className="text-center">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
