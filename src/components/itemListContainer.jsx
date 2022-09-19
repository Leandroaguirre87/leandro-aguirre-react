import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { productos } from "./productos";

function ItemListContainer() {
  const [data, setData] = useState(0);

  useEffect(() => {
    const getData = () =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res(productos);
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
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
