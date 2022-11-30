const mongoose = require("mongoose")
const carsSchema = mongoose.Schema({
    carBrand: {

        type: String,

        min: 1,

        max: 100

    },

    carcolor: {

        type: String,

        min: 1,

        max: 100

    },

    carcost: {

        type: Number,

        min: 1,

        max: 10000000

    }
})

module.exports = mongoose.model("cars", carsSchema)