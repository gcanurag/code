const jwt = require('jsonwebtoken');
const {promisify} =require('util')

const decodeToken = async (secret, token) => {
  return await promisify(jwt.verify)(token, secret);
}

module.exports = decodeToken;