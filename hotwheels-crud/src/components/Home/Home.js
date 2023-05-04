import React from 'react';
import { Card, CardContent, Typography, CardMedia, Container } from '@mui/material';


const Home = () => {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardMedia
          component="img"
          height="200"
          image='/images/car.png' Insira o nome da sua imagem aqui
          alt="Imagem do Carro"
        />
        <CardContent>
          <Typography variant="h5" component="h1">
            HotWheels
          </Typography>
          <Typography variant="body1" component="p">
            Bem-vindo a coleção HotWheels!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;

