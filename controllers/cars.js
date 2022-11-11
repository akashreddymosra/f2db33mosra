var cars = require('../models/cars');

// List of all cars 
exports.cars_list = async function (req, res) {
    try {
        thecars = await cars.find();
        res.send(thecars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.cars_view_all_Page = async function (req, res) {
    try {
        thecars = await cars.find();
        res.render('cars', { title: 'cars Search Results', results: thecars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle cars create on POST. 
exports.cars_create_post = async function (req, res) {
    console.log(req.body)
    let document = new cars();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"carBrand":"maruthi", "carcolor":"red", "carcost":"80000"} 
    document.carBrand = req.body.carBrand;
    document.carcolor = req.body.carcolor;
    document.carcost = req.body.carcost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific cars.
exports.cars_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await cars.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle cars delete form on DELETE. 
exports.cars_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: cars delete DELETE ' + req.params.id);
};



//Handle cars update form on PUT. 
exports.cars_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await cars.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.carBrand)  toUpdate.carBrand = req.body.carBrand; 
        if(req.body.carcolor) toUpdate.cost = req.body.carcolor; 
        if(req.body.carcost) toUpdate.size = req.body.carcost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 