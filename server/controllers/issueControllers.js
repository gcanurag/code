const User = require("../models/userModel");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/generateToken");
// const User = require('../models/userModel');
const decodeToken = require("../helpers/decodeToken");
const jwt = require("jsonwebtoken");
const Complaint = require("../models/complainModel");
const File = require("../models/imageModel");

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

exports.renderUploadForm = async (req, res) => {
  res.render("upload.ejs")
}
exports.uploadNotice = async (req, res) => {
  try {
    const userId = req.userId;
    const user = req.user;
    const fileName = req.file.filename;


    const newfile = await File.create({
      path: `${process.env.BASE_URL}/data/uploads/${fileName}`,
      user: userId,
     
    });
    res.status(200).json({newfile, success:"true"})
  } catch (error) {
    console.log(error);
    console.log(error.keyValue);

    if (error.code === 11000 && error.keyPattern && error.keyPattern.path === 1) {
      // Duplicate key error on the 'path' field
      const existingDoc = await File.findOne({ path: error.keyValue.path });

      if (existingDoc) {
        console.log("Existing document found");
        console.log(existingDoc, "document is here");
      }
    } else {
      console.error("Error creating document:", error);
    }
  }
}