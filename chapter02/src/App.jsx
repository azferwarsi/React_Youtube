//component in react

import UserComponent,{Profile, userId, UserName} from './UserComponent'


import './App.css'

function App() {
  return (
    <>
     <h1>Component in react</h1>
     <Fruit></Fruit>
     <Color></Color>
     <h3>sum={sum()}</h3>

     <UserComponent></UserComponent>
     <Profile></Profile>
     <UserName></UserName>
     <h2>{userId}</h2>
    </>
  )
}


function Fruit(){
    return(
      <h1>Apple</h1>
    )
}
function Color(){
    return(
      <h1>Red</h1>
    )
}

function sum(){
  return 10+20
}

export default App
