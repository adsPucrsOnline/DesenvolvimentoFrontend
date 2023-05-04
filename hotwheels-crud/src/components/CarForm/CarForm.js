import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Typography, TextField, Button, Grid, Box } from '@mui/material';

const CarForm = ({ match, cars, onSubmit }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (match.params.id) {
      const carId = parseInt(match.params.id);
      const car = cars.find((car) => car.id === carId);
      if (car) {
        setName(car.name);
        setBrand(car.brand);
        setColor(car.color);
        setYear(car.year);
      }
    }
  }, [match.params.id, cars]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carId = parseInt(match.params.id);
    const car = {
      id: carId || Math.max(...cars.map((car) => car.id)) + 1,
      name,
      brand,
      color,
      year
    };
    onSubmit(car);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/cars" />;
  }

  return (
    <Box
    sx={{
      width: 300,
      height: 300,
     
    }}>
      <Typography variant="h3">
        {match.params.id ? 'Editar' : 'Novo'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Cor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ano"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}   container direction="row" justifyContent="center" alignItems="center">
            <Button type="submit" variant="contained" color="primary">
              {match.params.id ? 'Atualizar' : 'Adicionar'}
            </Button>
            <Button component={Link} to="/cars" color='secondary'>
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CarForm;
