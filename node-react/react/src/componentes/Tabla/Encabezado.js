import React from 'react';
import "./Encabezado.css";

function Encabezado(props) {
    if (props.columnas.lenght === 0) return false;
    return (
        <thead className="thead">
            <tr>
                <th scope="col">#</th>
                {props.columnas.map(columna =>
                    (<th scope="col">{columna}</th>
                ))}
                <th scope="col">Action</th>
            </tr>
        </thead>
    );
}
export default Encabezado;