import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Container } from '@mui/material';

import Home from './pages/Home';
import Usuario from './pages/Usuario';
import Navigation from './components/navbar/Navigation';


const App = () => {
  return (
    <Router>
    <div>
      <Navigation />
      <Container maxWidth="md">
        <Routes>
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </div>
  </Router>
  );
};

export default App;
