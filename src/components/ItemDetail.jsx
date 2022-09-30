import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    console.log(`compraste ${quantity} unidades`);
    addProduct(data, quantity);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 ">
          <img
            className="img-fluid"
            src={data.image}
            width={100}
            alt={data.title}
          />
          <div>
            <h2 className="text-center">{data.title}</h2>
            <h1 className="text-center">${data.price}</h1>
            <div></div>{" "}
            {goToCart ? (
              <Link to="/cart">
                <button className="btn btn-success"> Finalizar Compra</button>
              </Link>
            ) : (
              <ItemCount initial={1} stock={5} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
