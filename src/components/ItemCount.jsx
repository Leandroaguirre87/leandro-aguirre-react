import React, { useState } from "react";

const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

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

  return (
    <div>
      <div class="card">
        <h5 class="card-title">contador</h5>
        <button onClick={restar}>-</button>
        <input type="text" value={contador} />

        <button onClick={sumar}>+</button>
      </div>
    </div>
  );
};

export default ItemCount;
