const {Schema, model} = require("mongoose");

const PhotosSchema = new Schema({
    name: String,
    url: String,
    title: String,
    description: String
})

module.exports = model("Photos", PhotosSchema)

