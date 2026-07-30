const express = require("express")
const cors = require("cors")
const app=  express()


app.use(cors())
app.use(express.json())

app.use("/products", require("./routes/productRoute"))
app.use("/search-sort", require("./routes/searchSortProductRoute"))

app.get("/" ,(req, res)=>{
    res.send("Serve is running at 5000")
})

app.listen(5000, () => console.log("Server started on port 5000"))

