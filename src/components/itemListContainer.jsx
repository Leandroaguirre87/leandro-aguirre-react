import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { productos } from "./productos";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const getData = new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });

    if (categoria) {
      getData.then((res) =>
        setData(res.filter((producto) => producto.category === categoria))
      );
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoria]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
