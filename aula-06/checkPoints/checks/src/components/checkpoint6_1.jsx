import React, { useState, useEffect } from "react";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://http://apiadvisor.climatempo.com.br/api/v1/climate/temperature/"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>Failed to fetch weather data</div>;
  }

  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
    </div>
  );
};

export default WeatherWidget;
