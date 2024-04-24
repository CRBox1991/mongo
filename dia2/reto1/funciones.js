const Photos = require("./photosSchema")

function uploadDoc(name, url, title, description){

    let photos = new Photos({
        name: name,
        url: url,
        title: title,
        description: description
    })

    Photos.create(photos)
        .then(function()
        {
            console.log('doc creado correctamente');
        })
        .catch(function()
    {
        console.log('error al escribir el doc');
    })
}

function getAll(name){
    Photos.find({name: name})
        .then(function(items)
        {
            console.log(items);
        })
        .catch(function()
    {
        console.log('error');
    })
}

function modify(title, description){
    Photos.updateOne({title: title}, {description: description, verified: false})
        .then((dato)=>
        {
            console.log('modificado correctamente');
            console.log(dato);
        })
        .catch((error)=>
        {
            console.log(error);
        })
}

function deleteOne(name, title){
    Photos.deleteOne({name: name}, {title: title, verified: false})
        .then((dato)=>
        {
            console.log('eliminado correctamente');
            console.log(dato);
        })
        .catch((error)=>
        {
            console.log(error);
        })
}

function deleteAll(name){
    Photos.deleteMany({name: name})
    .then((items)=>
    {
        console.log('todo eliminado');
        console.log(items);
    })
    .catch((error)=>
    {
        console.log(error);
    })
}

module.exports = {uploadDoc, getAll, modify, deleteOne, deleteAll}