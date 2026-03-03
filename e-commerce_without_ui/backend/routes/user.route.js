import express from "express"
import { login, register,profile } from "../controllers/user.controller.js"
import { verifyToken } from "../middlewares/user.middleware.js"



export const userRouter = express.Router() 

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/profile",verifyToken,profile)