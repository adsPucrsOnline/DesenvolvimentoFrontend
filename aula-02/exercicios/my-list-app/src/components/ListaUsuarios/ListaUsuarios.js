import React from 'react';

const ListaUsuarios = ({ usuarios }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <p>Nome: {usuario.nome}</p>
            <p>E-mail: {usuario.email}</p>
            <p>Idade: {usuario.idade} anos</p>
            <p>Peso: {usuario.peso} kilos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
