const express = require("express")
const cors = require("cors")
const app=  express()
const errorHandler = require("./middlewares/errorHandler")
const path = require("path")
const {exec} = require("child_process")

app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/products", require("./routes/productRoute"))
app.use("/search-sort", require("./routes/searchSortProductRoute"))
app.use(errorHandler);

app.post("/restart", (req, res)=> {
    res.json({message:"Restarting server"});

    exec("pm2 restart my-app")
})
app.get("/" ,(req, res)=>{
    res.send("Serve is running at 5000")
})

app.listen(5000, () => console.log("Server started on port 5000"))

