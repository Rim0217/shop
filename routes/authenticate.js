var express = require('express');
var mysql  = require('mysql');
var passport = require('passport');
var flash    = require('connect-flash');
var session = require('express-session');
require('../conf/passport.js')(passport);


module.exports = function authenticate(req, res, next){
	passport.authenticate('local-login', { 
  		successRedirect : '../store',
  		failureRedirect : '../login', 
	});
}	