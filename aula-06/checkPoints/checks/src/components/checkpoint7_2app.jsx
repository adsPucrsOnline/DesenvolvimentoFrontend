// App.js

import React from "react";

import ListaUsuarios from "./components/ListaUsuarios/ListaUsuarios";
import usuariosData from "./usuarios.json";

const App = () => {
  return (
    <div>
      <ListaUsuarios usuarios={usuariosData.usuarios} />
    </div>
  );
};

export default App; 