const express = require("express")
const router = express.Router()
// const authController = require("../controllers/auth.controller")
const jwt = require("jsonwebtoken")
const protected = require("../middlewares/potected")

router.get("/getdata", (req,res)=>{
    const token = jwt.sign({data: "hello"}, "secret")
    res.json({token})
})

router.get("/protected",protected, (req,res)=>{
    res.json({token: req.userData})
})
module.exports = router