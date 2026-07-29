const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");



router.get("/", productController.getAllproducts);
router.get("/pagination", productController.getAllproductsforPagination);
router.get("/:id", productController.getSingleProduct);

router.post("/create", productController.createProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)
module.exports = router;