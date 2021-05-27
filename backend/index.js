// import bookstores
const express = require("express");
const mongoose = require("mongoose");

// import routes
const User = require("./routes/user");
const Auth = require("./routes/auth");
const Board = require("./routes/board");

// create app
const app = express();


// uses
app.use(express.json())
app.use("/api/user/", User);
app.use("/api/auth/", Auth);
app.use("/api/board/", Board)


const port = process.env.PORT || 3001;


// listening the express and mongo
app.listen(port, ()=>{
    console.log("running port:", port);
})

mongoose.connect("mongodb://127.0.0.1:27017/boardCristianDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=>{console.log("conexion db successful")})
.catch((err)=>{console.log("error db:", err)})