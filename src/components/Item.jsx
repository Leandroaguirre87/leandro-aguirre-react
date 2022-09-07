import React from "react";

const Item = ({ info }) => {
  return (
    <div>
      <img src={info.image} /> ,<p> {info.title} </p>
      <p>{info.price} </p>
    </div>
  );
};

export default Item;
