const db  = require('../models/db')

exports.getAllproducts = function(req, res) {
    const sql = "SELECT * FROM products"

    db.all(sql, (err, rows) =>{
        if (err) {
            console.log(err);
        }else{
            res.json(rows)
        }
    })
}


exports.getAllproductsforPagination = function(req, res) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    const sql  = `SELECT * FROM products LIMIT ? OFFSET ?`

    db.all(sql,[limit, offset], (err, rows) =>{
        if (err) {
            console.log(err);
        }else{
            res.json(rows)
        }
    })
}

exports.getSingleProduct = function(req, res) {
    const id = req.params.id;
    db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
        if (err) {
            console.log(err);
        }
        if(!row){
            return res.status(404).json({
                message: "Product not found"
            })
        }else{
            res.json(row)
        }
    })
}