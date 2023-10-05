const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const markerRoutes = require('./src/routes/markerRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Configuração do body-parser
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect(`mongodb+srv://camila:${process.env.PASSWORD}@maps.v85l9cv.mongodb.net/Maps?retryWrites=true&w=majority`, {
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