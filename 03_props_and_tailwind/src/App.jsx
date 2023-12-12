import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myarr = ["manish", "Kumar", "kulhari"]
  // we always have to take care that img tag will have the closing here, this is not correct img but jsx have
// here we will write the jsx so inseted of class write className as that is important 
// we will be direct using the tailwind class of the css, so tat is really importatn
  return (
    <>
  <h1 className = 'bg-green-400 text-black p-4 rounded-2xl'>Haan bhai tailwind hai</h1>
  {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2014/11/img196.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}

<Card username = "Manish" myarr = {myarr} buttontext = "Click me"/>
<Card username = "MKK" myarr = {myarr} buttontext = "Daba ke like and share"/>
{/* This is called props where we can paas the variables and we can use them accordingly slo this is one of the power of the react */}

    </>
  )
}

export default App
