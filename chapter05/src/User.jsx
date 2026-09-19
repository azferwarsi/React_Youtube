// props in react


export default function User({user}){
  

  return(
    <div>
        {/* <h1>User componnet</h1>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <h2>Email:{email}</h2> */}
         
         <h2>Name:{user.name}</h2>
         <h2>Age:{user.age}</h2>
         <h2>Email:{user.email}</h2>

       
    </div>
  )
}