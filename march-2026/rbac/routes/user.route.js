import express from "express"
const router = express.Router()
import { verifytoken } from "../middlewares/auth.middleware.js"
import { authorizeRole } from "../middlewares/role.middleware.js"

// only admin can access
router.get("/admin", verifytoken, authorizeRole("ADMIN"), (req,res)=>{
    const user = req.user
    res.json({message:"welcome Admin",user})
})

// both admin and manager can access
router.get("/manager", verifytoken, authorizeRole("MANAGER","ADMIN"), (req,res)=>{
    const user = req.user
    res.json({message:"welcome Manager",user})
})

// all can access this router
router.get("/user", verifytoken,authorizeRole("MANAGER","ADMIN","USER"), (req,res)=>{
    const user = req.user
    res.json({message:"welcome User", user})
})


export default router