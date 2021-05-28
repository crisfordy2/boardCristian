const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next)=>{

    let jwtToken = req.header("Authorization");
    if(!jwtToken) return res.status(401).send("doesn´t exist Token")
    jwtToken = jwtToken.split(" ")[1];    
    if(!jwtToken) return res.status(401).send("doesn´t exist Token")

    try {
        // verifica que la firma del token sea igual a la del modelo usuario
        const payload = jwt.verify(jwtToken, "TokenJWT"); 
        
        const user = await User.findById(payload._id);
        if(!user) return res.status(401).send("Unauthenticated User")        
        req.user_Id = user._id;        
        next();        
    } catch (error) {
        return res.status(401).send("doesn´t exist Token");
    }
}

module.exports = auth;