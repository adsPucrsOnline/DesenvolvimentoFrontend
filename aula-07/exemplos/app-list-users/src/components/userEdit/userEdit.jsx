import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Box, TextField, Button } from '@mui/material';
import { Typography, CircularProgress } from '@mui/material';

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
const [isSaved, setIsSaved] = useState(false);
  const { data, loading, error } = useApi('https://jsonplaceholder.typicode.com/users/'+parseInt(id));

  const [user, setUser] = useState(data);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>;
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsSaved(true);
    navigate('/usuario');
  };


  if (!user) {
    return <Typography variant="body1">Usuário não encontrado.</Typography>;
  }

  return (
    <Box marginTop={1}>
      <form>
        <TextField
          label="Nome"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          name="username"
          value={data.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default UserEdit;
