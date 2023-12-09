import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  //console.log({output})
  const handleClick = async(e)=> {
    e.preventDefault()
    try {
      const response = await fetch('http://10.112.26.116:8081/qa', {
        'method':'POST',
        'mode': 'cors',
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify({'query':code})
      })
      const data = await response.json()
      console.log(data.output)
      setOutput(data.output) 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
     <h1>testing my app</h1>
     <textarea rows="10" cols="30" onChange={(e) => {setCode(e.target.value)}}>
      {code}
     </textarea>
     <button onClick={handleClick}>Enter</button>
     <p>{output}</p>
    </>
  )
}

export default App
