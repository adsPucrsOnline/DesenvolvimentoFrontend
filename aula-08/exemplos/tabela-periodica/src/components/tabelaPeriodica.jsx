import React from 'react';


import Elemento from '../components/elemento';
import periodicTableData from '../periodicTableData.json';

import { getElementType } from '../util/elementosDefinitions'
import './tabelaPeriodica.css'


const TabelaPeriodica = () => {
  return (
    <div className="tabela-periodica">
      {periodicTableData.map((elemento, index) => (
    <div
        key={elemento.atomicNumber}
        className={`elemento ${getElementType(elemento)} ${index % 10 === 0 ? 'nova-linha' : ''}`}
      >
        <Elemento
          key={elemento.atomicNumber}
          atomicNumber={elemento.atomicNumber}
          symbol={elemento.symbol}
          name={elemento.name}
          atomicMass={elemento.atomicMass}
        />
        </div>
      ))}
    </div>
  );
};

export default TabelaPeriodica;
