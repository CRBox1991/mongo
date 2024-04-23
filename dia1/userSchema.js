const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    age: Number,
    verified: Boolean
})

module.exports = mongoose.model("User", UserSchema, "Users")