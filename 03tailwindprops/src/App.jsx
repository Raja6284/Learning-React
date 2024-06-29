import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName: "berlinbangkok",
    userId: "12@5"
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>Tailwind Test</h1>

      <Card userName="Raja"btnText="Click Me" someObj ={newArr} />
      <Card userName = "berlinbangkok" btnText = "Visit Me" />
    </>
  )
}

export default App
