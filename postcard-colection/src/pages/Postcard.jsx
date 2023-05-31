import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PostcardEdit from '../components/PostcardEdit/PostcardEdit';

const Postcard = ({ postcards }) => {
  const { id } = useParams();

  return (
    <Box marginTop={8}>
      <h1>Edição de Postcard</h1>
      <PostcardEdit postcard={postcards} />
    </Box>
  );
};

export default Postcard;