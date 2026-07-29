const db = require("../models/db")

exports.getProducts = (req, res) => {
    const search = req.query.search || "";
    const sort = req.query.sort || "id";
    const order = req.query.order || "ASC"

    console.log(search, sort, order)

    // sql injection protection
    const allowedSort = ["id", "name", "price", "category"];
    
    const sortColumn = allowedSort.includes(sort)
    ? sort
    : "id";
    
    const sortOrder =
    order.toUpperCase() === "DESC"
    ? "DESC"
    : "ASC";
    // end of sql injection protection
    
    const sql = `
                    SELECT *
                    FROM products
                    WHERE name LIKE ?
                    ORDER BY ${sortColumn} ${sortOrder}
                `;
    db.all(sql, [`%${search}%`], (err, rows) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(rows)
    })

}