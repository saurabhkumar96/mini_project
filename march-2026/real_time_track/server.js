const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const server = http.createServer(app)

const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

// client connection event
io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on("send-location",(data) => {
        io.emit("receive-location", {id:socket.id, ...data})
    })

    socket.on('disconnect', () => {
        io.emmit("user-disconnected", socket.id);
    });
});

app.get('/', (req, res) => {
    res.render('index');
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});