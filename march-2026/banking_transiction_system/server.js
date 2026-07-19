const express = require("express")
const app = express()
const route = require("./routes/user.route")
const accountRoute = require("./routes/accout.route")

app.use("/api/auth", route)
app.use("/api/account", accountRoute)





app.get("/", (req, res) => {
    
    res.send("Hello World")
    })


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
