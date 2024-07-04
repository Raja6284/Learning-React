import { useState } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-orange-500'>Currency App</h1>
     <UseCurrencyInfo/>
    </>
  )
}

export default App
