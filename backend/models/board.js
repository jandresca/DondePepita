const mongoose = require("mongoose");

const boardSchame = new mongoose.Schema({
    productId: { type: mongoose.Schema.ObjectId, ref: "product"},
    name: String,
    description: String,
    taskStatus: String,
    imageUrl: String,
    date: { type: Date, default: Date.now },
});

const board = mongoose.model("board", boardSchame);
module.exports = board;