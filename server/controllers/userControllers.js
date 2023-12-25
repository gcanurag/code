const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/generateToken');
const User = require('../models/userModel');
const decodeToken = require('../helpers/decodeToken');
const jwt = require('jsonwebtoken');



exports.registerUser = async (req, res) => {
    const { name, email, password, identitynumber } = req.body;
    console.log(req.body, "register");
    console.log(identitynumber * 1);
    // return;


    try {
        console.log("anurag");
        if (!name || !email || !password || !identitynumber) {
            res.status(400).json({ msg: "Plese provide all the fiels" });
        }

        const newUser = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,8),
            identitynumber:identitynumber * 1

        });
        console.log("user", newUser)
        res.json({ user: newUser });


        
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "Something went wrong during registration" });
    }
}

exports.loginUser = async (req, res) => {
    
    const { email, password } = req.body;
    console.log(req.body);
    // return;
     if ( !email || !password ) {
            res.status(400).json({ msg: "Plese provide all the fields" });
        }
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const isMatched = bcrypt.compareSync(password, userDoc.password);
        if (isMatched) {
            const token = jwt.sign({ email: userDoc.email }, process.env.SECRET, { expiresIn: "2d" });
            
            res.json({ authtoken: token, success:"true" });
        }

    } else {
        res.status(400).json("Error during login ")
    }
}

exports.getProfile = async (req, res) => {
    const user = req.user;
 
    res.json({ user: user, success: "true" });
  
  
};


exports.logoutUser = async (req, res) => {
    
}


exports.adminDashboard = async (req, res) => {
    
    const user = await User.findOne({
        email:email
    })
}


