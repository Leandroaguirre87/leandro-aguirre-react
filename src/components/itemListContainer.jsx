import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
  {
    id: 1,
    image: "./images/bologna.png",
    title: "Cerámica de interior 50 x 50 cm Bologna gris 2.3 m2",
    price: 5.701,
  },
  {
    id: 2,
    image: "./images/bari.png",
    title: "Kit de inodoro con depósito y accesorios Bari blanco",
    price: 58.509,
  },
  {
    id: 3,
    image: "./images/taladro.png",
    title: "Taladro percutor inalámbrico 18 V",
    price: 51.199,
  },
  {
    id: 4,
    image: "./images/albalatex.png",
    title: "Pintura látex de interior blanco mate lavable 20 L",
    price: 18.029,
  },
  {
    id: 5,
    image: "./images/weberimp.png",
    title: "Pegamento para cerámica impermeable 30 kg con ceresita",
    price: 1.259,
  },
  {
    id: 6,
    image: "./images/tablet.png",
    title: "Tablet Proton Neon Pro 32 GB 2 GB RAM",
    price: 18.709,
  },
];

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <div>
      <ItemCount stock="5" initial={1} onAdd={0} />
      <h1 className="text-center">{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
