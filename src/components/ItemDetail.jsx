import React from "react";

const ItemDetail = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h2 className="text-center">{data.title}</h2>
          <p className="text-center">${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
