const mongoose = require("mongoose");


const Creedentials_schema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
   
})

module.exports = mongoose.model("Creedentials", Creedentials_schema);