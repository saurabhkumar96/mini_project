const express = require('express');
const { sendEmail } = require('../controllers/email.controller');

const router = express.Router();

router.post('/send', sendEmail);

module.exports = router;
