import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return (
    <div className="containerCard">
      {data.map((productos) => {
        return <Item key={productos.id} info={productos} />;
      })}
    </div>
  );
};

export default ItemList;
