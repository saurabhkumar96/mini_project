module.exports = (req, res, next) => {

    const { name, price, category } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Product name is required"
        });
    }

    if (typeof price !== "number") {
        return res.status(400).json({
            success: false,
            message: "Price must be a number"
        });
    }

    if (price <= 0) {
        return res.status(400).json({
            success: false,
            message: "Price must be greater than 0"
        });
    }

    if (!category || category.trim() === "") {
        return res.status(400).json({
            success: false,
            message: "Category is required"
        });
    }

    next();

};