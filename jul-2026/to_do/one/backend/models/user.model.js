const db = require('../utils/db');

const initSchema = () => {
    const userTableSchema = `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `

    db.run(userTableSchema, (err) => {
        if (err) {
            console.error('Error creating user table:', err.message);
        } else {
            console.log('User table created successfully');
        }
    });
}

module.exports = {
    initSchema
}