const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  identitynumber: {
    type: Number,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Possible values: 'user', 'admin'
    default: 'user', // Default role for new users
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
