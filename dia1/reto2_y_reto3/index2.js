const mongoose = require("mongoose");
const User2 = require("./user2");
const Profile = require("./profile");
const Creedentials = require("./creedentiasl");

mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

let user1 = new User2({
    login: "juan",
    password: "87654321"
});

let profile1 = new Profile({
    name: "luis",
    surname: "lopez",
    dateOfBirth: "1989-01-17",
    comments: "buenas noches",
    rol: "user"
});

let creedentials1 = new Creedentials({
    address: "calle primera",
    phone:667788992,
    email: "dharianfenix@gmail.com"
});

// user1.save()
//     .then(res =>{
//     console.log(res);
//     })
//     .catch(err =>{
//     console.log(err);
// })

profile1.save()
    .then(res =>{
    console.log(res);
    })
    .catch(err =>{
    console.log(err);
})

// creedentials1.save()
//     .then(res =>{
//     console.log(res);
//     })
//     .catch(err =>{
//     console.log(err);
// })




