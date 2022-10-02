import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [data, setData] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    const queryFilter = query(
      queryCollection,
      where("category", "==", categoria)
    );

    getDocs(queryFilter).then((res) =>
      setData(
        res.docs.map((product) => ({ id: product.id, ...product.data() }))
      )
    );

    if (categoria) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoria)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.doc.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoria]);

  return (
    <div>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;
