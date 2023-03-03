const mongodb = require('mongodb')
const db = require('../config')
const user = require('../model/productschema')
const { use } = require('../routs/productrouts')

const getproduct =async(req, res) => {
    const result =await user.find()
    res.status(400).json(result)
}

const postproduct = async (req, res) => {
    const result = await user.create({ titel: req.body.titel, description: req.body.description, price: req.body.price, quantity: req.body.quantity })
    res.status(400).json(result)
    console.log(result)
}

const putproduct = async (req, res) => {
    const findid =await user.findById(req.params.id)
    if(!findid){
        res.status(400)
        res.send("user not found")
    }
   const updateuser = await user.findByIdAndUpdate(req.params.id,req.body,{
     new :true
    
   })
   console.log("===>",updateuser)
   res.status(200).json({message:`update data ${req.params.id}`})
}

const detproduct = async (req, res) => {
    let findid=await user.findById(req.params.id)
    if(!findid){
        res.status(400)

        res.send("user not found")
    }
    await findid.remove()
    res.status(200).json({massage:`delete data${req.params.id}`})
}
module.exports = {
    getproduct,
    postproduct,
    putproduct,
    detproduct
}