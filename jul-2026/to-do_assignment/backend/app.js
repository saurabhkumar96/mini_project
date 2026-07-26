const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();


// testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
const router = require('./routes/user.route');
app.use('/api', router);

module.exports = app;
