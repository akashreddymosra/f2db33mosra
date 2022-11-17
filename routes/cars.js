var express = require('express');
const cars_controlers= require('../controllers/cars'); 
var router = express.Router();

/* GET costumes */

router.get('/', cars_controlers.cars_view_all_Page );

/* GET detail cars page */
router.get('/detail', cars_controlers.cars_view_one_Page);
/* GET create cars page */
router.get('/create', cars_controlers.cars_create_Page);
/* GET create update page */
router.get('/update', cars_controlers.cars_update_Page);
/* GET delete cars page */
router.get('/delete', cars_controlers.cars_delete_Page);

module.exports = router;
