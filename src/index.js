// app.js
const express = require('express');
const swaggerDocs = require('./swagger');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/users', usersRouter);

// Inicia la documentación de Swagger
swaggerDocs(app, PORT);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});