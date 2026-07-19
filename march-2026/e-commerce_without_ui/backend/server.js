import express from "express";
import dotenv from "dotenv";
import cors from "cors"





dotenv.config();
const app = express();
const port = process.env.PORT || 4000





app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

import { userRouter } from "./routes/user.route.js";
app.use("/api/user", userRouter)

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})