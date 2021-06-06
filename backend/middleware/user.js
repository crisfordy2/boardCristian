
const User = require("../models/user");

const userAuth = async(req, res, next)=>{

    const user = await User.findById(req.user._id);
    if(!user) return res.status(401).send("Unauthenticated User")   
    next();
}

module.exports = userAuth;