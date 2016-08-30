var express = require('express');
var router = express.Router();

/*SHOPPING CART*/
var shoppingList = require('../routes/shoppingList');  //shows the shopping list GET
var saveShoppingList = require('../routes/saveShoppingList'); // save the added shopping list POST
var saveEditedList = require('../routes/saveEditedList'); //save the edited shopping item POST
var deleteShoppingList = require('../routes/deleteShoppingList'); // delete a specific item in the shopping list GET
// /*SHOPPING CART*/

/*STORE*/
var storeList = require('../routes/storeList');
var detailWindow = require('../routes/detailWindow');
/*STORE*/


/*HOME PAGE*/
router.get('/', function(req, res, next){
	res.render('index');
});

/*SHOPPING CART ROUTES*/
router.get('/shoppingcart', shoppingList); //shows the shopping list GET
router.get('/shoppingcart/add/:id', saveShoppingList); //adds a product into a shopping cart
router.post('/shoppingcart/edit/:id', saveEditedList); //edits a data of a product in the shopping cart
router.get('/shoppingcart/delete/:id', deleteShoppingList); //delete a product from the shopping cart
// /*SHOPPING CART ROUTES*/

/*STORE ROUTES*/
router.get('/store', storeList); //shows the products in the store
router.get('/store/detail/:id', detailWindow);
/*STORE ROUTES*/

module.exports = router;


// THERE are two DBs for this project: products and shoppingcart
// 'products' is used to display the products that are being sold
// shoppingcart is used to display the products that the usrs want to buy