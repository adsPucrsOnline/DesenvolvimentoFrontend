import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main style={{ backgroundColor: theme.background, color: theme.foreground }}>
      <p>Esta é a página principal da minha aplicação</p>
      <p>O tema atual é: {theme.name}</p>
    </main>
  );
}

export default Main;
