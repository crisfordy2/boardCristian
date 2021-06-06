const mongoose = require("mongoose");

const dataBase = async ()=>{
    try {
    await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    console.log("Connection with MongoBD : ON")
    } catch (error) {
        console.log("Error connecting with MongoDB", error);
        throw new error("Error connectiong with MongoDB");
    }
}


module.exports = {dataBase};