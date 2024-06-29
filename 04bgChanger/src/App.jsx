import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"  style ={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"red"}}
          >Red
          </button>
          <button
           onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"blue"}}
          >Blue
          </button>
          <button
           onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"green"}}
          >Green
          </button>
          <button
           onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"yellow"}}
          >Yellow
          </button>
          <button
           onClick={()=>setColor("firebrick")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"firebrick"}}
          >firebrick
          </button>
          <button
           onClick={()=>setColor("maroon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"maroon"}}
          >Maroon
          </button>
          <button
           onClick={()=>setColor("coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"coral"}}
          >Coral
          </button>
          <button
           onClick={()=>setColor("salmon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"salmon"}}
          >Salmon
          </button>
          <button
           onClick={()=>setColor("khaki")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor:"khaki"}}
          >Khaki
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
