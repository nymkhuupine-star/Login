import { useState } from "react";
import "./App.css";

function Input({ onChange, type, value, name, placeholder }) {
  return (
    <>
      <div className="od"></div>
      <input
        type={type}
        className="first"
        placeholder={placeholder ? placeholder : "placeholder"}
        onChange={onChange}
        name={name}
        value={value}
      />
    </>
  );
}
export default Input;
