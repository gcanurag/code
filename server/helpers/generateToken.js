const jwt = require('jsonwebtoken');

exports.generateToken = async(user) => {
  try {
      return jwt.sign({email:user.email}, process.env.SECRET,{
        expiresIn: '2d'
    })
  } catch (error) {
      console.log(error, "error");
  }
}