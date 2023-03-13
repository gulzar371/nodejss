const mongoose = require('mongoose')

const wishingschema = new mongoose.Schema({
   prize :{
        type :String,
        required:[true,"please add Likeimage "]
    },
    title :{
        type:String,
        required :[true,"please add title"]
    },
    dis:{
        type:String,
        required:[true,"please add the dis"]

    },
    image:{
        type:String,
        required:[true,"please add the image"]
    }
})

module.exports= mongoose.model("wishing",wishingschema)