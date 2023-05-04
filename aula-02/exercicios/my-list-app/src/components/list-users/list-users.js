// Importe os pacotes necessários
import React, { useState, useEffect } from 'react';
import { API_LOCAL } from  './constantes'

// Componente de Listagem
const ListaPWA = () => {
  const [lista, setLista] = useState([]);

  // UseEffect para buscar a lista de itens
  useEffect(() => {
    // Função para buscar a lista de itens
    const fetchLista = async () => {
      try {
        
        // Verifica se há conexão com a internet
        if (navigator.onLine) {
          // Se estiver online, busca a lista do servidor
          const response = await fetch(API_LOCAL);
          const data = await response.json();
          setLista(data);
          // Armazena a lista no cache
          localStorage.setItem('lista', JSON.stringify(data));
        } else {
          console.log('SERVER OFF LINE')
          // Se estiver offline, busca a lista do cache
          const cachedLista = localStorage.getItem('lista');
          if (cachedLista) {
            setLista(JSON.parse(cachedLista));
          }
        }
      } catch (error) {
        console.error('Erro ao buscar lista:', error);
      }
    };

    fetchLista();
  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {lista.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPWA;

