const connectToMongo = require('./db');
const express = require('express');

// Initialize app before using it
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectToMongo();

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
