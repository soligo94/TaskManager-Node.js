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
        url: 'http://localhost:3000/api', // Server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // File path where endpoints are defined.
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger avaliable in: http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;