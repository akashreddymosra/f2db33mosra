var express = require('express');
const cars_controlers= require('../controllers/cars'); 
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
var router = express.Router();

/* GET costumes */

router.get('/', cars_controlers.cars_view_all_Page );

/* GET detail cars page */
router.get('/detail', cars_controlers.cars_view_one_Page);
/* GET create cars page */
router.get('/create',secured, cars_controlers.cars_create_Page);
/* GET create update page */
router.get('/update',secured, cars_controlers.cars_update_Page);
/* GET delete cars page */
router.get('/delete',secured, cars_controlers.cars_delete_Page);

module.exports = router;
