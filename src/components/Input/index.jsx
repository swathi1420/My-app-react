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

// const InputBox = ({ id, name, value, placeholder, type, onChange }) => {
//     return(
//     <div className="input-group">
//         <input 
//         id={id}
//         type={type} 
//         name={name} 
//         value={value} 
//         placeholder={placeholder}
//         onChange={(e) => onChange(e)} 
//         required
//         />
//     </div>
//     );
// };

// export default InputBox;