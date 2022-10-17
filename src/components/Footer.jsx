import React from "react";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="d-flex justify-content-end">
        <img src="./images/banderas.svg" width="50" alt="bandera" />
        <p>Argentina</p>
      </div>
      <h6 className="text-center">
        Todos los derechos reservados Sodimac S.A. 2022
      </h6>
      <div className="d-flex justify-content-center">
        <img
          src="./images/datafiscal-centrado.svg"
          width="100"
          alt="datafiscal"
        />
      </div>
    </div>
  );
};

export default Footer;
