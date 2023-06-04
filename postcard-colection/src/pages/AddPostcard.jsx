import React from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PostcardAdd from '../components/PostcardEdit/PostcardAdd';

const AddPostcard = ({ postcards }) => {
  const { id } = useParams();

  return (
    <Box marginTop={8}>
      <h1>Inclusão de Postcard</h1>
      <PostcardAdd />
    </Box>
  );
};

export default AddPostcard;