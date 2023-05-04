import React, { FC, useState } from 'react';
import './contador.css';

const Contador = () => {
const [count, setCount] = useState(0)
  const adicionar = () => {
    setCount((prevState) => prevState + 1);
  }
  const retirar = () => {
    setCount((prevState) => prevState - 1)
  }

  return ( 
    <div>
      <h3>Contador UM</h3>
      <h1>{count}</h1>
      <button onClick={adicionar}>Adiciona</button>
      <button onClick={retirar}>Retirar</button>
    </div>
  );
}
export default Contador;
