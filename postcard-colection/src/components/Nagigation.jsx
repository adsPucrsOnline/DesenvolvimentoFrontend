import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'
function Navigation() {
  const location = useLocation();

  return (
    <ul>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname === '/list' ? 'active' : ''}>
        <Link to="/list">Listagem</Link>
      </li>
      <li className={location.pathname === '/postcard' ? 'active' : ''}>
        <Link to="/postcard/1">Cartão</Link>
      </li>
    </ul>
  );
}

export default Navigation;

