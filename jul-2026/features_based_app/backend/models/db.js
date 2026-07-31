const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Database connected")
    }
})


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            price INTEGER,
            category TEXT,
            image TEXT
        )
    `);
    

    db.run(`
       INSERT INTO products (name, price, category)
        VALUES
        ('Apple iPhone 15', 79999, 'Mobile'),
('Samsung Galaxy S25', 74999, 'Mobile'),
('OnePlus 13', 69999, 'Mobile'),
('Dell Inspiron 15', 58999, 'Laptop'),
('MacBook Air M3', 114999, 'Laptop'),
('HP Pavilion 14', 62999, 'Laptop'),
('Sony WH-1000XM5', 29999, 'Headphones'),
('Boat Rockerz 450', 1499, 'Headphones'),
('Apple Watch Series 10', 46999, 'Smartwatch'),
('Samsung Galaxy Watch 7', 32999, 'Smartwatch'),
('Nike Air Max', 8999, 'Shoes'),
('Adidas Ultraboost', 12999, 'Shoes'),
('Puma Running Shoes', 4999, 'Shoes'),
('Logitech MX Master 3S', 8995, 'Accessories'),
('Keychron K2 Keyboard', 7499, 'Accessories');
    `);
})

module.exports = db