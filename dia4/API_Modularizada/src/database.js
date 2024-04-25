const mongoose = require("mongoose");


mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, 
                 useUnifiedTopology: false})
.then((db)=>{
    console.log("database connected on" + db.connection.host)
})
.catch((error)=>{
    console.log(error)
});