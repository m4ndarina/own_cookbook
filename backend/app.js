const express = require('express');
const mongoose = require('mongoose');
const dns = require('dns');
const cors = require('cors');
const recipeRoutes = require('./src/routes/routes');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3000;

// forzando a node a usar los servidores dns de google y cloudflare para evitar errores con la uri de mongoDB, usar cors para permitir peticiones de cualquier origen
dns.setServers(['1.1.1.1', '8.8.8.8']);
app.use(cors());

app.use(express.json());

// conexión a mongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('conectado a mongoDB'))
  .catch(err => console.error('ocurrió un error al conectar a mongoDB:', err));

// rutas
app.use('/api/recetas', recipeRoutes);

// iniciar servidor
app.listen(PORT, () => {
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});

