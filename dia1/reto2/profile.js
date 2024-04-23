const mongoose = require("mongoose");

const Profile_schema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol:{
        type: String,
        enum: ["admin", "user"]   
    },
});

Profile_schema.pre('save', function(next)
{
    console.log('middle de entrada');
    if (this.dateOfBirth < "1990-01-01")
    {
        console.log('la fecha introducida es correcta');
        next();
    } else 
    {
        console.log('introduce una fecha mayor a 1990');
    }
})

module.exports = mongoose.model("Profile", Profile_schema);