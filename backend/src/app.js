const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const articlesRoutes = require('./routes/articles.routes');
const { errorHandler } = require('./middleware/error.middleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', articlesRoutes);

// Error handling
app.use(errorHandler);

// Start server
const startServer = () => {
    app.listen(config.server.port, () => {
        console.log(`Server running on port ${config.server.port}`);
    });
};

startServer();