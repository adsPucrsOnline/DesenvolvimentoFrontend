
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Nagigation';
import Home from './pages/Home';
import ListPostcard from './pages/ListPostcard';
import Postcard from './pages/Postcard';

function App() {
  return (
<Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListPostcard />} />
          <Route path="/postcard/:id" element={<Postcard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
