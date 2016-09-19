var connection = require('../routes/dbConnection.js').localConnect();
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/shoppingcart/add/:id', isLoggedIn, function(req, res){
   var id = req.params.id;
   var email = req.user.local.email;
        connection.query("UPDATE shoppingcart SET quantity = quantity+1 WHERE id = ? AND user = ?",[id, email], function(err, rows){
            if(rows.affectedRows == 1){
                res.redirect('back');  
            }else{
                connection.query("INSERT IGNORE INTO shoppingcart (name, price, image_name, id) SELECT name, price, image_name, id FROM products WHERE id = ?", [id], function(err, rows){
                    connection.query("UPDATE shoppingcart SET user = ? WHERE id = ? AND user = 'null'",[email, id], function(err, rows){
                        if (err)
                            console.log("Error inserting : %s ",err );
                        res.redirect('back');  
                     });
                });
            }
        });             
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    res.redirect('/');  
    }
}

module.exports = router;
