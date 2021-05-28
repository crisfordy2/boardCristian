const moogose = require("mongoose");

const boardSchema = new moogose.Schema({

    userId: String,
    name: String,
    description: String,
    imgUrl: String,
    status: String,
    date: {type: Date, default: Date.now}
})

const Board = moogose.model("board", boardSchema);

module.exports = Board;