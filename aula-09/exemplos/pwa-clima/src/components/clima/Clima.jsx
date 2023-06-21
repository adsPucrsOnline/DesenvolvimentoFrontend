import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { KEY_API_CLIMA } from "../../util/constantes";

const Clima = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Erro ao buscar os estados:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Erro ao buscar as cidades:", error);
      }
    };

    fetchCities();
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(""); // Limpar a seleção da cidade ao trocar o estado
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    fetchWeatherData(event.target.value); // Buscar a previsão do tempo da cidade selecionada
  };

  const fetchWeatherData = (city) => {
    const apiKey = KEY_API_CLIMA;
    const state = selectedState;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},BR&appid=${apiKey}`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("DATA --> ", response.data);
        setWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Card sx={{ padding: "16px", margin: "8px" }}>
      <Container maxWidth="sm">
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Previsão do Tempo
        </Typography>

        <FormControl fullWidth>
          <Select
            value={selectedState}
            onChange={handleStateChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Selecione o estado
            </MenuItem>
            {states.map((state) => (
              <MenuItem key={state.id} value={state.id}>
                {state.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedState && (
          <FormControl fullWidth>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Selecione a cidade
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city.id} value={city.nome}>
                  {city.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {weather && (
          <Box bgcolor="lightgrey" p={2} mb={2}>
            <Typography variant="body1" gutterBottom>
              Temperatura: {(weather.main.temp - 273.15).toFixed(2)}°C
            </Typography>
            <Typography variant="body1" gutterBottom>
              Condição: {weather.weather[0].description}
            </Typography>
          </Box>
        )}
        {!weather && (
          <Box bgcolor="red" p={2} mb={2}>
            <Typography variant="h6" gutterBottom>
              API Weather fora do Ar ou sem dados da localização!
            </Typography>
          </Box>
        )}
      </Container>
    </Card>
  );
};

export default Clima;
