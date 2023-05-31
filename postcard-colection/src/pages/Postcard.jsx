import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, Typography } from '@mui/material';


const Postcard = () => {
  const { id } = useParams();

  return (
    <Box marginTop={16}> 
      <Card sx={{ alignItems: 'center', mb: 0, pl: 10 }}>
        <Typography variant="h3">Postcar {id} </Typography>
      </Card>
    </Box>
  );
};

export default Postcard;