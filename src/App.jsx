import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Body from './Components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar />
     <Body />
    </div>
  )
}

export default App
