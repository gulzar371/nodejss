const mongoose =require ('mongoose')

const product = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    monumber :String 
})
module.exports = mongoose.model('documents',product)