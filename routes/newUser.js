var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var passport = require('passport');

router.post('/newUser',passport.authenticate('local-signup', { 
  successRedirect : '/login',
  failureRedirect : '/registration'
}));

module.exports = router;



