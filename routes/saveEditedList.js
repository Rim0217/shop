var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function saveEditedList(req, res, next){
	var id = req.params.id;
	var input = JSON.parse(JSON.stringify(req.body));

	var editedQuantity = {quantity : input.quantity};

	connection.query("UPDATE shoppingcart set ? WHERE id=?",[editedQuantity,id], function(err, rows){
		if(err)
			console.log("Error deleting: %s",err);
		res.redirect('/shoppingcart');
	});
}	
