const db  = require('../models/db')

exports.getAllproducts = function(req, res) {
    db.all("SELECT * FROM products", (err, rows) =>{
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