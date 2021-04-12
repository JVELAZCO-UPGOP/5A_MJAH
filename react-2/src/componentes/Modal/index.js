import React from 'react';
import ModalHeader from "./ModalHeader";
import Select from "../Select";
import "./Modal.css";
import ModalFooter from './ModalFooter';

const tiposMascota = [
    {valor: "perro" , etiqueta: "perro"},
    {valor: "gato" ,etiqueta: "gato"},
    {valor: "pájaro" , etiqueta: "pájaro"},
    ]
function Modal({cambiarModal = () => {}}) {
    return (
        <>
        <div className="modal" data-backdrop="static" data-keyboard="false" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true" href="#">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader cambiarModal={cambiarModal}/>
                    <div className="modal-body">
                        <form action="" id="formulario">
                            <Select options= {tiposMascota}
                                            nombreCampo= "" 
                                            />
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre de la mascota</label>
                                <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />

                                <label for="dueño" className="form-label">Dueño de la mascota</label>
                                <input type="text" className="form-control" id="dueno" aria-describedby="emailHelp" />
                            </div>
                            <ModalFooter cambiarModal={cambiarModal}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal;