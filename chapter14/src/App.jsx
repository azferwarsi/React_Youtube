
import { useState } from 'react'
import './App.css'

function App() {
  
  const [pending,setPending]=useState(false)
  const handleButton=async()=>{
    setPending(true)
    await new Promise(res=>setTimeout(res,2000))
    
    setPending(false)
  }
  return (
    <>
     <h1>useTransition Hook in React Js</h1>
     <button disabled={pending} onClick={handleButton}>Click</button>
    </>
  )
}

export default App
