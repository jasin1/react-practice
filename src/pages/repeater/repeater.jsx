import './repeater.css';
import{useState} from "react";

function Repeater(){
    const [userInput, setUserInput] = useState('');

    function inputHandler(event){
        setUserInput(event.target.value);
    }

    const numChars = userInput.length;

    return(
        <>
            <input type="text" onChange={inputHandler}/>
            <p>Characters entered: {numChars}</p>
        </>
    )
}

export default Repeater;