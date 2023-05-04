import React, { useState, useEffect } from 'react';

function GanchoUseeffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button
        className='btn btn-primary'
        onClick={handleIncrement}>
          Incementar
        </button>
    </div>
  );
}

export default GanchoUseeffect
