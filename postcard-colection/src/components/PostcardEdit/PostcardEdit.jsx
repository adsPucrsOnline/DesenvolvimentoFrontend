import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Card, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import usePostcards from '../../hooks/usePostcardApi';

const PostcardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { getPostcard, updatePostcard } = usePostcards();
  const [postcard, setPostcard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postcardData = await getPostcard(String(id));
        console.log(" ---> ", postcardData)
        setPostcard(postcardData);
      } catch (error) {
        console.log('Error fetching postcard:', error);
      }
    };

    fetchData();
  }, [getPostcard, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostcard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    try {
      await updatePostcard(postcard);
      setIsSaved(true);
      navigate('/list');
    } catch (error) {
      console.log('Error saving postcard:', error);
    }
  };

  if (!postcard) {
    return <Typography variant="body1">Postcard não encontrado.</Typography>;
  }

  return (
    <Box marginTop={1}>
      <form>
        <TextField
          label="Nome"
          name="name"
          value={postcard.name}
          //onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cidade"
          name="cidade"
          value={postcard.cidade}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="País"
          name="pais"
          value={postcard.pais}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          name="descricao"
          value={postcard.descricao}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Imagem URL"
          name="imageUrl"
          value={postcard.imageUrl}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={postcard.imageUrl} title={postcard.name} />
        </Card>

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default PostcardEdit;
