const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credintials: true
}))


const authRouter = require("./routes/auth.route")
const interViewRouter = require("./routes/interview.route")
app.use("/api/auth", authRouter)
// app.use("/api/interview", interViewRouter)

module.exports = app