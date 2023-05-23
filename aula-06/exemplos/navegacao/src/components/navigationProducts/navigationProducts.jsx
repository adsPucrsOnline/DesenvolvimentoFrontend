import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css'
function NavigationProducts() {
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
      <li >
        <Link to="/products">Products</Link>
        <ul className="submenu">
          <li className={location.pathname.includes('/products/1') ? 'active' : ''}>
            <Link to="/products/1">Products One</Link>
          </li>
          <li className={location.pathname.includes('/products/2') ? 'active' : ''}>
            <Link to="/products/2">Products Two</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default NavigationProducts;
