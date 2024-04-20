const jwt=require("jsonwebtoken");
const jwtsecret=require("../config");
 const authmiddleware=(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader||!authheader.startsWith("Bearer "))
    {
        return res.status(403).json({});

    }
    const token=authheader.split(" ")[1];
    try{
        const decoded=jwt.verify(token,jwtsecret);
        req.userid=decoded.userid;
        next();
    }
    catch(err)
    {
     return res.status(403).json({});
    }

}
module.exports={
    authmiddleware}