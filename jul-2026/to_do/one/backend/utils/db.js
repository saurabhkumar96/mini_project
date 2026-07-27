const sqlite3 = require('sqlite3').verbose(); // Enable verbose stack traces
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) return console.error('Database connection failed:', err.message);
    console.log('Connected to the SQLite database.');
});


module.exports = db;