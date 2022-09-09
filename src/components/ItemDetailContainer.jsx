import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";

const item = {
  id: 1,
  image: "./images/bologna.png",
  title: "Cerámica de interior 50 x 50 cm Bologna gris 2.3 m2",
  price: 5.701,
};

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 3000);
    });

    getData.then((item) => setProducto(item));
  }, []);

  return <ItemDetail item={producto} />;
};

export default ItemDetailContainer;
