import { useState } from 'react';
import './App.css'
import Header from './Header'


function App() {
  let username="Azfer warsi";
  let [counter,setCounter]=useState(0);

  let incCounter=()=>{
    setCounter(counter+1);
  }
  return (
    <>
    <h2>Hello, {username}</h2>
    <h2>Code step by step</h2>

     <h1>counter={counter} </h1>
     <button onClick={incCounter}>Increase count</button>
     
     <Header></Header>
    </>
  )
}

export default App
