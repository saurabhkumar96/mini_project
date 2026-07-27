const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/users', require('./routes/user.route'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});