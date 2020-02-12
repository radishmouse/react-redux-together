import React from 'react';
import Counter from '../containers/CounterContainer';

export default function Counters({
  counts,
  handleAdd,
  handleDel
}) {
  return (
    <>
      <button onClick={handleAdd}>Add Counter</button>
      <div className="counters">
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
                handleDel(c.id)
              }}>Delete</button>
            </div>            
          );
        })
      }
      </div>    
    </>    
  );
}
