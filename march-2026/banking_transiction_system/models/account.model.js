const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
        },
        status:{
            type: String,
            enum: ["active", "inactive"],
            default: "active",
        },
        currency: {
            type: String,
            default: "INR",
        }
    },
    {
        timestamps: true,
    }
);

const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;