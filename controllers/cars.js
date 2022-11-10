var cars = require('../models/cars'); 
 
// List of all cars 
exports.cars_list = async function(req, res) { 
    try{ 
        thecars = await cars.find(); 
        res.send(thecars); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.cars_view_all_Page = async function(req, res) { 
    try{ 
        thecars = await cars.find(); 
        res.render('cars', { title: 'cars Search Results', results: thecars }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.cars_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new cars(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"carBrand":"maruthi", "carcolor":"red", "carcost":"80000"} 
    document.carBrand = req.body.carBrand;    
    document.carcolor = req.body.carcolor;
    document.carcost = req.body.carcost;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific cars. 
exports.cars_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars detail: ' + req.params.id); 
}; 
 

// Handle cars delete form on DELETE. 
exports.cars_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars delete DELETE ' + req.params.id); 
}; 
 
// Handle cars update form on PUT. 
exports.cars_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: cars update PUT' + req.params.id); 
}; 