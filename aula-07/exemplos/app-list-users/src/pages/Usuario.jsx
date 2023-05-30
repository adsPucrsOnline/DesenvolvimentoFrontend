import React from 'react';
import { Typography } from '@mui/material';
//import ListUser from '../components/listUser/listUser';
import UserListItem from '../components/listUserPhoto/listUserPhoto';

const Usuario = () => {
  return (
    <div>
      <Typography variant="h3">Usuários</Typography>    
      <UserListItem/> 
    </div>
  );
};

export default Usuario;

