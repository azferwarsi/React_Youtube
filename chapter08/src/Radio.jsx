import { useState } from "react"


export default function Radio(){
  const [gender,setGender]=useState("")
  const[city,setCity]=useState("delhi")

  return(
    <div>
      <h3>Select Gender</h3>
      <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender=='male'}/>Male
      
      <input type="radio" onChange={(event)=>setGender(event.target.value)}name="gender" id="female" value={"female"} checked={gender=='female'}/>Female

      <h2>selected gender:{gender}</h2>

      <br></br><br></br>
      <h3>Select city</h3>
      <select defaultValue={"delhi"} onChange={(event)=>setCity(event.target.value)}>
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
        <option value="ghaziabad">ghaziabad</option>
      </select>
      <h2>Selected city:{city}</h2>
    </div>
  )
}