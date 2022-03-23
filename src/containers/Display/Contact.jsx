import { useState } from 'react';
import { SubmitButton } from '../../components/Button';
import InputBox from '../../components/Input';
import TextAreaBox from '../../components/Textarea';
import TextArea from '../../components/Textarea';
import { FORM_BUTTON } from './formButton';
import { FORM_CONSTANT } from './formConstant';
import { TEXTAREA_CONSTANT } from './TextareaConstant';


const Contact = () => {
  // const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    // setTimeout(() => {
    //   setSubmitted(true);
    // }, 100);
  };
// function Contact() {
    return (
      
        
      <div className='contact-container'>
        <div className='row'>
          
        </div>
        <form id='contact' >
        <h3>Contact Form</h3>
          {FORM_CONSTANT.map((element) => {
            return <InputBox id={element.id} type={element?.type} placeholder={element?.placeholder} name={element?.name} value={element.username}  label={element.label}   />

          })}
          
          {TEXTAREA_CONSTANT.map((element) => {
          // eslint-disable-next-line react/jsx-no-duplicate-props
          return <TextAreaBox id={element.id} placeholder={element?.placeholder} className={element?.className} name={element?.className}  row={element?.rows} cols={element?.cols} />
          })}

          {FORM_BUTTON.map((element) => {
            return <SubmitButton classMethod={element.classLabel} name={element?.name}  id={element.id} label={element.label} method={(event)  => handleSubmit(element)} />

           
          })}

         
        </form>  
      </div>
      
    );
  }

  export default Contact;