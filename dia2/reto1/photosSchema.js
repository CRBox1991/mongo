const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    name: String,
    url: String,
    title: String,
    description: String
})

module.exports = mongoose.model("Photos", PhotosSchema)