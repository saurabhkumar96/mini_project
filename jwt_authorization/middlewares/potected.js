const jwt = require("jsonwebtoken")

const protected = (req, res, next) => {
    if(!req.headers.authorization) return res.status(401).json({message: "unauthorized"})
    const token = req.headers.authorization.split(" ")[1]
    const decoded = jwt.verify(token, "secret")
    req.userData = decoded
    next()
}

module.exports = protected