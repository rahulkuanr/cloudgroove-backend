const express = require("express");
const router = express.Router();
const { getWeatherByCityOrCoords } = require("../services/weatherService");

router.get("/:query", async (req, res) => {
  try {
    const weatherData = await getWeatherByCityOrCoords(req.params.query);
    res.json(weatherData);
  } catch (err) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
