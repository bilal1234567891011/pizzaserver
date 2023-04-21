const mongoose = require("mongoose")


const Pizza=mongoose.model('Pizza',
{
    name:{type:String,require},
    varients:[],
    prices:[],
    category:{type:String,require},
    image:{type:String,require},
    descrption:{type:String,require}
})
module.exports={
    Pizza
}


// const pizzaSchema = mongoose.Schema({

//         name:{type:String,require},
//         varients:[],
//         prices:[],
//         category:{type:String,require},
//         image:{type:String,require},
//         descrption:{type:String,require}

// },{
//     timestamps:true,
// })


// const pizzaModel = mongoose.model('pizzas', pizzaSchema)


// module.exports = pizzaModel






