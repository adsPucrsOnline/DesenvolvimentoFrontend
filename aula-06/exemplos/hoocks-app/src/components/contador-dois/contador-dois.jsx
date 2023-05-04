import React, { FC, useState } from 'react';
import './contador-dois.css';

const ContadorDois = () => {
const [objeto, setCount] = useState({ count: 0, theme: "dark"})
  const adicionar = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "dark"
      }
    });
  }
  const retirar = () => {
    setCount((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
        theme: "ligth"
      }
    });
  }

  return ( 
    <div>
      <h3>Contador DOIS</h3>
      <h1>{objeto.count}</h1>
      <button onClick={adicionar}>Adiciona</button>
      <button onClick={retirar}>Retirar</button>
    </div>
  );
}
export default ContadorDois;