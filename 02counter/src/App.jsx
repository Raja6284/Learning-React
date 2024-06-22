import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  //let counter = 2;

  const AddValue = ()=>{
    counter = counter + 1
    console.log("clicked",counter)
    setCounter(counter)
  }
 
  const RemoveValue = ()=>{
    //counter = counter - 1;
    setCounter(counter -1)
  }
  return (
   <>
   <h1>Chai aur React</h1>
   <h2>Current Counter Value: {counter} </h2>

   <button onClick={AddValue}>Add value {counter} </button>
   <br/>
   <button onClick={RemoveValue}>Remove value {counter} </button>
   </>
  )
}

export default App
