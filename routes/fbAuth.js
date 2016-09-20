var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash    = require('connect-flash');

router.get('/fbAuth', passport.authenticate('fb-login', {scope: 'email'}));

router.get('/fbAuth/callback',passport.authenticate('fb-login', { 
  successRedirect : '/',
  failureRedirect : '/login'
}));

module.exports = router;
