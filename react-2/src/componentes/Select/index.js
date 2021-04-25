import React from "react";
import "./Select.css";

function Select({
    options = [],
    nombreCampo = 'vacio',
    onChange = () => { },
    placeholder,
    value = "",
}) {
    return (
        <select
        id={nombreCampo}
        className="form-select"
        onChange={onChange}
        name={nombreCampo}
        defaultValue={value}
        >
        <option value="">Selecciona {placeholder} </option>
        {options.map(({ valor, etiqueta }, index) =>
        (<option
            key={`${nombreCampo}-${index}-${valor}-${etiqueta}`}
            value={valor}
        >
            {etiqueta}
        </option>))}
    </select>
    );
}

export default Select;