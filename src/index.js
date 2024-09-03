// app.js
const express = require('express');
const swaggerDocs = require('./swagger');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

//enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Routes
app.use('/api', userRoutes);

// Starts swagger documentation
swaggerDocs(app, process.env.PORT);

// Middleware error management
app.use(errorMiddleware);

// Enabling server
app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}`);
});

