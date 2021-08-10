const mongoose = require("mongoose");
const moment = require("moment");

const productSchema = new mongoose.Schema({
    name: String,
    price: 0,
    storeId: { type: mongoose.Schema.ObjectId, ref: "store" },
    description: String,
    date: { type: Date, default: Date.now },
});

const product = mongoose.model("product", productSchema);
module.exports = product;