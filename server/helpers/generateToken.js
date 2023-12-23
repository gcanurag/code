const jwt = require('jsonwebtoken');

exports.generateToken = async(variable) => {
    return jwt.sign({}, process.env.SECRET,{
        expiresIn: '2d'
    })
}