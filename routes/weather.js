const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../services/weatherService");

router.get("/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const weatherData = await getWeatherByCity(city);
    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
