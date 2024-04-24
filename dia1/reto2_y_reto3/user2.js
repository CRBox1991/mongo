const mongoose = require("mongoose");


const User2_schema = new mongoose.Schema({
    login: String,
    password: { 
                type: String,
                validate:[
                function(password)
                {
                    return password.length >= 8;
                },
                'la password deberia ser mas larga'],
                select: false
                },
   
});



module.exports = mongoose.model("User2", User2_schema);
