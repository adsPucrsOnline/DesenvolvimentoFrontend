import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Componentes para as páginas
//import Home from './components/Home';
import About from './components/About/About';
import Contact from './components/Contact';

const Home = () => {
return (
  <div>
  <h1>Página Inicial</h1>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  </div>
  );
}


const App = () => { 
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

    </Router>
  );
}

export default App;
