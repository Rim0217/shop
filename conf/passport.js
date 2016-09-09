// var LocalStrategy = require('passport-local').Strategy;
// var passport = require('passport');
// var mysql = require('mysql');
// var bcrypt = require('bcrypt-nodejs');
// var connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'myusr',
// 	password : '12345',
// 	database : 'shop'
// });
// module.exports = function(passport){


// 	passport.serializeUser(function(user, done){
// 		done(null, user.email); 
// 	});

// 	passport.deserializeUser(function(email, done){
// 		connection.query("SELECT * FROM users WHERE email = ?", [email], function(err,rows){
// 			done(err, rows[0]);
// 		});	
// 	});	  

// 	passport.use('local-signup', new LocalStrategy({
// 		usernameField: 'email',
// 		passwordField: 'password',
// 		passReqToCallback: true
// 	}, function(req, email, password, done){

// 		process.nextTick(function(){
// 			connection.query ("SELECT * FROM users WHERE email = ?", [mysql.escape(email)], function(err, rows){
// 				console.log(rows);
// 				if(err){
// 					return done(err);
// 				}
// 				if(rows.length){
// 					return done(null, false, {message: 'This email is already taken.'});
// 				}else{
// 					var newUserMysql = new Object();

// 					newUserMysql.email = email;
// 					newUserMysql.password = password;

// 					var insertQuery = "INSERT INTO users (email, password) VALUES ('" + email + "','"+password+"')";
// 					console.log(insertQuery);
// 					return done(null, newUserMysql);
// 				}
// 			});	
// 		});
		
// 	}));



// 	passport.use('local',	
// 		new LocalStrategy({
// 			usernameField: 'email',
// 			passwordField: 'password',
// 			passReqToCallback: true
// 		}, function(req, email, password, done){
// 			process.nextTick(function(){
// 				connection.query("SELECT * FROM users WHERE email = ?", [email], function(err,rows){
// 					console.log(rows);
// 					if(err){
// 						console.log('Error in sign in: ',err);
// 						return done(err);
// 					}
// 					if(rows.length){
// 						return done(null, false, {message: 'Your email does not exist'});
// 					}
// 					if (!isValidPassword(password, rows[0].password)){   
// 						console.log('Invalid Password');
// 						return done(null, false, {message: 'Wrong Password'});
// 					}
// 					return done(null, rows);
// 					console.log('Login Success');
// 					connection.release();
// 				});
// 			});
// 		}));
// 	var isValidPassword = function(password, user){
//         return bcrypt.compareSync(password, user);
//     }
// };

var LocalStrategy = require("passport-local").Strategy;
var User = require('../routes/user');
var mongoose = require("mongoose");

module.exports = function(passport){
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user){
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'local.email': email}, function(err, user){
				if(err)
					return done(err);
				if(user){
					return done(null, false, {message: 'This email is already taken.'});
				}else{
					var newUser = new User();

					newUser.local.email = email;
					newUser.local.password = newUser.generateHash(password);

					newUser.save(function(err){
						if(err)
							throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},

	function(req, email, password, done){
		User.findOne({'local.email': email}, function(err, user){
			if(err)
				return done(err);

			if(!user)
				return done(null, false, {message: 'Wrong password'});

			return done(null, user);
		});
	}));
};		
	