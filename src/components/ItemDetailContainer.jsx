import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { productos } from "./productos";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () =>
      new Promise((resolve) => {
        const product = productos.find((prod) => prod.id === 1);
        setTimeout(() => {
          resolve(product);
        }, 2000);
      });
    getData()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
