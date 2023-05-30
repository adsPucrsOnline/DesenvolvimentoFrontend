import React from 'react';
import useApi from '../../hooks/useApi';
import { Typography, CircularProgress } from '@mui/material';
import './listUser.css';


const ListUser = () => {
  const { data, loading, error } = useApi('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">Lista de Usuários</Typography>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Typography variant="body1">{user.name}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListUser;
