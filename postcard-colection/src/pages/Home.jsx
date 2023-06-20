import React from 'react';
import { Box, Card, Typography } from '@mui/material';


const Home = () => {
  return (
    <Box marginTop={16}> 
    <Card sx={{ alignItems: 'center', mb: 0, pl: 10,backgroundColor:"#f3eded", height:300 }}>
      <Typography variant="h3" sx={{ mt: 10}}>Postcar </Typography>
      <Typography variant="h4" sx={{ mt: 4}}>Coleção de Cartões Postais </Typography>
      <Typography variant="body1">Bem-vindo!</Typography>
    </Card>
    </Box>
  );
};

export default Home;