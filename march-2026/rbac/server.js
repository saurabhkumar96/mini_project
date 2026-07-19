import express from "express"
import { config } from "dotenv"
config()
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    res.json({message:"server is running"})
})

app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`)
})