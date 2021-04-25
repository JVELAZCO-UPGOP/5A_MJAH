import React,{useState} from 'react';
import './ActionsMenu.css';
import Alert from "../Alert";

function ActionsMenu({cambiarModal = () => {}, titulo}) {
    return( 
        <div className="containerActions">
            <h1>{titulo}</h1>
            <div className="actions-menu-content">
                <button type="button" 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                onClick={cambiarModal}
                >
                Agregar</button>
            </div>
        </div>)
}

export default ActionsMenu;