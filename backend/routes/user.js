const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/user");
const Role = require("../models/role");
const mongoose = require("mongoose");

const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");


router.post("/registerUser", async (req, res)=>{
    
    if(!req.body.name || !req.body.email || !req.body.password) return res.status(401).send("Imcomplete data");    
    
    let user = await User.findOne({email: req.body.email})    
    if(user) return res.status(400).send("user already exists")
    const hash = await bcrypt.hash(req.body.password, 10);
    
    const role = await Role.findOne({name: "user"});
    if(!role) return res.status(401).send("Unassigned Role")    
    
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: role._id,
        active: true
    })  

    try {
        const result = await user.save()
        if(!result) return res.status(400).send("failed in the creating user")
        const tokenJWT = user.generateJWT();
        res.status(200).send({tokenJWT})        
    } catch (error) {
        return res.status(400).send("failed in the creating user")        
    }
    
})

router.get("/listUsers/:name?", Auth , UserAuth , Admin, async (req, res) =>{

    const users = await User.find({name: new RegExp(req.params["name"], "i")}).populate("roleId").exec();
    if(!users) return res.status(401).send("No results");
    return res.status(200).send({users});
                        
})


router.post("/registerAdmin",  Auth , UserAuth , Admin, async (req, res)=>{    
    
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.roleId ) return res.status(401).send("Imcomplete data");
    
    let user = await User.findOne({email: req.body.email})    
    if(user) return res.status(400).send("user already exists")
    const hash = await bcrypt.hash(req.body.password, 10);   

    const validateRole = mongoose.Types.ObjectId.isValid(req.body.roleId);
    if(!validateRole) return res.status(401).send("Invalid Id");
    
    const role = await Role.findById(req.body.roleId);
    if(!role) return res.status(401).send("Unassigned Role")
    
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: role._id,
        active: true
    })  

    try {
        const result = await user.save()
        if(!result) return res.status(400).send("failed in the creating user")
        const tokenJWT = user.generateJWT();
        res.status(200).send(tokenJWT)        
    } catch (error) {
        return res.status(400).send("failed in the creating user")        
    }
    
})


router.put("/updateUser",  Auth , UserAuth , Admin, async (req, res)=>{    
    
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.roleId || !req.body._id) return res.status(401).send("Imcomplete data");    
    
    const hash = await bcrypt.hash(req.body.password, 10);   

    const validateRole = mongoose.Types.ObjectId.isValid(req.body.roleId);
    if(!validateRole) return res.status(401).send("Invalid Role Id");

    const validateId = mongoose.Types.ObjectId.isValid(req.body._id);
    if(!validateId) return res.status(401).send("Invalid Id Id");
    
    const role = await Role.findById(req.body.roleId);    
    if(!role) return res.status(401).send("Unassigned Role");    

    const userId = await User.findById(req.body._id);
    if(!userId) return res.status(401).send("Unassigned Id")
    
    const user = await User.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: role._id,
        active: req.body.active
    })   
    
    if(!user) return res.status(401).send("Error Updating");
    return res.status(200).send({user});   
    
})


router.delete("/deleteUser/:_id", Auth, UserAuth, Admin, async (req, res) => {
    const validId = mongoose.Types.ObjectId.isValid(req.params._id);
    if (!validId) return res.status(401).send("Process failed: Invalid id");
    
    const users = await User.findByIdAndDelete(req.params._id);
    if (!users) return res.status(401).send("Failed to delete user");
    return res.status(200).send("User deleted");
});

router.put("/deleteUser",  Auth , UserAuth , Admin, async (req, res)=>{    
    
    if(!req.body.name || !req.body.email || !req.body.password || !req.body.roleId || !req.body._id) return res.status(401).send("Imcomplete data");    
    
    const hash = await bcrypt.hash(req.body.password, 10);   

    const validateRole = mongoose.Types.ObjectId.isValid(req.body.roleId);
    if(!validateRole) return res.status(401).send("Invalid Role Id");

    const validateId = mongoose.Types.ObjectId.isValid(req.body._id);
    if(!validateId) return res.status(401).send("Invalid Id Id");
    
    const role = await Role.findById(req.body.roleId);    
    if(!role) return res.status(401).send("Unassigned Role");    

    const userId = await User.findById(req.body._id);
    if(!userId) return res.status(401).send("Unassigned Id")
    
    const user = await User.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        roleId: role._id,
        active: false
    })   
    
    if(!user) return res.status(401).send("Error Updating");
    return res.status(200).send({user});   
    
})



module.exports = router;

