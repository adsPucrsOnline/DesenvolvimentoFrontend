import React from 'react';
import './linusPaulingDiagram.css';
import { generateElectronDistribution, calculateLinusPaulingDiagram } from '../util/elementosDefinitions';

function LinusPaulingDiagram({ atomicNumber }) {
  const shells = calculateLinusPaulingDiagram(atomicNumber);

  return (
    <div className="diagram">
      {Object.entries(shells).map(([shell, electrons]) => (
        electrons > 0 && (
          <div key={shell} className="layer">
            {renderShell(shell)}
            {renderSublevels(shell, electrons)}
            {renderElectronCount(electrons)}
          </div>
        )
      ))}
      <p>{generateElectronDistribution(atomicNumber)}</p>
    </div>
  );
}

function renderShell(shell) {
  return <div className="shell">{shell}</div>;
}

function renderSublevels(shell, electrons) {
  const sublevels = getSublevels(shell);

  return (
    <div className="sublevels">
      {sublevels.map((sublevel) => (
        <div key={sublevel} className={`${sublevel}`}>
          {renderElectrons(sublevel, electrons)}
          {getElectrons(electrons[sublevel])}
        </div>
      ))}
    </div>
  );
}

function getSublevels(shell) {
  switch (shell) {
    case 'K':
      return ['s'];
    case 'L':
      return ['s', 'p'];
    case 'M':
      return ['s', 'p', 'd'];
    case 'N':
      return ['s', 'p', 'd', 'f'];
    case 'O':
      return ['s', 'p', 'd', 'f'];
    case 'P':
      return ['s', 'p', 'd'];
    case 'Q':
      return ['s', 'p'];
    default:
      return [];
  }
}


function renderElectrons(sublevel, electrons) {
    const maxElectrons = getMaxElectrons(sublevel);
    const currentElectrons = Math.min(electrons, maxElectrons);
  
    return (
      <div className={`electron ${currentElectrons > 0 ? 'filled' : ''}`}>
        {currentElectrons > 0 && <span className="electron-value">{currentElectrons}</span>}
      </div>
    );
  }

function getMaxElectrons(sublevel, e) {
  console.log("Eletron -->", e)
  switch (sublevel) {
    case 's':
      return 2;
    case 'p':
      return 6;
    case 'd':
      return 10;
    case 'f':
      return 14;
    default:
      return 0;
  }
}

function renderElectronCount(electrons) {
  return <div className="electron-count">{electrons}</div>;
}

function getElectrons(e) {
    console.log("Eletron -->", e)
}

export default LinusPaulingDiagram;
