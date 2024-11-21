import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);
    // const Array = useState(0);
    // const count = Array[0];
    // const setCount = Array[1];

    function handleIncrease(){
        setCount(count+1)
    }
    
    function handleDecrease(){
        setCount(count-1)
    }
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
        </div>
    )
}
export default Counter;
