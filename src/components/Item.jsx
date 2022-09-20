import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="card">
      <img src={info.image} width="100" alt="" />
      <div className="infoCard">
        <h2> {info.title} </h2>
        <h3>{info.price} </h3>
        <Link to={`/product/${info.id}`}>
          <button className="btn-danger">Detalle del Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
