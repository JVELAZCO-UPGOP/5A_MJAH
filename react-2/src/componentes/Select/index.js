import React from 'react';
import "./Select.css";

function Select({options= [] , nombreCampo = 'vacio'}) {
    return (
        <>
        <label for="tipo" class="form-label">Seleccione un tipo de mascota</label>
        <select className="form-select">
            <option value="">Seleccione tipo animal {nombreCampo} </option>
            {options.map(({valor,etiqueta}, index) => 
            (<option key={`${nombreCampo}-${index}-${valor}`} 
            value={valor}>{etiqueta}  </option>))}
        </select>
        </>
    );
}

export default Select;