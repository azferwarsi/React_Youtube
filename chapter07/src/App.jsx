
import { useState } from 'react'
import './App.css'

function App() {
  const [val,setVal]=useState("")

  return (
    <>
      <h1>Get input field Value</h1>
      <input type="text" placeholder='Enter user name' onChange={(event)=>setVal(event.target.value)} value={val} />
      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>Clear value</button>
    </>
  )
}

export default App
