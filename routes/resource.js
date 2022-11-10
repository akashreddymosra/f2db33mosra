var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var cars_controller = require('../controllers/cars'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a cars.  
router.post('/cars', cars_controller.cars_create_post); 
 
// DELETE request to delete cars. 
router.delete('/cars/:id', cars_controller.cars_delete); 
 
// PUT request to update cars. 
router.put('/cars/:id', cars_controller.cars_update_put); 
 
// GET request for one cars. 
router.get('/cars/:id', cars_controller.cars_detail); 
 
// GET request for list of all cars items. 
router.get('/cars', cars_controller.cars_list); 
 
module.exports = router;