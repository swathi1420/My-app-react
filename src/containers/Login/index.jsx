import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../components/Button';
// import './App.css';
import InputBox from "../../components/Input";
import { BUTTON_CONSTANT } from "./buttonConstant";
import { INPUT_CONSTANT } from "./inputConstant";




const App = () => {
  const [input, setInput] = useState({ username: "", password:""});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    
   


  };
 
  return (
  
    <div className='form-container'>
        <form className='form' onSubmit={handleonSubmit}>
        {INPUT_CONSTANT.map((element) => {
          return <InputBox id={element.id} type={element?.type} placeholder={element?.placeholder} name={element?.name} value={element.username}  label={element.label} method={(event) => handleOnChange(element)} />
      })}
      
      {BUTTON_CONSTANT.map((element) => {
        
          return  <Link to ="/dashboard"> <LoginButton classMethod={element.classLabel} name={element?.name}  id={element.id} label={element.label} method={(event) => handleonSubmit(element)} />
          </Link>
          
      })}
      
      </form>
    </div>
    );
    }
    
    export default App;







