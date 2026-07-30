const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");


const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Product API",
            version: "1.0.0",
            description: "Learning Swagger"
        },

        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },

    apis: [path.join(__dirname, "../src/routes/productsRoute/*.js")]
};



const specs = swaggerJsdoc(options);

module.exports = specs;
