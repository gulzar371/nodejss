const mongoose=require("mongoose")

const singup = mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    eamil:{type:String},
    password:{type:String},
    gender:{type:String}
})
module.exports=mongoose.model('singup',singup)