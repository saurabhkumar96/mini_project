const express = require('express');
const app = express();

// Built-in middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
const router = require('./routes/userRoute');
app.use('/api', router);

module.exports = app;
