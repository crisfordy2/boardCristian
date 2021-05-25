const moogose = require("mongoose");

// collection

const boardSchema = new moogose.Schema({

    user_id: Obcject_id,
    name: String,
    description: String,
    imgUrl: String,
    status: String,
    date: {type: Date, default: Date.now}
})

// model
const Board = moogose.model("board", boardSchema);

module.exports = Board;