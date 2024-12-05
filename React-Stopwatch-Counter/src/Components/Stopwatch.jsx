import React, { useEffect } from 'react'
import {useState} from 'react'
const Stopwatch = () => {
    const [isRunning,setIsRunning]=useState(false)
    const [time, setTime] = useState(0);
    const [isValid, setIsValid] = useState(null);
    function handleStartStop(){
        setIsRunning((pre)=>!pre)
        clearInterval(isValid)
    }
    function handleRestart(){
        setTime(0);
        setIsRunning(false);
    }
    useEffect(()=>{
      if( isRunning == true){
       const id = setInterval(()=>{
          setTime((pre)=>(time+1))
        },1000)
        setIsValid(id)
      }
      return ()=>clearInterval(isValid)
    },[isRunning,time])
    function timeFormat(time){
      let hours = Math.floor(time/3600);
      hours = hours > 9 ? hours : `0${hours}`;
      let minutes = Math.floor((time/3600)/60);
      minutes = minutes > 9 ? minutes : `0${minutes}`;

      let seconds = (time%60);
      seconds = seconds > 9 ? seconds : `0${seconds}`;

      return `${hours}:${minutes}:${seconds}`
    }
  return (
    <div>
      <h1>StopWatch App</h1>
      <h1>{timeFormat(time)}</h1>
      <button onClick={handleStartStop}>{isRunning? 'Stop':'Start'}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  )
}

export default Stopwatch
