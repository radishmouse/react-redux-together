import React from 'react';
import Counter from '../containers/CounterContainer';

export default function Counters({
  counts,
  handleAdd,
  handleDel
}) {
  return (
    <div>
      <button onClick={handleAdd}>Add Counter</button>
      {
        counts.map((c, i) => {
          return (
            <div>
            <Counter
              key={c.id}
              id={c.id}
              count={c.count}
            />
              <button onClick={() => {
                handleDel(i)
              }}>Delete</button>
            </div>            
          );
        })
      }
    </div>    
  );
}
