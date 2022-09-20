import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      const product = productos.find((prod) => prod.id === id);
      setTimeout(() => {
        resolve(product);
      }, 2000);
    });

    getData.then((data) => setData(data));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
