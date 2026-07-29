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


exports.createProduct = function(req, res) {
    const {name, price, category} = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO products(name, price, category)
        VALUES(?, ?, ?)
    `;

    db.run(sql,[name, price, category], (err)=>{
        if(err){
            return res.status(500).json(err)
        }
        res.status(201).json({
            message: "Product created",
            id: this.lastId
        })
    })
}


exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const sql = `
        UPDATE products
        SET
            name=?,
            price=?,
            category=?
        WHERE id=?
    `;

    db.run(
        sql,
        [name, price, category, id],
        function(err) {

            if (err) {
                return res.status(500).json(err);
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            res.json({
                message: "Product Updated"
            });
        }
    );
};


exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM products
        WHERE id=?
    `;
    db.run(
        sql,
        [id],
        function(err) {
            if (err) {
                return res.status(500).json(err);
            }
            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
            res.json({
                status: true,
                message: "Product Deleted"
            });
        }
    );

};