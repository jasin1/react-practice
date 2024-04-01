import './EmailInput.css'
import { useState } from "react";

function EmailInput(){
    const [errorMessage, setErrorMessage]  = useState('');

    function evaluateEmail(event){
        const enteredEmail = event.target.value;
        if(enteredEmail.trim()=== '' || !enteredEmail.includes('@')){
            setErrorMessage('The entered email address is invalid.');
        }else{
            setErrorMessage('');
        }
    }
    return(
        <div>
            <input placeholder="Your mail" type="email" onBlur={evaluateEmail}/>
            <p>{errorMessage}</p>
        </div>
    )

}

export default EmailInput;