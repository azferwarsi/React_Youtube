import { useState } from "react"

 
 
 export default function Counter(){
  let [count,setCount]=useState(0)
  let [reversecount,setReverseCount]=useState(15)

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>update counter</button>

      <h1>{reversecount}</h1>
      
      <button onClick={()=>setReverseCount(reversecount-1)}>Reverse counter</button>
    </div>
  )
}