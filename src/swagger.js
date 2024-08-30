// imports needed
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL del servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Archivos de rutas donde definirás los endpoints
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Documentación disponible en http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;