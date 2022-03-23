
export default function TextAreaBox ({ id, placeholder, name, rows, cols }) {
    return <>
      <textarea 
      id={id}
      name={name}  
      placeholder={placeholder} 
      rows={rows}
      cols={cols}
      />
    </>
}
