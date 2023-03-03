const mongoose = require('mongoose')

const product = mongoose.Schema({
    titel:{
     type:String,
     requride:[true,'plese add titel']
    },
    description:{
        type:String,
        requride:[true,'plese add description']
    },
    
    price:{
        type:String,
        requride:[true,'plese add price']
    },
    quantity:{
        type:String,
        requride:[true,'plese add quantity']

    },
  
},
{
    timestamps:true
})
module.exports=mongoose.model('data',product)