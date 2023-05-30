import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import UserEdit from '../components/userEdit/userEdit';

const UserEditPage = ({ users }) => {
  const { id } = useParams();

  return (
    <Box marginTop={8}>
      <h1>Edição de Usuário</h1>
      <UserEdit users={users} />
    </Box>
  );
};

export default UserEditPage;
