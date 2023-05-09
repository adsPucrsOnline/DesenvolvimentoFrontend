import React, { useRef, useState, useEffect } from 'react';

function Referencia() {
  const inputRef = useRef(null);
  const valueRef = useRef('');
  const [storedValue, setStoredValue] = useState('');

  useEffect(() => {
    console.log('Valor anterior de storedValue:', storedValue);
  }, [storedValue]);

  function handleButtonClick() {
    const value = inputRef.current.value;
    valueRef.current = value;
    setStoredValue(valueRef.current);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Armazenar valor</button>
      {storedValue && (
        <p>O valor armazenado é: {storedValue}</p>
      )}
    </div>
  );
}

export default Referencia;
