import { useEffect } from "react";
import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // const Array = useState(0);
    // const count = Array[0];
    // const setCount = Array[1];

    function handleIncrease(){
        setCount(count+1)
    }
    
    function handleDecrease(){
        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*5)
    })
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
            <h1>Counter1:{count1}</h1>
        </div>
    )
}
export default Counter;
