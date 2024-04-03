import { useState } from 'react';
import EmailInput from './assets/components/EmailInput/EmailInput.jsx';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main>
            <div className="email">
                <EmailInput />
            </div>
        </main>
    </>
  )
}

export default App
