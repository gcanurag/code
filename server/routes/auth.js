const express = require('express');
const OAuth2Strategy = require('passport-oauth2');
const router = express.Router();
const passport=require('passport-oauth2');
const { registerUser, loginUser, getProfile, makeAdmin } = require('../controllers/userControllers');
const { isAuthenticated } = require('../middlewares/middlewares');



// router.route()
router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/profile').get(isAuthenticated, getProfile);

router.route('/makeadmin').get(makeAdmin);



module.exports = router;