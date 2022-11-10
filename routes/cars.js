var express = require('express');
const cars_controlers= require('../controllers/cars'); 
var router = express.Router();

/* GET costumes */

router.get('/', cars_controlers.cars_view_all_Page );

module.exports = router;
