import express from "express"
import authRouter from "./routes/auth.route.js"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth",authRouter)

app.get("/",(req,res)=>{
    res.json({message:"server is running"})
})

app.listen(3000,()=>{
    console.log(`server is running at http://localhost:3000`)
})