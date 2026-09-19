import dyd from "./assets/DYD.jpg"
import './App.css'

function App() {
  
  const collegeData=[
    {
      name:"IET Alwar",
      city:"Alwar",
      student:[
        {
          name:"Anil sidhu",
          age:27,
          email:"anil@test.com"
        },
        {
          name:"peter",
          age:26,
          email:"peter@test.com"
        },
        {
          name:"bruce",
          age:20,
          email:"bruce@test.com"
        }
      ]
    },
    {
      name:"IIT Delhi",
      city:"Delhi",
      student:[
        {
          name:"Anil sidhu",
          age:27,
          email:"anil@test.com"
        },
        {
          name:"peter",
          age:26,
          email:"peter@test.com"
        },
        {
          name:"bruce",
          age:20,
          email:"bruce@test.com"
        }
      ]
    },
    {
      name:"MAIT",
      city:"New Delhi",
      student:[
        {
          name:"Anil sidhu",
          age:27,
          email:"anil@test.com"
        },
        {
          name:"peter",
          age:26,
          email:"peter@test.com"
        },
        {
          name:"bruce",
          age:20,
          email:"bruce@test.com"
        }
      ]
    }
  ]

  return (
    <>
      <h1>Nested Looping with Component</h1>
      {
       collegeData.map((college,index)=>(
        <div key={index} style={{backgroundColor:"#ccc",padding:"20px",borderBottom:"2px solid red",margin:"20px",borderRadius:"10px"}}>
          <h1>Name:{college.name}</h1>
          <ul>
            <li>
              <h3>City:{college.city}</h3>
            </li>
            <li>
              <h2>Students:</h2>
              {
                college.student.map((student)=>(
                  <div>
                    <ul>
                      <li>Name: {student.name}</li>
                    </ul>
                  </div>
                ))
              }
            </li>
          </ul>
        </div>
       )) 
      }
      
      <img src={dyd} alt=""  width={"150px"} height={"150px"}/>
    </>
  )
}

export default App
