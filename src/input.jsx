import { useState } from "react";
import "./App.css";

function Input({ onChange, type, value, name, placeholder, className }) {
  return (
    <>
      <div className="od"></div>
      <input
        type={type}
        placeholder={placeholder ? placeholder : " placeholder"}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
      />
    </>
  );
}
export default Input;
