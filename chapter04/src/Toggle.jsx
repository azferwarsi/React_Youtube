import { useState } from "react";

export default function Toggle(){
  const [display,setDisplay]=useState(true)
    return(
      <>
      <h1>Toggle in React</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<h1>Azfer</h1>:null
      }
      </>
    )
}