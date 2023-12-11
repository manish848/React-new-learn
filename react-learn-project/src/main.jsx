import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)
const anothermanish = 'manish'



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser ,
    anothermanish , // evaluted expression  , bable will inject them
    anotherElement
     //---->>> this the variable  will be there , so it will be there we can not write here the js code 
)

ReactDOM.createRoot(document.getElementById('root')).render(
 //ReactElement   // this will not work as the react function have some of the specic style to write the code
 // anotherElement  // this will directly also work we can paas the custom function also 
  //reactElement
     <App/>
  
)