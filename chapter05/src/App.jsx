
import { useState } from 'react'
import './App.css'
import Student from './Student'
import User from './User'

function App() {

   let userObject={
    name:"Azfer",
    age:22,
    email:"azfer@test.com"
  }

  let userObject2={
    name:"warsi",
    age:20,
    email:"warsi@test.com"
  }
  let userObject3={
    name:"shadan",
    age:18,
    email:"shadan@test.com"
  }

  const [student,setStudent]=useState("rohit")

  return (
    <>
      <h2>Props in React</h2>
      {/* <User name="Anil sidhu" age={22} email="anil@test.com"></User> */}
      <hr />
      <User user={userObject}></User>
      <hr />
        <User user={userObject2}></User>
        <hr />
        <User user={userObject3}></User>
        <hr />

       {student && <Student name={student}></Student>}
       <button onClick={()=>setStudent("bhaskar")}>update student name</button>
      
    </>
  )
}

export default App
