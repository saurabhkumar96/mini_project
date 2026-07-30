const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Returns a list of all products.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Successfully retrieved products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Laptop
 */
router.get("/products", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Laptop",
    },
  ]);
});

module.exports = router;