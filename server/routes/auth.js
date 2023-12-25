const express = require('express');
const OAuth2Strategy = require('passport-oauth2');
const router = express.Router();
const passport=require('passport-oauth2')



router.get('/login', () => {
    passport.use(new OAuth2Strategy({
        autho
    }))
})

module.exports = router;