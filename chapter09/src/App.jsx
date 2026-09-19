
import { useState } from 'react'
import './App.css'
import Clock from './Clock'

function App() {
  const [color,setColor]=useState("pink")

  return (
    <>
     <h1>Digital Clock in React Js</h1>
     <select onChange={(event)=>setColor(event.target.value)}>
      <option value={"red"}>Red</option>
      <option value={"blue"}>Blue</option>
      <option value={"green"}>Green</option>
      <option value={"yellow"}>Yellow</option>
     </select>
     <Clock color={color}/>
    </>
  )
}

export default App
