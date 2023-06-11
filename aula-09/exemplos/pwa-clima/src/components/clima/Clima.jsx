import React, { useState, useEffect } from 'react';
import { Card, Box, Container, Typography, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import {KEY_API_CLIMA} from '../../util/constantes'

const Clima = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Função para buscar a lista de estados a partir de uma API
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados'); // Substitua pelo URL da API de estados
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error('Erro ao buscar os estados:', error);
      }
    };

    fetchStates();
  }, []);

  const handleStateChange = async (event) => {
    setSelectedState(event.target.value);
    console.log(event)
    try {
    //   const response = await fetch(`https://api.example.com/weather?state=${event.target.value}`); // Substitua pelo URL da API de previsão do tempo
    //   const data = await response.json();
    const data =  {
        state: event.target.name,
        temperature: 25,
        condition: 'Ensolarado',
    }
      setWeather(data);
    
    } catch (error) {
      console.error('Erro ao buscar a previsão do tempo:', error);
    }
  };

  // Chame essa função no local adequado, por exemplo, no useEffect
// const fetchWeatherData = () => {
//     const apiKey = KEY_API_CLIMA;
//     const city = 'Porto Alegre';
//     const state = 'RS';
  
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},BR&appid=${apiKey}`;
  
//     axios
//       .get(apiUrl)
//       .then((response) => {    
//         setWeather(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
  
//   // Chame a função fetchWeatherData para fazer a chamada à API
//   fetchWeatherData();
  

  return (
    <Card sx={{ padding: '16px', margin: '8px' }}>
    <Container maxWidth="sm">
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Previsão do Tempo
      </Typography>

      <FormControl fullWidth>
        <Select value={selectedState} onChange={handleStateChange} displayEmpty>
          <MenuItem value="" disabled>
            Selecione o estado
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state.id} value={state.id} name={state.nome}>
              {state.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {weather && (
        <Box bgcolor="lightgrey" p={2} mb={2}>
          <Typography variant="h6" gutterBottom>
            Estado {weather.state}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Temperatura: {weather.temperature}°C
          </Typography>
          <Typography variant="body1" gutterBottom>
            Condição: {weather.condition}
          </Typography>
        </Box>
      )}
    </Container>
    </Card>
  );
};

export default Clima;
