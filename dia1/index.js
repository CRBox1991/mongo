const mongoose = require("mongoose");
const User = require("./userSchema");

mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({

    name: "Saray",
    email:"saray@saray",
    role:"user",
    age:18,
    verified: false
});

userDocument.save()
    .then(res =>{
    console.log(res);
    })
    .catch(err =>{
    console.log(err);
})