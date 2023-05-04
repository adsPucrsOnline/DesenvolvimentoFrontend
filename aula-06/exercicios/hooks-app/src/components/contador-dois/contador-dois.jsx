import React, { useState } from 'react';
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
        theme: "light"
      }
    });
  }

  return ( 
    <div className='ContadorDois'
      style={{ background: objeto.theme === 'light' ? '#e2d7d7fc' : '#000', 
               color: objeto.theme === 'light' ? '#000' : '#fff' }}>
      <h3>Contador</h3>
      <h1>{objeto.count}</h1>
      <button onClick={adicionar}>Adiciona</button>
      <button onClick={retirar}>Retirar</button>
      <p>altera o estilo ai incrementar e decrementar</p>
    </div>
  );
}
export default ContadorDois;