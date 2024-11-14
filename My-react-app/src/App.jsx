import { useState } from 'react'
import "./App.css"
import qbank from "./QBank.js"
function App() {
  return (
    <>
    <div id='Quiz'>
    <h1><center>Quiz Application</center></h1>
    <br/>
    <div>
      <h1>{(qbank.id)}.{(qbank.question)}</h1>
      <input type="radio" name ="opt"/>{(qbank.option1)}<br/>
      <input type="radio" name ="opt"/>{(qbank.option2)}<br/>
      <input type="radio" name ="opt"/>{(qbank.option3)}<br/>
      <input type="radio" name ="opt"/>{(qbank.option4)}<br/>
      <input type="button" value="Previous"/>
      <input type="button" value="Next"/>
    </div>
    </div>
    </>
  )
}

export default App
