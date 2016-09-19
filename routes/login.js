var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var passport = require('passport');
var flash    = require('connect-flash');

router.get('/login', function(req, res, next) {
  	res.render('login');
});

router.post('/login',passport.authenticate('local-login', { 
  successRedirect : '/',
  failureRedirect : '/login'
}));

module.exports = router;
