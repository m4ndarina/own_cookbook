const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('api para cookbook propio');
});

app.get('/recetas', (req, res) => {
  res.send('recetas (wip)');
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});