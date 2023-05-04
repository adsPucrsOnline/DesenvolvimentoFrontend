import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Box sx={{ width: 50, height: 50 }}>
          <img src='/images/logo.png' alt="Logo" width={50} height={50} />
        </Box>
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre
        </Button>
        <Button color="inherit" component={Link} to="/cars">
          Carros
        </Button>
        <Button color="inherit" component={Link} to="/add">
          + Carro
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;