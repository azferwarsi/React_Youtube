
import './App.css'
import User from './User'
import Wrapper from './Wrapper'

function App() {
 

  return (
    <>
      <h1>More abot props</h1>
      <User name="Azfer warsi"></User>
      <User name="bhaskar"></User>
      <User></User>
      <User></User>

      <Wrapper color="blue">
        <h2>Hello everyone</h2>
      </Wrapper>
      <Wrapper color="yellow">
        <h2>More about state</h2>
      </Wrapper>

         <Wrapper>
        <h2>Hello Azfer</h2>
        <h2 style={{color:"pink"}}>How are you?</h2>
      </Wrapper>

       
    </>
  )
}

export default App
