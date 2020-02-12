import React from 'react';

export default function Counter({
  count,
  handleIncrement,
  handleDecrement,
  handleReset,
  id
}) {
    return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => handleDecrement(id)}>-</button>
          <button onClick={() => handleIncrement(id)}>+</button>
          <button onClick={() => handleReset(id)}>0</button>
        </div>
    );
}

// Alternative to exporting the function definition at the top of the file
// export default Counter;
