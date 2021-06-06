
const Role = require("../models/role");

const admin = async (req, res, next) => {

    const role = await Role.findById(req.user.roleId);
    if(!role) return res.status(401).send("The role doesn't exists")
    
    if(role.name === "admin") next();
    else return res.status(401).send("Unauthorized User");
}

module.exports = admin;