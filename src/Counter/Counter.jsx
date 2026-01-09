import { useState } from "react";
import './Counter.css'


function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("white")
    const [bgColor, setBgColor] = useState("black")

    const handleIncrease = () => {
        setCount(count + 1);
        setColor("green");
        setBgColor("#c0e9c6")
    }

    const handleDecrease = () => {
        if (count > 0) {
            setCount( count - 1);
            setColor("red")
            setBgColor("#f1d5d9")
        }
    }

    const handleReset = () => {
        setCount(0);
        setColor("#0000ff")
        setBgColor("#f0f7d5")
    }
    return (
        <div className="main-div">
            <h1 style={{ color:"#093f7c"}}>Counter</h1>
            <h2 style={{color : color, background : bgColor}}>{count}</h2>
            <div>
                <button className="increase-btn" onClick={handleIncrease}>Increase</button>
                <button className="decrease-btn" onClick={handleDecrease}>Descrease</button>
                <button className="reset-btn" onClick={handleReset}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter;
