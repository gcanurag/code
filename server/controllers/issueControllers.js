const User = require("../models/userModel");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/generateToken");
// const User = require('../models/userModel');
const decodeToken = require("../helpers/decodeToken");
const jwt = require("jsonwebtoken");
const Complaint = require("../models/complainModel");

exports.issueComplain = async (req, res) => {
  try {
    const user = req.user;
    const { title, description } = req.body;
    const userId = req.user._id;
    console.log(userId);
    console.log(req.body, "body");
    const complain = await Complaint.create({
      title,
      description,
      user: userId,
      email: user.email,
    });
    console.log(complain, "complain");
  } catch (error) {
    console.log(`error while issuing complain`, error);
  }
};

exports.getComplain = async (req, res) => {
  const complains = await Complaint.find();
  console.log(complains);
  res.status(200).json({ data: complains, success: "true" });
};


exports.renderAdminDashboard = async (req, res) => {
  // const 
  try {
    
  } catch (error) {
    
  }
}