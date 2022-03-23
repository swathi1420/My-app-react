// import React from "react";
// // import "./InputBox.css"


export default function InputBox ({required, className, id, name, value, placeholder, type, onChange }) {
    return <>
      <input 
      className={className} 
      id={id} 
      type={type}
      name={name} 
      value={value} 
      placeholder={placeholder}   
      onChange={onChange}
      required
      />
    </>
}

