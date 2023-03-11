const mongoose = require('mongoose')

const carschema=new mongoose.Schema({
    title:{type:String,
        required:[true,"please add the title"]
    },
    price:{type:String,
        required:[true,"please add the price"]
    },
    dis:{type:String,
        required:[true,"please add the dis"]
    },
    rating:{type:String,
        required:[true,"please add the rating"]
    },
    image:{type:String,
        required:[true,"please add the image"]
    },
    quantity:{type:String,
        required:[true,"please add the quantity"]
    }
})

module.exports=mongoose.model('addcart',carschema)