// states in react

import { useState } from "react"


export default function Demo(){
  let [fruit,setFruit]=useState("Apple")
  const handleFruit=()=>{
    setFruit("Banana")
     
  }
  return(
    <div>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change fruit name</button>
    </div>
  )
}