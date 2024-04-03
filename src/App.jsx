// import { useState } from 'react';
import Email from './pages/email/email.jsx';
import UserInput from './pages/repeater/repeater.jsx';
import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>

                <Routes>
                    <Route path="/email" element={<Email/>}/>
                    <Route path="/userinput" element={<UserInput/>}/>
                </Routes>


        </>
    )
}

export default App
