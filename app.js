// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const markerRoutes = require('./src/routes/markerRoutes');
// const dbPass = process.env.PASSWORD;

const app = express();

// Configuração do body-parser
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(`mongodb+srv://camila:OWruzyMUVsEUoDv1@maps.v85l9cv.mongodb.net/Maps?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Configurar as rotas
app.use('/', markerRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});