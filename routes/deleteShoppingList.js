var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function deleteShoppingList(req, res, next){
	
	var id = req.params.id;

	connection.query("DELETE FROM shoppingcart WHERE id = ?",[id], function(err, rows){
		if(err)
			console.log("Error deleting: %s",err);
		res.redirect('/shoppingcart');
	});
};