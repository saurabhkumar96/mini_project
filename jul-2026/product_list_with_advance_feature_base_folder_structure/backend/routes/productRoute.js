const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const validateProduct = require("../middlewares/validateProduct")

const upload = require("../middlewares/upload")



router.get("/", productController.getAllproducts);
router.get("/pagination", productController.getAllproductsforPagination);
router.get("/:id", productController.getSingleProduct);

router.post("/create", validateProduct,upload.single("image"),productController.createProduct)
router.put("/:id",validateProduct, productController.updateProduct)
router.delete("/:id", productController.deleteProduct)
router.delete("/", productController.deleteAllProducts)
module.exports = router;