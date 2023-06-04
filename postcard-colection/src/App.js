
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Container } from '@mui/material';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import ListPostcard from './pages/ListPostcard';
import Postcard from './pages/Postcard';
import AddPostcard from './pages/AddPostcard';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<ListPostcard />} />
            <Route path='/addpostcard' element={<AddPostcard />} />
            <Route path="/postcard/:id" element={<Postcard />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
