import React, { components } from "react";


function NavBar() {
    return <div>
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Registro</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">SODIMAC HOMECENTER</a>
            </li>
        </ul>
    </div>
}

export default NavBar;