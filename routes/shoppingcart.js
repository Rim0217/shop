//GET shoppingcart lists

exports.list = function(req, res){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM shoppingcart', function(err, rows){

			if(err){
				console.log("Error has occured: %s", err);
			}else{
				res.render('shoppingcart', {data:rows});
			}
		});
	});
};


exports.add = function(req, res){
	res.render('addShoppingcart');
};

exports.edit = function(req, res){
	var id = req.params.idx;

	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM shoppingcart WHERE id = ?',[id],function(err, rows){
			if(err)
				console.log("Error has occured: %s",err);

			res.render('editShoppingcart', {data:rows});
		});
	});
};
 //Save shoppingcart
exports.save = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));

	req.getConnection(function(err, connection){
		var data = {
			product: input.product,
			quantity: input.quantity,
			price: input.price
		};
		
		var query = connection.query('INSERT INTO shoppingcart set ?', data, function(err, rows){
			if(err)
				console.log("Error has occured: %s",err);

			res.redirect('/shoppingcart');

		});
	});
};

//Save edited shoppingcart

exports.saveEdit = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	var id = req.params.idx;

	req.getConnection(function(err, connection){
		var data = {
			product: input.product,
			quantity: input.quantity,
			price: input.price
		};
		
		var query = connection.query('UPDATE shoppingcart set ? WHERE idx = ?', [data,id], function(err, rows){
			if(err)
				console.log("Error has occured: %s",err);

			res.redirect('/shoppingcart');

		});
	});
};

exports.deleteShoppingcart = function(req, res){
	var id = req.prams.idx;

	req.getConnection(function(err, connection){
		connection.query("DELETE FROM CUSTOMER WHERE idx = ?", [id], function(err, rows){
			if(err)
				console.log("Error has occured: %s",err);
			res.redirect('/shoppingcart');
		});
	});
};