const axios = require("axios");

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherByCityOrCoords = async (query) => {
  let params = {
    appid: API_KEY,
    units: "metric",
  };

  if (query.includes(",")) {
    // It's lat,lon coordinates
    const [lat, lon] = query.split(",");
    params.lat = lat.trim();
    params.lon = lon.trim();
  } else {
    // It's a city name
    params.q = query.trim();
  }

  const response = await axios.get(BASE_URL, { params });
  return response.data;
};

module.exports = { getWeatherByCityOrCoords };
