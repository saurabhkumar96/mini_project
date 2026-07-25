const express = require("express");
const router = express.Router();
const db = require("../models/userModel");


router.post("/user", (req, res) => {
    const { title, description, status } = {
        title: "My Title",
        description: "My Description",
        status: "pending"
    };

    db.run(
        "INSERT INTO users(title, description, status) VALUES (?, ?, ?)",
        [title, description, status],
        function (err) {
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                id: this.lastID,
                title,
                description,
                status,
                message: "User added successfully"
            });
        }
    );
});

router.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) return res.status(500).json(err);

        res.json(rows);
    });
});

module.exports = router;
