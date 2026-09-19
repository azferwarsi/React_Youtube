export default function Uncontrolled(){
  const handleForm=(event)=>{
    event.preventDefault();
    const user=document.querySelector("#user").value;
    const password=document.querySelector("#password").value;

    console.log(user,password);
    
     
      
  }
  return(
    <>
      <h1>Uncontrolled Component</h1>
     <form action="" onSubmit={handleForm}>
      <input type="text" id="user" placeholder='enter user name' />
      <br></br>
      <input type="password"  id="password" placeholder='enter password' />
      <br></br>
      <button>Submit</button>
     </form>
    </>
  )
}