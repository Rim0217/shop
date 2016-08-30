var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function shoppingList(req, res, next){
	connection.query('SELECT * from shoppingcart', function(err, rows){
		if(err){
			console.log("Error has occured: %s", err);
		}else{
			res.render('shoppingcart', {data:rows});
		}	
	});
};