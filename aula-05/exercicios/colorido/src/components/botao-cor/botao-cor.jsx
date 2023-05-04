import React, { useState } from "react";

const BotaoCor = () => {
  const [cor, setCor] = useState("orange");

  const gerarCorAleatoria = () => {
    const letras = "0123456789ABCDEF";
    let novaCor = "#";
    for (let i = 0; i < 6; i++) {
      novaCor += letras[Math.floor(Math.random() * 16)];
    }
    return novaCor;
  };

  const handleAlterarCor = () => {
    const novaCor = gerarCorAleatoria();
    setCor(novaCor);
  };

  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: cor,
  };

  return (
    <div>
      <div style={style}></div>
      <button onClick={handleAlterarCor}>Alterar cor</button>
    </div>
  );
};

export default BotaoCor;
