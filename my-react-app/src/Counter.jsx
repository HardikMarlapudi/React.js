import React, {useState} from 'react';
import './index.css';

function Counter() {

    const [count, setCount] = {useState};

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }
   
    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="btn-count" onClick={decrement}>Decrement</button>
            <button className="btn-count" onClick={reset}>Reset</button>
            <button className="btn-count" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;
