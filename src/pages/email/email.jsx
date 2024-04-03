import './email.css';
import EmailInput from '../../assets/components/EmailInput/EmailInput.jsx';
import { useState } from "react";

function email(){
    const [counter, setCounter] = useState(0);

    function incrementCounterHandler(){
        setCounter(prevCounter => prevCounter + 1);
    }


    return(
        <main>
            <div className="email">
                <EmailInput/>
            </div>
            <div>
                <p>Counter Value: {counter}</p>
                <button onClick={incrementCounterHandler}>Increment</button>
            </div>
        </main>
    )
}

export default email;