// list-users.js

import React, { useState, useEffect } from "react";

import { API_LOCAL } from "./constantes";

const ListaPWA = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchLista = async () => {
      try {
        if (navigator.onLine) {
          const response = await fetch(API_LOCAL);

          const data = await response.json();

          setLista(data);

          localStorage.setItem("lista", JSON.stringify(data));
        } else {
          const cachedLista = localStorage.getItem("lista");

          if (cachedLista) {
            setLista(JSON.parse(cachedLista));
          }
        }
      } catch (error) {
        console.error("Erro ao buscar lista:", error);
      }
    };

    fetchLista();
  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ul>
        {lista.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPWA;
