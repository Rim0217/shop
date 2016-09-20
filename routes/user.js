var passport = require("passport");
var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	local:{
		firstName: String,
		lastName: String,
		userId: String,
		email: String,
		password: String
	},
	facebook:{
		id: String,
		token: String,
		email: String,
		name: String
	}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('users', userSchema)