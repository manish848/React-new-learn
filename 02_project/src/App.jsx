import { useState } from 'react' // hook useState
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.



function App() {
  // const [count, setCount] = useState(0)
  
  let [value, setcounter] = useState(15) // this is the default value , this useSate is used to define a variable with the value and that setcounter will be passed with a new value a new array will be returned first will be the value and the second will be the function to update it , the name for them can be anything

  const addvalue = () =>{
    console.log(value)
    // value = value+1; 
    // setcounter(value)
    if(value<=191)
    setcounter(value+1) // the value is here incremented whenever we click onto it, but this value is not updated there so we need to take care of this thing , now how we do that that is really very important
    // so the problem is the ui updation and the ui updation in the react does not work the way we want it to work 
    // it works accordin to it so it will be updated at many places 
    // now there are many counter so each time if we use the dom we have to take out many elements and then we have to update all of them so this is the basic and most worst problem with the dom
    // so react says that ui updation will be controlled by the language
    // so the ui updation is done using the hooks , like useEffect, useRef, only these things will do the updation

  }

  const removevalue = () => {
    if(value>0)
    setcounter(value-1)
  }

  return (
    <>
<h1>Hello Manish {value}</h1>
<h2>Counter Value: {value}</h2>
<button onClick={addvalue}>Add Value {value}</button> 
<br></br>
<button onClick={removevalue}> Remove Value {value}</button>
    </>
  )
}

export default App
//<button onClick={addvalue}>Add Value</button>    we did not execute it as we want to click and then exceute so we will pass the reference
