import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <ul>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname === '/about' ? 'active' : ''}>
        <Link to="/about">About</Link>
      </li>
      <li className={location.pathname === '/contact' ? 'active' : ''}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navigation;
