const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/login", async(req, res)=>{

    // search the email
    const user = await User.findOne({email: req.body.email});

    // if it doesn't exist
    if(!user) return res.status(400).send("User or password incorrect");

    // if exist , compare the password
    const hash = await bcrypt.compare(req.body.password, user.password);

    // if the passwords aren't equals
    if(!hash) return res.status(400).send("User or password incorrect");

    const tokenJWT = user.generateJWT();
    return res.status(200).send({tokenJWT});
})

module.exports = router;
