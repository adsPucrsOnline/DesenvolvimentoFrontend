import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import usePostcards from "../../hooks/usePostcards";
import { Box, TextField, Button, Card, CardMedia } from "@mui/material";
import { Typography, CircularProgress } from "@mui/material";

const PostcardAdd = () => {
  //const { id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data, loading, error } = usePostcards(
      `http://localhost:5000/postcards/1`
  );

  const [postcard, setPostcard] = useState(data);

   if (loading) {
     console.log(data, loading)
     return <CircularProgress />;
   }

   if (error) {
     return <Typography variant="body1">{error}</Typography>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostcard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    setIsSaved(true);
    navigate("/list");
  };



  return (
    <Box marginTop={1}>
      <form>
  
        <>
        <TextField
          label="Nome"
          name="name"
          value={postcard.name}
          onChange={handleInputChange}
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
       </>

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
    
      </form>
    </Box>
  );
};

export default PostcardAdd;
