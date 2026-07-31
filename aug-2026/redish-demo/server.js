import express from "express";
import client from "./config/redis.js";
const app = express();


// await client.set("name", "Saurabh",{EX: 10});

const value = await client.get("name");
console.log(value)
app.get("/", (req, res) => {

    res.json([
        {
            id: 1,
            name: "Laptop"
        }
    ]);

});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});