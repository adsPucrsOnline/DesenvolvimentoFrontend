import React, { useState } from 'react';
import './App.css'
import { ThemeContext, themes } from './theme-context';
import Header from './Header';
import Main from './Main';

function App() {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme.name}`}>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
