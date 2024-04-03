// import { useState } from 'react';
import Email from './pages/email/email.jsx';
import './App.css';
import {Routes, Route} from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>

                <Routes>
                    <Route path="/email" element={<Email/>}/>
                </Routes>


        </>
    )
}

export default App
