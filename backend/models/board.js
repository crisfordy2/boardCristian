const moogose = require("mongoose");

const boardSchema = new moogose.Schema({

    userId: {type: moogose.Schema.ObjectId, ref: "user"},
    name: String,
    description: String,
    status: String,
    imageUrl: String,
    date: {type: Date, default: Date.now},
})

const Board = moogose.model("board", boardSchema);

module.exports = Board;