const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 3000;
const moviesList = require('./database.json');

// Use CORS to allow cross-origin requests
// app.use(cors());

// Middleware do obsługi statycznych plików Reacta
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/clips', (req, res) => {
  res.json({ moviesList });
});

// Wszystkie inne ścieżki przekierowuj na plik index.html (frontend routing Reacta)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
