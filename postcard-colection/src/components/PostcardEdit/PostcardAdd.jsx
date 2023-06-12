import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import usePostcards from "../../hooks/usePostcards";
import { Box, TextField, Button } from "@mui/material";


const PostcardAdd = () => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const { data } = usePostcards(
    `http://localhost:5000/postcards/`
  );

  const [postcard, setPostcard] = useState(data || {
    name: "",
    cidade: "",
    pais: "",
    descricao: "",
    imageUrl: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostcard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Aqui você pode fazer uma chamada para a API usando o axios para salvar o postcard
    // Exemplo de como fazer a chamada de API
    axios.post("http://localhost:5000/postcards", postcard)
      .then(() => {
        setIsSaved(true);
        navigate("/list");
      })
      .catch((error) => {
        console.log(isSaved);
      });

    // Como exemplo, estou apenas definindo a variável isSaved como true e navegando para a lista
    setIsSaved(true);
    navigate("/list");
  };

  return (
    <Box marginTop={1}>
      <form>
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

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </form>
    </Box>
  );
};

export default PostcardAdd;
