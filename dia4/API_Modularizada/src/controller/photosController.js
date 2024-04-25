const PhotoModel = require("../model/photo")


function getPhotos(request, response){
    if(request.query.name != null)
    {
        PhotoModel.find({name: request.query.name})
        .then(function(items)
        {
            // con esta condicion me aseguro de que si el usuario introducido tiene mas datos,
            // va por el if, si no tiene contenido me dice que el usuario no existe.
            if (items.length > 0) {
                console.log(items);
                response.send(items);
            } else {
                console.log("El usuario no existe");
                response.send("El usuario no existe");
            }
        })
        .catch(function(error)
        {
            console.log('Error:', error);
            response.send("Error al buscar fotos");
        })
    }
    else
    {
       console.log("Introduce un usuario");
       response.send("Introduce un usuario")
    }
}

function postPhotos(request, response)
{
    let photos = new PhotoModel({name: request.body.name,
                                 url: request.body.url,
                                 title: request.body.title,
                                 description: request.body.description
                                })
    PhotoModel.create(photos)
        .then(function()
        {
            console.log('doc creado correctamente');
            response.send(photos)
        })
        .catch(function()
        {
            console.log('error al escribir el doc');
            response.send("error al escribir el doc")
        })
}

function putPhotos(request, response)
{
    PhotoModel.updateOne({ name: request.body.name }, { description: request.body.description })
    .then((result) => {
        // uso el metodo ModifiedCount para ve si se altera algun resultado, 
        //si es positivo, va por el if si no cabia se va por el else
        if (result.modifiedCount > 0) {
            console.log('Modificado correctamente');
            console.log(result);
            response.send(result);
        } else {
            console.log('El usuario no existe o la descripción es la misma');
            response.send('El usuario no existe o la descripción es la misma');
        }
    })
    .catch((error) => {
        console.log('Error al modificar:', error);
        response.send('Error al modificar la foto');
    });

}

function deletePhotos(request, response)
{   
    // if(request.body.name && request.body.title)
    // {
    // PhotoModel.deleteOne({name: request.body.name}, {title:request.body.title})
    //     .then((dato)=>
    //     { if(dato.deletedCount > 0)
    //         {console.log('Photo eliminada correctamente');
    //         console.log(dato);
    //         response.send(dato) }
    //         else{
    //             console.log('El usuario no existe o la photo no existe');
    //             response.send('El usuario no existe o la photo no existe');
    //         }
    //     })
    //     .catch((error)=>
    //     {
    //         console.log(error);
    //     })
    // }
    // else if(request.body.name)
    // {
    // PhotoModel.deleteMany({name: request.body.name})
    //     .then((items)=>
    //     { if(items.deletedCount > 0)
    //         {console.log('todo eliminado');
    //         console.log(items);
    //         response.send(items)}
    //         else {
    //             console.log('El usuario no existe');
    //             response.send('El usuario no existe');
    //         }
    //     })
    //     .catch((error)=>
    //     {
    //         console.log(error);
    //     })
    // }  
    
    if (request.body.name) {
        const query = { name: request.body.name };

        if (request.body.title) {
            // Borrar una foto específica
            query.title = request.body.title;

            PhotoModel.deleteOne(query)
                .then((result) => {
                    if (result.deletedCount > 0) {
                        console.log('Foto eliminada correctamente');
                        console.log(result);
                        response.send(result);
                    } else {
                        console.log('La foto o el usuario no existe');
                        response.send('La foto o el usuario no existe');
                    }
                })
                .catch((error) => {
                    console.log('Error al eliminar la foto:', error);
                    response.status(500).send('Error al eliminar la foto');
                });
        } else {
            // Borrar todas las fotos del usuario
            PhotoModel.deleteMany(query)
                .then((result) => {
                    if (result.deletedCount > 0) {
                        console.log('Todas las fotos fueron eliminadas');
                        console.log(result);
                        response.send(result);
                    } else {
                        console.log('No hay fotos para eliminar');
                        response.send('No hay fotos para eliminar');
                    }
                })
                .catch((error) => {
                    console.log('Error al eliminar las fotos:', error);
                    response.status(500).send('Error al eliminar las fotos');
                });
        }
    } else {
        console.log('Falta el nombre de usuario en la solicitud');
        response.status(400).send('Falta el nombre de usuario en la solicitud');
    }
}



module.exports = {getPhotos, postPhotos, putPhotos, deletePhotos}