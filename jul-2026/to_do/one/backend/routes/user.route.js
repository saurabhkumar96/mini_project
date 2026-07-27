const express = require('express');
const router = express.Router();
const {initSchema} = require('../models/user.model');

router.get('/', async (req, res) => {
    await initSchema();
    const createUser = 
    res.send('User route');
});




module.exports = router;