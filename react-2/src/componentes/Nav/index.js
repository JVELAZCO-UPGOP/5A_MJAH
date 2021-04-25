import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import Search from "../Search/index";

function Nav() {
    return( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                Veterinaria
            </Link>
            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Mascotas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/veterinarias">Veterinarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="consultas">Consultas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="duenos">Dueños</Link>
                    </li>
                </ul>
                <Search/>
            </div>
        </div>
    </nav>);
}

export default Nav;