const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../helpers/generateToken');


exports.registerUser = async (req, res) => {
    const { username, identity_number, password, email } = req.body;
    try {
        if (!username || !identity_number || !password || !email) {
            res.status(400).json({ msg: "Plese provide all the fiels" });
        }

        const newUser = await User.create({
            username,
            email,
            password:bcrypt.hashSync(password,8),
            identity_number

        });
        res.json({ user: newUser });


        
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong during registration" });
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    // if (!username || !password) {
    //     res.send()
    // };
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const isMatched = bcrypt.compareSync(password, userDoc.password);
        if (isMatched) {
            const token = generateToken(userDoc);
            res.cookie('token', token).json(userDoc);
        }

    } else {
        res.status(400).json("Error during login ")
    }
}

