//more about state

export default function Wrapper({children,color="green"}){
  return(
      <div style={{color:color,border:"5px solid red" ,margin:"10px"}}>
         {children} 
      </div>
  )
}