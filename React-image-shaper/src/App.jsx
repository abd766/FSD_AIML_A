import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
function App() {
  const [angle, setAngle] = useState(0)
  const [color, setColor] = useState('Black')
  // const [height, setHeight] = useState('150px')
  // const [width, setWidth] = useState('150px')
  let shape = document.getElementsByClassName("box")
  function rotate(){
      setColor(shape.style.backgroundColor="yellow")
  }
  return (
    <div>
      <Box/>
      <button onClick={rotate}>ROTATE</button>
      {/* <button onClick={changeColor}>CHANGE COLOUR</button>
      <button onClick={changeHeight}>CHANGE HEIGHT</button>
      <button onClick={changeWidth}>CHANGE WIDTH</button> */}
    </div>
  )
}

export default App
