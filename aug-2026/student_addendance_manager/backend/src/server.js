import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./models/student.model.js"
dotenv.config();
const app = express();


app.use(cors({
  origin: 'http://localhost:5173', // Your frontend origin (Do NOT use '*')
  credentials: true                // Allows the Access-Control-Allow-Credentials header
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import studentRoute from "./routes/student.route.js"
app.use("/api", studentRoute)

app.get('/', (req, res) => {
    res.send('test server')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})