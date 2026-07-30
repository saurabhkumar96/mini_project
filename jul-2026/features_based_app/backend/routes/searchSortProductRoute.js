const express = require("express");
const router = express.Router();
const searchSortController = require("../controllers/searchSortProductController")


// router for creating the data
router.get("/", searchSortController.getProducts);

module.exports = router;