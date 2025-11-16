import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) =>{
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    }

    const confirm = () => {
        if (count > 0){
            onConfirm(count);
        }        
    }

    return <div className="count-container">
        <button className="count-button" onClick={decrement} disabled={count === 0}>
            -
        </button>
        <span className="count-value">{count}</span>
        <button className="count-button" onClick={increment}>
            +
        </button>
        <button className="confirm-button" onClick={confirm} disabled={count === 0}>
            {btnText}
        </button>
    </div>

};