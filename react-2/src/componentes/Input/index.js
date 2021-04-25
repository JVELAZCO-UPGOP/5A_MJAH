import React from "react";
import "./Input.css";

function Input({ tipo = "text", nombreCampo, onInput=() => {}, value="",placeholder }) {
  return (
    <div className="mb-3">
      <input type={tipo} name={nombreCampo} placeholder={placeholder} className="form-control" onInput={onInput} defaultValue={value}/>
      {/* <input type={tipo} name="dueno" className="form-control"  onInput={onInput} value={value2} /> */}
    </div>
  );
}

export default Input;
