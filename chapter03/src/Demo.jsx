// JSX with curly braces
import  logo from './assets/react.svg'


export default function Demo(){
  const name="React series";
  let x=12;
  let y=78;
  function fruit(){
    return "Orange"
  }
  function sum(a,b){
    return a+b
  }

  function operation(a,b,op){
      if(op=="+") {
        return a+b
      }
      else if(op=="-"){
        return a-b;
      }
      else{
        return a*b
      }
  }
  const userObj={
    name:"Alice",
    email:"alice@123.com",
    age:25
  }
  return(
    <div>
      <h1>JSX with curly Braces</h1>
      <h2>{name?name:"user not found"}</h2>
      <h2>Sum of x+y={x+y}</h2>
      <h2>{fruit()}</h2>
      <h2>{sum(34,67)}</h2>
      <h2>{operation(34,99,'-')}</h2>
      <h2>{userObj.email}</h2>
      <img src={logo} alt="reactlogo" height="200px" />
      <input type="text" value={name} />
    </div>
  )
}