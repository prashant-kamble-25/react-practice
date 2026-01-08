import { useState } from "react";
import './Counter.css'


function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const handleReset = () => {
        setCount(0)
    }
    return (
        <div className="main-div">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button className="increase-btn" onClick={handleIncrease}>Increase</button>
            <button className="decrease-btn"onClick={handleDecrease}>Descrease</button>
            <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;
