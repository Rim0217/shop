var connection = require('../routes/dbConnection.js').localConnect({multipleStatements: true});

module.exports = function SaveRecord(req , res , next){
    var id = req.params.id;

connection.query("INSERT INTO shoppingcart (name, price, image_name, original_id) WHERE NOT EXISTS(SELECT name, price, image_name, id FROM products WHERE id = ?)",[id], function(err, rows)    // {",[id], function(err, rows)
    {

        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/store');

    });

    // connection.query("INSERT INTO shoppingcart (name, price, image_name, original_id) SELECT name, price, image_name, id FROM products WHERE id = ? ON DUPLICATE KEY UPDATE shoppingcart.quantity = shoppingcart.quantity+1",[id], function(err, rows)
    // {

    //     if (err)
    //         console.log("Error inserting : %s ",err );

    //     res.redirect('/store');

    // });

    // connection.query("INSERT INTO shoppingcart (name, price, image_name, original_id) SELECT name, price, image_name, id FROM products WHERE id = ?",[id], function(err, rows)
    // {

    //     if (err)
    //         console.log("Error inserting : %s ",err );

    //     res.redirect('/store');

    // });


}
