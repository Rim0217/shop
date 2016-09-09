var connection = require('../routes/dbConnection.js').localConnect();
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/shoppingcart', isLoggedIn, function(req, res){
	connection.query('SELECT * from shoppingcart', function(err, rows){
		if(err){
			console.log("Error has occured: %s", err);
		}else{
			res.render('shoppingcart', {data:rows, user: req.user});
		}
	});		
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();

	res.redirect('/');	
	}
}

module.exports = router;
