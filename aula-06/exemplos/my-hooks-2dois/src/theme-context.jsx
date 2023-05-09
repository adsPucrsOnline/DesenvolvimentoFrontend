import React, { createContext } from 'react';

const themes = {
  light: {
    name: 'light',
    background: '#ffffff',
    foreground: '#000000',
  },
  dark: {
    name: 'dark',
    background: '#000000',
    foreground: '#ffffff'
  }
};

const ThemeContext = createContext();

function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={props.value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, themes };