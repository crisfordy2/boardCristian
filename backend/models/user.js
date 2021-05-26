const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

// model of collection
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: {type: Date, default: Date.now}
})

// generate token
userSchema.methods.generateJWT = function() {
    return jwt.sign({
        _id: this._id,
        name: this.name,
        iot: moment().unix()
    }, "TokenJWT")
}

// generate model User
const User = mongoose.model("user", userSchema);

module.exports = User;


