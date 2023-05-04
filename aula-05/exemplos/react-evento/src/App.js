import React from 'react';

function MeuComponente() {
  const handleClick = () => {
    console.log('O botão foi clicado!');
  };

  return (
    <button onClick={handleClick}>Clique aqui</button>
  );
}

export default MeuComponente;
