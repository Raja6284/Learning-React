import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){//always write the function name starting with a capital letter
    return(
        <div>
            <h1>Custom myAPP! It is still running</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//        href:'https://google.com',
//        target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank' >Visit Google</a>
)

const anotheruser = 'meBerlin'
const reactElement = React.createElement(
    'a',
    {href:"https://google.com", target:"_blank"},
    'click here to visit google',
    anotherElement,anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
    //<App />       //parenthesis lag ke v function call hota hai , lekin krna nhi hai

)
