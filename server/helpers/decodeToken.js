const jwt = require('jsonwebtoken');
const {promisify} =require('util')

const decodeToken = async (token) => {

   try {
    return  await promisify(jwt.verify)(token, process.env.SECRET);
   } catch (error) {
     console.log(error, "decoding error");
   }
 
}

module.exports = decodeToken;