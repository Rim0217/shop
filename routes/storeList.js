var connection = require('../routes/dbConnection.js').localConnect();
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/store', function(req, res){
	connection.query('SELECT * FROM products', function(err, rows){
			if(err)
				console.log("Error has occured: %s",err);
			if(req.isAuthenticated()){
				res.render('store', {data:rows, user: req.user});				
			}else{
				res.render('store_noUser', {data:rows});
			}
	});		
});

module.exports = router;