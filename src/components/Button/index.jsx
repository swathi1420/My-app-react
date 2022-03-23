export default function LoginButton ({ method, id, name, label,   classLabel }) {
    return <>
      <button
      
      className={classLabel} 
      onClick={method} 
      name={name}
      
      id={id}>{label}</button>
      
      
    </>
}

export function SubmitButton ({ method, id, name, label,classLabel }) {
  return <>
  <button
      className={classLabel} 
      onClick={method} 
      name={name}
      
      id={id}>{label}</button>
  </>
}