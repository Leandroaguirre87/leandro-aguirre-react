import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <ItemCount stock="5" initial={1} />
      <h1 className="text-center">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
