const express = require("express");
const router = express.Router();
const db = require("../models/user.model");

router.post("/users", (req, res) => {
  const time = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const title = req.body.title + " " + time;
  const description = req.body.description + " " + time;
  const status = "pending";

  db.run(
    "INSERT INTO users(title, description, status) VALUES (?, ?, ?)",
    [title, description, status],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        id: this.lastID,
        title,
        description,
        status,
      });
    }
  );
});

router.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(rows);
  });
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  db.run(
    "UPDATE users SET status=? WHERE id=?",
    [status, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          error: "User not found",
        });
      }

      res.json({
        message: "User updated successfully",
      });
    }
  );
});

router.get("/users", (req, res) => {
  const { status } = req.query;

  db.all("SELECT * FROM users WHERE status=?", [status], (err, rows) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(rows);
  });
});

module.exports = router;
