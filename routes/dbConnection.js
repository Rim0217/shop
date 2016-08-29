var mysql = require('mysql');
var db = function localConnect(){

	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'myusr',
		password : '12345',
		database : 'shop'	
	});
	return connection;

	connection.connect();

}
module.exports.localConnect = db;