import React, { useRef,useState } from 'react'

const RefEx = () => {
    const count = useRef(0);
    const [count1, setCount1] = useState(0)
    console.log("Object rendered");
    function increment(){
        count.current++;
        setCount1((count)=>count+1)
    }
    return (
    <div>
      <h1>Ref Counter: {count.current}</h1>
      <h1>UseState Counter: {count.current}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default RefEx
