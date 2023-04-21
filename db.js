const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/mernPizza',{useNewUrlParser:true})

var db = mongoose.connection
db.on('connected',()=>{
    console.log('mongo db coonection succefull');
})

db.on('error',()=>{
    console.log('mongodb coonection failed');
})

module.exports=mongoose