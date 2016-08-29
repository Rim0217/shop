var express = require('express');
var router = express.Router();

/*SHOPPING CART*/
var shoppingList = require('../routes/shoppingList');  //shows the shopping list GET
// var addShoppingList = require('../routes/addShoppingList'); //add to the shopping list GET
// var saveShoppingList = require('../routes/saveShoppingList'); // save the added shopping list POST
// var editShoppingList = require('../routes/editShoppingList'); // edit the specific item in the shopping list with the 'idx' GET
// var saveEditedList = require('../routes/saveEditedList'); //save the edited shopping item POST
// var deleteShoppingList = require('../routes/deleteShoppingList'); // delete a specific item in the shopping list GET
// /*SHOPPING CART*/

/*STORE*/
var storeList = require('../routes/storeList');
/*STORE*/


/*HOME PAGE*/
router.get('/', function(req, res, next){
	res.render('index');
});

/*SHOPPING CART ROUTES*/
router.get('/shoppingcart', shoppingList);
// router.get('/shoppingcart/add', addShoppingList);
// router.post('/shoppingcart/add', saveShoppingList);

// router.get('/shoppingcart/edit/:idx', editShoppingList);
// router.post('/shoppingcart/edit/:idx', saveEditedList);
// router.get('/shoppingcart/delete/:idx', deleteShoppingList);
// /*SHOPPING CART ROUTES*/

/*STORE ROUTES*/
router.get('/store', storeList);
/*STORE ROUTES*/

module.exports = router;
