
import { useRef } from 'react'
import './App.css'
import UserInput from './UserInput'
import Form from './Form'

function App() {
  const inputRef=useRef(null)

  const updateInput=()=>{
    inputRef.current.value=1000
    inputRef.current.focus()
    inputRef.current.style.color="red"
    
  }
  return (
    <>
    {/* <h1>Forward Ref</h1>
    <UserInput ref={inputRef} />
    <button onClick={updateInput}>Update Input field</button> */}

      <h1>useFormStatus in React Js</h1>
      <Form></Form>
    </>
  )
}

export default App
