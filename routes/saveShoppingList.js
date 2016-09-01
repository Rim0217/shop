var connection = require('../routes/dbConnection.js').localConnect();

module.exports = function SaveRecord(req , res , next){
    var id = req.params.id;

connection.query("UPDATE shoppingcart SET quantity = quantity+1 WHERE id = ?",[id], function(err, rows){
    connection.query("INSERT IGNORE INTO shoppingcart (name, price, image_name, id) SELECT name, price, image_name, id FROM products WHERE id = ?", [id, id], function(err, rows){
        
        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/store');
    });
});

    // connection.query("INSERT INTO shoppingcart (name, price, image_name, id) SELECT name, price, image_name, id FROM products WHERE id = ? ON DUPLICATE KEY UPDATE shoppingcart.quantity = shoppingcart.quantity+1",[id], function(err, rows)
    // {

    //     if (err)
    //         console.log("Error inserting : %s ",err );

    //     res.redirect('/store');

    // });

    // connection.query("INSERT INTO shoppingcart (name, price, image_name, id) SELECT name, price, image_name, id FROM products WHERE id = ?",[id], function(err, rows)
    // {

    //     if (err)
    //         console.log("Error inserting : %s ",err );

    //     res.redirect('/store');

    // });


}
