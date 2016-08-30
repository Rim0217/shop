var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function detailWindow(req, res, next){
	var id = req.params.id;
	connection.query("SELECT * FROM products WHERE id=?",[id], function(err, rows){
		if(err)
			console.log("Error Displaying the details : %s", err);
		res.render('showDetail', {data:rows});
	});
}