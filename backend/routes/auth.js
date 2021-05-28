const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

// logueo usuario - URL: http://localhost:3001/api/auth/login
router.post("/login", async(req, res)=>{
    
    const user = await User.findOne({email: req.body.email});    
    if(!user) return res.status(400).send("User or password incorrect");    
    const hash = await bcrypt.compare(req.body.password, user.password);    
    if(!hash) return res.status(400).send("User or password incorrect");
    const tokenJWT = user.generateJWT();
    return res.status(200).send({tokenJWT});
})

module.exports = router;
