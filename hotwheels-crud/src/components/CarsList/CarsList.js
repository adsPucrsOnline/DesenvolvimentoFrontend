import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Button, Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CarsList = ({ cars, onDeleteCar }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      // Verifica se o usuário chegou ao final da lista
      fetchMoreData(); // Chama a função para carregar mais dados
    }
  };

  const fetchMoreData = () => {
    // Simula uma requisição assíncrona para carregar mais dados
    setTimeout(() => {
      // Atualiza o estado com os novos dados
      setCurrentPage(currentPage + 1);
      // Adicione aqui a lógica para carregar mais itens na lista, por exemplo, chamando uma API
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', marginTop: '74px'}}>Lista de Carros</h1>
      <Container maxWidth="sm" onScroll={handleScroll} style={{ maxHeight: '300px', overflowY: 'auto' }}>
        
        {cars.map((car) => (
          <ListItem key={car.id}>
            <ListItemAvatar>
              <Avatar alt={car.name} src={car.image} />
            </ListItemAvatar>
            <ListItemText primary={`${car.name} - ${car.brand}`} />
            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />} onClick={() => onDeleteCar(car.id)}>
              Excluir
            </Button>
          </ListItem>
        ))}
      
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
        <Button component={Link} to="/add" variant="contained" color="primary">
          Adicionar Carro
        </Button>
      </div>
    </div>
  );
};

export default CarsList;
