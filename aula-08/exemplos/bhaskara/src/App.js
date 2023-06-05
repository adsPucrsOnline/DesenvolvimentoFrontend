import React, { useState } from 'react';
import { calcularDelta, calcularRaizes } from './Bhaskara';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [raizes, setRaizes] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'a') setA(value);
    if (name === 'b') setB(value);
    if (name === 'c') setC(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const raizesCalculadas = calcularRaizes(Number(a), Number(b), Number(c));
    setRaizes(raizesCalculadas);
  };

  const renderRaizes = () => {
    console.log(raizes)
    if (raizes[0] ==="na") {
      return <p>NÃO Existem raízes reais.</p>;
    } else if (raizes.length === 1) {
      return <p>Existem duas raízes iguais: {raizes[0]}</p>;
    } else {
      return (
        <p>
          Existem duas raízes reais diferentes: {raizes[0]} e {raizes[1]}
        </p>
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          a:
          <input type="number" name="a" value={a} onChange={handleInputChange} />
        </label>
        <label>
          b:
          <input type="number" name="b" value={b} onChange={handleInputChange} />
        </label>
        <label>
          c:
          <input type="number" name="c" value={c} onChange={handleInputChange} />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {raizes.length > 0 && (
        <div>
          <p>Raízes:</p>
          {renderRaizes()}
        </div>
      )}
    </div>
  );
}

export default App;
