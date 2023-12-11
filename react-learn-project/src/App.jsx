import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import First from './first.jsx' 

function App() { 
  const [count, setCount] = useState(0)
  const usename = 'Manish'

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
//we have t return only one element so we can make one div and inside that div we can call as many things as we want to avoid this the react gave us <> </>  this is called fragment in the react and this is really very very important to remeberr thee thing
    <>
       <h1>{usename} bhai ab vite me hai sahi suna {2+2} ab vite me hai</h1>
    <First/> 
    </>
  )
}

export default App
//   <h1>{usename} bhai ab vite me hai sahi suna {usename} ab vite me hai</h1>   here the username is evaluted expression so javascript will not work here will not work here the final output should be there instead of any random javascript
