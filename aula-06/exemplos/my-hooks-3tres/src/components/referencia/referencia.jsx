import React, { useRef, useState, useEffect } from 'react';

function Referencia() {
  const inputRef = useRef(null);
  const valueRef = useRef('');
  const [storedValues, setStoredValues] = useState([]);
  const [previousValues, setPreviousValues] = useState([]);

  useEffect(() => {
    console.log('Valores anteriores armazenados:', storedValues);
  }, [storedValues]);

  function handleButtonClick() {
    const value = inputRef.current.value;
    valueRef.current = value;
    setStoredValues(prevValues => [...prevValues, valueRef.current]);
    setPreviousValues((prevValues) => [...prevValues, valueRef.current]);

  }

  return (
    <div className='container mt-3'>
      <div className="d-flex flex-column align-items-center" style={{ height: '100vh' }}>
        <input className='form-control' type="text" ref={inputRef} />
        <button className='btn btn-warning' onClick={handleButtonClick}>Armazenar valor</button>
        {storedValues.length > 0 && (
          <div className="card">
            <div className="card-header">
              <h4>Valores armazenados</h4>
            </div>
            <ul className="list-group text-left list-group-flush">
              {storedValues.map((value, index) => (
                <li className="list-group-item" key={index}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Referencia;
