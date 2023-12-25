const jwt = require('jsonwebtoken');

const generateToken = async(variable) => {
    return jwt.sign({}, process.env.SECRET,{
        expiresIn: '2d'
    })
}