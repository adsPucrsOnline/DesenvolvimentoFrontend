import React, { useState } from 'react';

function GanchoUsestate() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button
        className='btn btn-primary'
        onClick={handleIncrement}>
          Incrementar
        </button>
    </div>
  );
}

export default GanchoUsestate;
