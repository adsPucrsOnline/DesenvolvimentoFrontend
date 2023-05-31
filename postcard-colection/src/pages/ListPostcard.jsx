import React from 'react';
import usePostcards from '../hooks/usePostcards';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent } from '@mui/material';
import { Typography, CircularProgress } from '@mui/material';

function ListPostcard() {
    const { data, loading, error } = usePostcards(
      `http://localhost:5000/postcards`
    );
    
    if (loading) {
      return <CircularProgress />;
    }
  
    if (error) {
      return <Typography variant="body1">{error}</Typography>;
    }
  
    return (
      <Box marginTop={8}> 
      {data.map((postcard) => (      
        <Card key={postcard.id} sx={{ display: 'flex', alignItems: 'center', mb: 1, pl: 2  }}>
          <Box sx={{ width: '20%', height: '25%', backgroundColor: '#e0e0e0', mr: 2 }}>
            <img src={postcard.imageUrl} alt={postcard.name}  />
          </Box>
          <CardContent>
            <Link to={`/postcard/${postcard.id}`}>
              <Typography variant="h6" sx={{ color: 'orange', backgroundColor: 'black', alignItems: 'center', mb: 1, pl: 2 }}>{postcard.name}</Typography>
            </Link>
            <Typography variant="title" sx={{ color: 'orange', backgroundColor: 'black', display: 'inline-block' }}>{postcard.cidade}</Typography>
            <Typography variant="body1" sx={{ color: 'orange', backgroundColor: 'black', display: 'inline-block' }}>{postcard.pais}</Typography>
          </CardContent>
        </Card>       
      ))}
      </Box> 
    );
  }

export default ListPostcard;