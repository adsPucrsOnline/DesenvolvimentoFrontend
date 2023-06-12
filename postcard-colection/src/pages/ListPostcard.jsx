import React, { useState, useEffect } from "react";
import usePostcardApi from "../hooks/usePostcardApi";
import { Link } from "react-router-dom";
import { Button, Box, Card, CardContent, IconButton } from "@mui/material";
import { Typography, CircularProgress, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListPostcard = () => {
  const { getAllPostcard, deletePostcard } = usePostcardApi();
  const [postcards, setPostcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPostcard, setSelectedPostcard] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPostcard();
        setPostcards(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("Error fetching postcards:", error, loading);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePostcard(id);
      setPostcards((prevPostcards) =>
        prevPostcards.filter((postcard) => postcard.id !== id)
      );
    } catch (error) {
      console.log("Error deleting postcard:", error);
    }
  };

  const handleOpenModal = (postcard) => {
    setSelectedPostcard(postcard);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPostcard(null);
    setOpenModal(false);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box marginTop={8}>
      {postcards.map((postcard) => (
        <Card
          data-testid="postcard"
          key={postcard.id}
          sx={{ display: "flex", alignItems: "center", mb: 2, pl: 2, maxHeight: 200, backgroundColor:"#f3eded" }}
        >
          <Box
            sx={{
              width: "90%",
              maxWidth: 250,
              height: 0,
              paddingTop: "90%",
              position: "relative",
            }}
          >
            <img
              src={postcard.imageUrl}
              alt={postcard.name}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <CardContent>
            <Link to={`/postcard/${postcard.id}`}>
              <Typography variant="h6" className="titulo" s>
                {postcard.name}
              </Typography>
            </Link>
            <Typography variant="title">{postcard.cidade}</Typography>
            <Typography variant="body1">{postcard.pais}</Typography>
          </CardContent>
          <IconButton
            data-testid="delete-button"
            onClick={() => handleOpenModal(postcard)}
          >
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Confirmar exclusão
          </Typography>
          <Typography variant="body1" gutterBottom>
            Deseja realmente excluir o postcard "{selectedPostcard?.name}"?
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}
          >
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{ marginRight: 2 }}
            >
              Cancelar
            </Button>
            <Button
              data-testid="confirm-delete-button"
              variant="contained"
              onClick={() => handleDelete(selectedPostcard?.id)}
              color="error"
            >
              Excluir
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ListPostcard;
