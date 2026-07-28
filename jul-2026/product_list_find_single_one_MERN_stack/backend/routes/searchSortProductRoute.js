const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const searchSortController = require("../controllers/searchSortProductController")


// router for creating the data
router.get("/", productController.getAllproducts);
router.get("/",searchSortController.getAllproducts)
router.get("/:id", productController.getSingleProduct);

module.exports = router;