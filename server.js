require("dotenv").config();

const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");

const app = express();
app.use(cors());
app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌤️ CloudGroove server is running on port ${PORT}`);
});
