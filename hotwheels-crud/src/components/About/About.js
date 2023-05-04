import React from 'react';
import { Paper, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4" component="h1">
          Sobre
        </Typography>
        <Typography variant="body1" component="p">
          <p>Esta é uma aplicação para um CRUD de carros HotWheels.</p>
          <p>Elaborada na Disciplina Desenvolvimento de Sistemas Frontend.</p>
          <p>Do curso de Graduação OnLine da PUCRS.</p>
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;


