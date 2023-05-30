import React from 'react';
import { Typography } from '@mui/material';
import ListUser from '../components/listUser/listUser';

const Usuario = () => {
  return (
    <div>
      <Typography variant="h3">Usuários</Typography>
      <ListUser/>
    </div>
  );
};

export default Usuario;

