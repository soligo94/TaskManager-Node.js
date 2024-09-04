// app.js
const express = require('express');
const swaggerDocs = require('./swagger');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const priorityRoutes = require('./routes/priorityRoutes');
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
app.use('/api', projectRoutes);
app.use('/api', priorityRoutes);

// Starts swagger documentation
swaggerDocs(app, process.env.PORT);

// Middleware error management
app.use(errorMiddleware);

// Enabling server
app.listen(process.env.PORT, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT}`);
});

