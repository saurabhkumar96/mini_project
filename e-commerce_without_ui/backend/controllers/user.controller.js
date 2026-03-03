import {prisma} from "../lib/prisma.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const register = async (req, res) => {
    const {name, email, password}=  req.body
    try {
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }
        const checkUser = await prisma.user.findUnique({
            where:{email}
        })
        if(checkUser){
            return res.status(400).json({message: "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })
        return res.status(201).json({message: "User created successfully", user})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({message: "Server error"})
    }
}

export const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await prisma.user.findUnique({
            where: {email}
        })
        if(!user){
            return res.status(400).json({message: "User does not exist"})
        }
        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword) {
            return res.status(400).json({message: "Invalid password"})
        }
        const token = jwt.sign({id: user.id,email:user.email, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1d"})
        return res.status(200).json({message: "User logged in successfully", token})
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: "Server error"})
    }
}

export const profile = async (req,res)=>{
    if(!req.user){
        return res.status(401).json({message: "Unauthorized"})
    }
    return res.status(200).json({message: "User profile", user: req.user})
}