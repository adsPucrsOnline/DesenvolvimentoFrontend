import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './breadcrumbs.css'

function Breadcrumbs() {
  const history = createBrowserHistory();
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((path) => path !== '');

  const handleClick = (index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    history.push(path);
  };

  return (
    <nav>
      <ul className='caminho'>
        <li className='caminho'>
          <Link to="/">Home {" "}</Link>
        </li>
        {pathnames.map((path, index) => (
          <li className='caminho' key={index}>
            <Link to={() => handleClick(index)}>{path} {" "}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
