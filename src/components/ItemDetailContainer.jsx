import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const producto = {
  id: 1,
  image: "./images/bologna.png",
  title: "Cerámica de interior 50 x 50 cm Bologna gris 2.3 m2",
  price: 5.701,
};

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
