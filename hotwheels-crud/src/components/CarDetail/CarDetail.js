import React from 'react';
import { Link } from 'react-router-dom';

const CarDetail = ({ match, cars, onDeleteCar }) => {
  const carId = parseInt(match.params.id);
  const car = cars.find((car) => car.id === carId);

  if (!car) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <div>
      <h1>Detalhes</h1>
      <h2>{car.name}</h2>
      <p>Marca: {car.brand}</p>
      <p>Cor: {car.color}</p>
      <p>Ano: {car.year}</p>
      <Link to={`/edit/${car.id}`}>Editar</Link>
      <button onClick={() => onDeleteCar(car.id)}>Excluir</button>
      <Link to="/cars">Voltar</Link>
    </div>
  );
};

export default CarDetail;
