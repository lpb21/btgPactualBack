"use strict";
const express = require("express")
//const connectDB = require("./src/config"); // Importar la conexión
const {connectDB} = require('./db/database');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const { Config } = require("./src/config/index")
//const errorHandler = require('./middlewares/koibanx/errorhandler')

const app = express()

// app.use(cors({
//   origin: Config.cors_origin, // Soporta múltiples entornos
//   credentials: true // Permite cookies y autenticación si se requiere
// }));
app.use(cors({ origin: "*" }));


// Middleware de BodyParser para JSON y datos grandes
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));

// Middleware para analizar JSON
app.use(express.json());

connectDB();

// Rutas principales
app.use('/v1', routes)

app.get('/', (req, res) => {
  res.send('¡Hola desde mi aplicación Node.js!');
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `La ruta ${req.originalUrl} no existe en este servidor`
  });
});


app.listen(Config.port, () => {
  console.log(`🚀 Servidor escuchando en el puerto  ${Config.port}`);
});
