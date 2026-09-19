// jsx in react
import './App.css'
import reactLogo from './assets/react.svg'
import salman from './assets/image.png'
import Demo from './Demo';

function App() {
  let username="warsiazfer";
  let x=20;
  let y=12;

  function handleClick(){
    alert("Button is clicked")
  }

  return (
    <>
    <h2>Username={username}</h2>
    <h2>{x*y}</h2>

     <button onClick={handleClick}>Click me!</button>
     
     <br></br><br></br>
     <img src={reactLogo} alt="logo react"></img>
     <img src={salman} height="100px" width="100px"></img>

      <Demo></Demo>
    </>
  )
}

export default App
