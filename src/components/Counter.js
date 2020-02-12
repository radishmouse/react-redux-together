import React from 'react';

export default function Counter({
    count,
    handleIncrement,
    handleDecrement,
    handleReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>0</button>
        </div>
    );
}

// Alternative to exporting the function definition at the top of the file
// export default Counter;