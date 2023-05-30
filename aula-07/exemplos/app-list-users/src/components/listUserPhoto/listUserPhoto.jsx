import React from 'react';
import useApi from '../../hooks/useApi';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, Avatar } from '@mui/material';
import { Typography, CircularProgress } from '@mui/material';

const UserListItem = () => {
  const { data, loading, error } = useApi('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }

  return (
    <Box marginTop={4}> 
      {data.map((user) => (      
        <Card key={user.id} sx={{ display: 'flex', alignItems: 'center', mb: 1, pl: 2  }}>
          <Avatar src={`https://i.pravatar.cc/170?u=${user.id}`} alt={user.name}  />
          <CardContent>
            <Link to={`/usuario/editar/${user.id}`}>
              <Typography variant="h6">{user.name}</Typography>
            </Link>
            <Typography variant="subtitle1" color="textSecondary">{user.username}</Typography>
            <Typography variant="body1" color="textSecondary">{user.email}</Typography>
          </CardContent>
        </Card>
       
      ))}
  </Box> 
  );
};

export default UserListItem;

