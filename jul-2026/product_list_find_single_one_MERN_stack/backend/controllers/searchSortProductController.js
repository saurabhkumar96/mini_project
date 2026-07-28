
exports.getAllproducts = function(req, res) {
    db.all("SELECT * FROM products", (err, rows) =>{
        if (err) {
            console.log(err);
        }else{
            res.json(rows)
        }
    })
}