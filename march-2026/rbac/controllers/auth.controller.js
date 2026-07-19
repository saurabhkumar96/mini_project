import prisma from "../lib/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hash_password = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hash_password,
        role: role,
      },
    });
    res.status(201).json({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
    try {
        const {email,password} = req.body
        console.log(email,password)
        const user = await prisma.user.findUnique({where:{email}})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({message:"invalid credentials"})
        }
        const token = jwt.sign({id:user.id, email:user.email, role:user.role}, process.env.JWT_SECRET)
        res.status(200).json({message:"login sucessfull", token})
    } catch (error) {   
        res.status(500).json({message: error.message})
    }
};
