import React, { useState } from 'react';
// import './App.css';
import InputBox from "../../components/Input";
import { INPUT_CONSTANT } from "./inputConstant";
import { BUTTON_CONSTANT } from "./buttonConstant";
import LoginButton from '../../components/Button';
import { Redirect } from "react-router-dom";




const App = () => {
  const [input, setInput] = useState({ username: "", password:""});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    return <Redirect to='/dashboard' />


  };
  // let history = useHistory();
  // const handleonSubmit = () => {
  //  history.push("/dashboard");
  // }
  return (
  
    <div className='form-container'>
        <form className='form' onSubmit={handleonSubmit}>
        {INPUT_CONSTANT.map((element) => {
          return <InputBox id={element.id} type={element?.type} placeholder={element?.placeholder} name={element?.name} value={element.username}  label={element.label} method={(event) => handleOnChange(element)} />
      })}
      
      {BUTTON_CONSTANT.map((element) => {
          return <LoginButton classMethod={element.classLabel} name={element?.name}  id={element.id} label={element.label} method={(event) => handleonSubmit(element)} />
          
          
      })}
      </form>
    </div>
    );
    }
    
    export default App;







// return (
  
// <div className='form-container'>
//     <form className='form' onSubmit={handleonSubmit}>
//   <InputBox
//   id="username" 
//   type="text"
//   name="username"
//   value={input.username}
//   placeholder="Username"
//   onChange={handleOnChange}
//   />
//   <InputBox
//   id="password" 
//   type="password"
//   name="password"
//   value={input.password}
//   placeholder="Password"
//   onChange={handleOnChange}
//   />
//   <button type='submit'>Login</button>
//   </form>
// </div>
// );
// }

// export default App;
  