import React from 'react';
import "./ModalFooter.css";

function ModalFooter({cambiarModal=() => {}}) {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onclick="resetModal()"
            onClick={cambiarModal}
            >Cerrar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" id="guardar">Agregar</button>
        </div>
    );
}
export default ModalFooter;