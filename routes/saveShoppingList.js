var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function SaveRecord(req , res , next){
    var id = req.params.id;

    connection.query("INSERT INTO shoppingcart (name, price, image_name) SELECT name, price, image_name FROM products WHERE id = ?",[id], function(err, rows)
    {

        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/store');

    });


}
