const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {

    let jwtToken = req.header("Authorization");
    if(!jwtToken) return res.status(401).send("doesn´t exist Token")
    jwtToken = jwtToken.split(" ")[1];    
    if(!jwtToken) return res.status(401).send("doesn´t exist Token")

    try {        
        const payload = jwt.verify(jwtToken, process.env.TokenJWT);            
        req.user = payload;        
        next();        
    } catch (error) {
        return res.status(401).send("doesn´t exist Token");
    }
}

module.exports = auth;