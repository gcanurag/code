const jwt = require("jsonwebtoken")

const User = require("../models/userModel");
const decodeToken = require("../helpers/decodeToken");

exports.isAuthenticated = async (req, res, next) => {
   try {
     const token = req.header('auth-token');
    
    if (!token) {
       console.log("no tokennnnnnnn")
    }
   const decryptedResult = await  decodeToken(token)
   const userExist = await User.findOne({
    email:decryptedResult['email']
   })
    if(userExist.length == 0){
        res.send("User with that token doesn't exist")
    }else{
        req.user = userExist; 
        req.userId = userExist._id;
        // console.log(userExist._id);
        // console.log(userExist,"userexist")
        next();
    }
   } catch (error) {
       // res.send()console
       console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
   }
}

exports.restrictedToAdmin = (...roles) => {
    return (req, res, next) => {
        console.log(roles,"Rolesss")
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
            res.send("You dont have permission")
        } else {
            next();
        }
    }
}