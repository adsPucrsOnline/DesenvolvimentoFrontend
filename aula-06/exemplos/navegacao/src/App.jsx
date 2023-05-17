import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import NavigationMenu from './components/navigationMenu/navigationMenu';
import Navigation from './components/navigation/navigation';
import ProgressBar from './components/progressbar/progressbar';
import NavigationTrail from './components/NavigationTrail/navigationTrail';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <NavigationTrail />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
