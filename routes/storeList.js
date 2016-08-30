var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function storeList(req, res, next){
	connection.query('SELECT * FROM products', function(err, rows){
		if(err)
			console.log("Error has occured: %s",err);
		res.render('store', {page_title: "Store", data:rows});
	})
};