const express = require("express");

const router = express.Router();

router.get("/products", (req, res) => {

    res.json([
        {
            id: 1,
            name: "Laptop"
        }
    ]);

});

module.exports = router;