import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import CarsList from './components/CarsList/CarsList';
import CarDetail from './components/CarDetail/CarDetail';
import CarForm from './components/CarForm/CarForm';
import NotFound from './components/NotFound/NotFound';
// import { carsData } from './carsData';
import './App.css'
const API = 'http://localhost:5000/cars';
const App = () => {
  
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(carsData => setCars(carsData))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const addCar = (car) => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then(newCar => setCars([...cars, newCar]))
    .catch(error => console.error('Error adding car:', error));
  };

  const updateCar = (car) => {
    fetch(API +'/' + car.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then(updatedCar => setCars(cars.map(c => (c.id === updatedCar.id ? updatedCar : c))))
    .catch(error => console.error('Error updating car:', error));
  };

  const deleteCar = (carId) => {
    fetch(API +'/' + carId, {
      method: 'DELETE'
    })
    .then(() => setCars(cars.filter(c => c.id !== carId)))
    .catch(error => console.error('Error deleting car:', error));
  };

  return (
    
    <Router>
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          exact
          path="/cars/:id/edit"
          render={(props) => {
            const carId = parseInt(props.match.params.id);
            const car = cars.find((c) => c.id === carId);
            return (
              <CarForm
                {...props}
                onSubmit={updateCar}
                car={car}
              />
            );
          }}
        /> 
        <Route 
          exact path="/cars" 
          render={(props) => 
              <CarsList 
                cars={cars} 
                onDeleteCar={deleteCar}
              />} 
        />
        <Route
          path="/cars/:id"
          render={(props) => (
            <CarDetail
              {...props}
              cars={cars}
              onDeleteCar={deleteCar}
              onUpdate={updateCar}
            />
          )}
        />
        <Route
          path="/add"
          render={(props) => (
            <CarForm
              {...props}
              onSubmit={addCar}
              cars={cars}
            />
          )}
        />
        <Route component={NotFound} /> 
      </Switch>
      </div>
    </Router>
   
  );
};

export default App;