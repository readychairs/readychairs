const express = require('express');
const app = express();
const PORT = 4000;
const errorHandler = require('./middleware/errorHandler');

// Register JSON middleware
app.use(express.json());



// Register routes from /routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/about', require('./routes/about'));

// Register 404 handler
app.use((req, res, next) => {
    res.status(404).json({err : "Route Not Found"});
});

// Register global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
