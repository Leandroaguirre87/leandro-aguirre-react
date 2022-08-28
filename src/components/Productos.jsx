import React from "react";
import app from "./images/app.png";
import banos from "./images/banos.png";
import herramientas from "./images/herramientas.png";
import pinturas from "./images/pinturas.png";
import pisos from "./images/pisos.png";
import weber from "./images/weber.png";

const Productos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={pisos} alt="pisos" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={banos} alt="banos" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={herramientas} alt="herramientas" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={pinturas} alt="pinturas" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={weber} alt="weber" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={app} alt="app" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Productos;
