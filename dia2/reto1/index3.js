const mongoose = require("mongoose");
const Photos = require("./photosSchema");
const funciones = require("./funciones")

mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

// let photos1 =new Photos ({
//     name:"Juan",
//     url:"leon.jpg",
//     title: "leon",
//     description: "leon tumbado"

// });

// let photos2 =new Photos ({
//     name:"Juan",
//     url:"ballena.jpg",
//     title: "ballena",
//     description: "ballena respirando"

// });

// photos1.save()
//     .then(res =>{
//     console.log(res);
//     })
//     .catch(err =>{
//     console.log(err);
// });

// photos2.save()
// .then(res =>{
// console.log(res);
// })
// .catch(err =>{
// console.log(err);
// });

// funciones.uploadDoc("Juan", "cerdo.jpg", "cerdo", "cerdo en pocilga");
//funciones.getAll("Juan")
//funciones.modify("ballena", "murcielago saltando")
//funciones.deleteOne("Juan", "ballena")
// funciones.deleteAll("Juan")