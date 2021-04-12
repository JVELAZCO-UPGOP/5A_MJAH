import React from 'react';
import './Alert.css';

function Alert({ alertSwitch = () => {} }) {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            <strong>Oops!</strong> Algo hicimos mal, por favor vuelve a intentarlo.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                onClick={alertSwitch}
            >
                <span aria-hidden="true">X</span>
            </button>
        </div>

    );
}
export default Alert;