import React from 'react';
import BotonAccion from "../BotonAccion";
import "./Fila.css"

function Fila({mascota,index}) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{mascota.tipo}</td>
            <td>{mascota.nombre}</td>
            <td>{mascota.dueno}</td>
            <div className="btn-group" role="group" aria-label="Basic example">
                <BotonAccion tipo="editar"/>
                <BotonAccion tipo="eliminar"/>
            </div>
        </tr>
    );
}

export default Fila;