
import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef=useRef(null);
  const h1Ref=useRef(null);

  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display="none"
    }
    else{
      inputRef.current.style.display="inline"
    }

  }
  const h1handler=()=>{
    h1Ref.current.style.color="green"
  }
  return (
    <>
     <h1>useRef Hook</h1>
     <button onClick={toggleHandler}>Toggle</button>
     <input type="text" placeholder='Enter username' ref={inputRef} />
     <button onClick={inputHandler}>Focus on input field</button>
     
     <h1 ref={h1Ref}>Azfer Warsi</h1>
     <button onClick={h1handler}>Handler</button>
    </>
  )
}

export default App
