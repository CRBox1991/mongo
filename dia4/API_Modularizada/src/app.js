const express = require("express");
const cors = require('cors');
const photoRouters = require("./routers/photoRouter");
const errorHanding = require("./error/errorHanding");
const app = express();


app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(photoRouters);
app.use(function(req, res, next){

    res.status(400).json({
        error:true,
        codigo: 404,
        mesaage:"Endpoint doesnt found"
    })
})

app.use(errorHanding);

module.exports = app
