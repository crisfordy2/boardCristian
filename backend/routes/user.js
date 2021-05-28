const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");

// registro usuarios - URL: http://localhost:3001/api/user/registerUser
router.post("/registerUser", async (req, res)=>{
    
    let user = await User.findOne({email: req.body.email})    
    if(user) return res.status(400).send("user already exists")
    const hash = await bcrypt.hash(req.body.password, 10);

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })  

    const result = await user.save()
    if(result){
        const tokenJWT = user.generateJWT();
        res.status(200).send(tokenJWT)
    }else{
        return res.status(400).send("failed in the creating user")
    }
})

module.exports = router;

