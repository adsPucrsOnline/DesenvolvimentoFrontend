import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme.background, color: theme.foreground}}>
      <h1>Minha aplicação</h1>
      <button onClick={toggleTheme}>
        {theme.name === 'light' ? 'Modo escuro' : 'Modo claro'}
      </button>
    </header>
  );
}

export default Header;
