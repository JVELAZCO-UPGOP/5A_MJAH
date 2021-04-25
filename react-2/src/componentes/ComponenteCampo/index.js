import React, { useState, useEffect } from "react";
import Input from "../Input";
import Select from "../Select";

function ComponenteCampo({
    manejarInput = () => { },
    objeto = {},
    nombreCampo = "",
    options = {},
}) {
    switch (nombreCampo) {
        case 'tipo':
        case 'mascota':
        case 'veterinaria':
        case 'diagnostico':
        case 'dueno':
            return (
                <div className="form-row">
                    {options[nombreCampo].length > 0 ? (
                    <Select
                        nombreCampo={nombreCampo}
                        options={options[nombreCampo]}
                        onChange={manejarInput}
                        placeholder={nombreCampo}
                        DefaultValue={objeto[nombreCampo]}
                        SelectedValue={objeto[nombreCampo]}
                        value={objeto[nombreCampo]}
                    />
            ) : 'Cargando opciones...'}
                </div>
            );
        case 'nombre':
        case 'apellidos':
        case 'identificacion':
        case 'historia':
            return (
                <Input
                    nombreCampo={nombreCampo}
                    tipo="text"
                    onInput={manejarInput}
                    placeholder={nombreCampo}
                    value={objeto[nombreCampo]}
                />
            );
        default:
            return false;
    }
}

export default ComponenteCampo;