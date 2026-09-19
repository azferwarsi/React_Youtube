export default function Form(){
  const handleSubmit=async()=>{
     await new Promise(res=>setTimeout(res,2000))
     console.log("submitted");
     
  }
  return(
    <div>
      <form action={handleSubmit}>
        <input type="text" placeholder="Enter Name" />
        <br></br>
        <input type="password" name="" id=""  placeholder="Enter password"/>
        <br></br><br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}