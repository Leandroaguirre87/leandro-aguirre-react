import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";

const Form = ({ handleId }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const { cart, totalPrice } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      buyer: { nombre, direccion, email },
      cart: cart,
      date: serverTimestamp(),
      total: totalPrice(),
    };

    const db = getFirestore();

    const refOrden = collection(db, "orders");

    addDoc(refOrden, orden).then((res) => handleId(res.id));
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDireccion = (e) => {
    setDireccion(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          onChange={handleNombre}
          value={nombre}
          type="text"
          className="form-control"
          id="nombre"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">
          Direccion
        </label>
        <input
          onChange={handleDireccion}
          value={direccion}
          type="text"
          className="form-control"
          id="direccion"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Generar Orden
      </button>
    </form>
  );
};
export default Form;
