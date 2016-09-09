// var express = require('express');
// var mysql = require('mysql');

// var flash = require('connect-flash');
// var bcrypt = require('bcrypt-nodejs');
// var pool = mysql.createPool({
// 	host     : 'localhost',
// 	user     : 'myusr',
// 	password : '12345',
// 	database : 'shop'
// });

// module.exports = function newUser(req, res){
// 	var email = req.body.email;
// 	var password = req.body.password;

// 	pool.getConnection(function(err, connection){
// 		connection.query("SELECT * FROM users WHERE email = ?", [email], function(err, rows){
// 			if(err)
// 				console.log("Error singing up: ",err);
// 			if(rows.length != 0){
// 				res.render('/registration', {error: 'Your email is already taken'});
// 			}else{
// 				var data = {
// 					'email' : email,
// 					'password' : bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
// 				};

// 				connection.query("INSERT INTO users set ?", [data], function(err, rows){
// 					if(err){
// 						console.log("Error in saving user: ",err);
// 						throw err;
// 					}

// 					res.redirect('/login')
// 					// req.logIn(data, function(err){
// 					// 	if(err) throw err;
// 					// 	res.redirect('/login');
// 					// });
// 				});
// 				connection.release();
// 			}
// 		});
// 	});
// }
var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var passport = require('passport');

router.post('/newUser',passport.authenticate('local-signup', { 
  successRedirect : '/login',
  failureRedirect : '/registration'
}));

module.exports = router;



