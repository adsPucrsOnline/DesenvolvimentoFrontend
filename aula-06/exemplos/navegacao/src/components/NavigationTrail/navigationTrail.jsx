import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationTrail() {
  const [navigationHistory, setNavigationHistory] = useState([]);
  const navigate = useNavigate();

  function addToHistory(page) {
    setNavigationHistory(prevHistory => [...prevHistory, page]);
  }

  function navigateToPage(page) {
    setNavigationHistory(prevHistory => prevHistory.slice(0, prevHistory.indexOf(page) + 1));
    navigate(page);
  }

  return (
    <div>
      {navigationHistory.map((page, index) => (
        <span key={index}>
          <Link to={page}>{page}</Link>
          {index < navigationHistory.length - 1 && ' > '}
        </span>
      ))}
      <br />
      <button onClick={() => navigateToPage(navigationHistory[navigationHistory.length - 2])}>
        Voltar
      </button>
    </div>
  );
}

export default NavigationTrail;

