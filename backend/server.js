const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const moviesList = require('./database.json');

// Use CORS to allow cross-origin requests
app.use(cors());

app.get("/api/clips", (req, res) => {
  res.json({ moviesList });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
