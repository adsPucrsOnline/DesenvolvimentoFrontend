import React from 'react';
import { useState } from 'react';
import { generateElectronDistribution } from '../util/elementosDefinitions';
import { Button, Avatar, Divider, Dialog, DialogContent, DialogTitle } from '@mui/material';
import LinusPaulingDiagram from './linusPaulingDiagram';

import './tabelaPeriodica.css';

const Elemento = ({ atomicNumber, symbol, name, atomicMass }) => {
  const [open, setOpen] = useState(false);
  const [, setElectronDistribution] = useState('');

  const handleClick = () => {
    const distribution = generateElectronDistribution(atomicNumber);
    setElectronDistribution(distribution);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="elemento" onClick={handleClick}>
        <div className="atomic-number">{atomicNumber}</div>
        <div className="symbol">{symbol}</div>
        <div className="name">{name}</div>
        <div className="atomic-mass">{atomicMass}</div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Distribuição Atômica</DialogTitle>
        <DialogContent dividers>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'red' }}>{symbol}</Avatar>
            <span>{name}</span>
          </div>
          <Divider style={{ margin: '16px 0' }} />
          <LinusPaulingDiagram atomicNumber={atomicNumber}/>
        </DialogContent>
        <Button onClick={handleClose}>Fechar</Button>
      </Dialog>
    </>
  );
};

export default Elemento;

