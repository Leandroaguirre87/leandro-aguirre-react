import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
};

export default ItemDetailContainer;
