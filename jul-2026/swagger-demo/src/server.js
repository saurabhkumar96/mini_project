const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();
const specs = require("./config/swagger")
app.use(express.json());

const path = require("path");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
app.use("/api", require("./routes/productsRoute"));





app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
    console.log("Swagger Docs: http://localhost:3000/api-docs");

});