import jwt from "jsonwebtoken"
import { prisma } from "../lib/prisma.js"

export const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization || !req.headers.Authorization) {
        return res.status(401).json({message: "Unauthorized"})
    }
    const token  = req.headers.authorization.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await prisma.user.findUnique({
            where:{
                id: decoded.id
            }
        })
        if(!user){
            return res.status(401).json({message: "Unauthorized"})
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message:"server error"})
    }
}