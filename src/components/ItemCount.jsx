import React, { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);
  const [stock, setStock] = useState(props.stock);

  function sumar() {
    if (contador < props.stock) {
      setContador(contador + 1);
    }
  }

  function restar() {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  function agregar() {
    if (contador <= stock) {
      setStock(stock - contador);
    }
  }

  return (
    <div>
      <div className="card col-md-2">
        <h5 className="card-title text-center">CONTADOR</h5>
        <button onClick={restar}>-</button>
        <p>{contador}</p>

        <button onClick={sumar}>+</button>
      </div>
      <button onClick={agregar} type="button" class="btn btn-outline-success">
        Agregar al Carrito
      </button>
      <p>El stock disponibe es: {stock}</p>
    </div>
  );
};
export default ItemCount;
