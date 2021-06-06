const express = require("express");
const {dataBase} = require("./db/db");
const cors = require("cors");
require("dotenv").config();

const User = require("./routes/user");
const Board = require("./routes/board");
const Auth = require("./routes/auth");
const Role = require("./routes/role");


const app = express();

app.use(express.json())
app.use(cors());
app.use("/api/user/", User);
app.use("/api/auth/", Auth);
app.use("/api/board/", Board)
app.use("/api/role/", Role)


app.listen(process.env.PORT, ()=>{
    console.log("running port:", process.env.PORT);
})

dataBase();
