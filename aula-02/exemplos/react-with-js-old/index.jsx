import React from 'react';
import ReactDOM from 'react-dom/client';

function ListaDeItens(props) {
  const { itens } = props;

  return (
    <ul>
      {itens.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}

const itens = [
  { id: 1, nome: 'Item 1' },
  { id: 2, nome: 'Item 2' },
  { id: 3, nome: 'Item 3' },
];

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<ListaDeItens itens={itens} />);