import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

//learn about the onchange that is really good to learn

function App() {
  const [length, setLength] = useState(8) // for the length
  const [numberallowed, setNumberallowed] = useState(false)
  const [characterallowed, setcharacterallowed] = useState(false)
  const [password, setPassword] = useState("")// for the password

  const passwordGenerator = useCallback(()=>{ // we can remove usecallback this is not needed
     let pass =""
     let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberallowed)
     values+="1234567890"
     if(characterallowed)
     values+="~`!@#$%^&*(){}[]<>?=-_+|"
     for(let i=1;i<length;i++)
     {
          let char = Math.floor(Math.random()*values.length +1)
          pass += values.charAt(char)
     }
     setPassword(pass)
  }, [length, numberallowed, characterallowed, setPassword]) // these dependecies are used to memoize the things


    //useRef hook
    const passwordRef = useRef(null)

    const copyPasswordToClipboard = useCallback(() => { // we can remove usecallback this is not needed
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
    }, [password])
  
    useEffect(() => {
      passwordGenerator()
    }, [length, numberallowed, characterallowed, passwordGenerator]) //this is used that when we need to run this function , so when the dependcies changes we need to call that function

//useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
// }, [prop, state]);

//useEffect(() => {
  //Runs only on the first render
//}, []);

//useEffect(() => {
  //Runs on every render
//});


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
            setNumberallowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterallowed}
              id="characterInput"
              onChange={() => {
                setcharacterallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
