import React from "react";

const Item = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <div className="infoCard">
        <h2> {data.title} </h2>
        <h3>{data.price} </h3>
        <button className="btn-danger">Detalle del Producto</button>
      </div>
    </div>
  );
};

export default Item;
