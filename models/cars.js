const mongoose = require("mongoose") 
const carsSchema = mongoose.Schema({ 
 carBrand: String, 
 carcolor: String, 
 carcost: Number 
}) 
 
module.exports = mongoose.model("cars", carsSchema)