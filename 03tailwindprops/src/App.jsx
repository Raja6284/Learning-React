import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded'>Tailwind Test</h1>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/26050321/pexels-photo-26050321/free-photo-of-kea-bird-the-kea-is-a-protected-species-that-lives-in-forests-and-mountainous-areas-across-the-south-island-from-golden-bay-to-fiordland-in-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Raja Kumar
      </div>
      <div>
        CSE student, Heritage Institute of Technology
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
