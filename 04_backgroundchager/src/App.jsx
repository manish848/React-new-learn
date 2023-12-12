import { useState } from 'react'

import './App.css'


// if inside the onclick we write setcolor() , then the return value of the function will be paased into it, so thagt wiil be a prioblem
//onclick demand a function so we will use that function
// for single line we avoid the braces also
function App() {
  const [color, setcolor] = useState("Red") // default color that we are giving here is red

  const [count, setCount] = useState(0)
  const functionchange = (value)=>{
setcolor(value)
  }
// inline css is writtern using the two currlybraces,now we do not need to pass the extra braces for the variable name
  return (
    <div className = "w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className = "flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> functionchange("red")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "red" }}>Red</button>
          <button onClick={()=> functionchange("green")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "green" }}>green</button>
          <button  onClick={()=> setcolor("yellow")} classNameclassName ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "yellow" }}>yellow</button>
          <button onClick={()=> setcolor("olive ")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "olive" }}>olive</button>
          <button onClick={()=> setcolor("blue")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "blue" }}>blue</button>
          <button onClick={()=> setcolor("purple")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "purple" }}>purple</button>
          <button onClick={()=> setcolor("pink")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "pink" }}>pink</button>
          <button onClick={()=> setcolor("grey")} className ="outline-none px-4 py-1 rounded-full" style= {{backgroundColor: "grey" }}>grey</button>

        </div>
      </div>
    </div>
  )
}

export default App
