const mongodb =require('mongodb')
const db =require('../config')
const asynchendler=require('express-async-handler')
const user =require('../model/userschema')


const getuser=asynchendler(async(req,res)=>{
    const data = await user.find({})
   // console.log(data)
    res.status(200).json({data})
})

const putuser=asynchendler(async(req,res)=>{
    res.status(200).json({massage:"putuser"})
})

const postuser=asynchendler(async(req,res)=>{
    res.status(200).json({massage:"postuser"})
})

const deleteuser=asynchendler(async(req,res)=>{
    const findid =await user.findById(req.params.id)
    if(!findid){
        res.status(400)
        res.send('user not found')
    }
    await findid.remove()
    res.status(200).json({massage:`delete data ${req.params.id}`})
})



module.exports ={
    getuser,
    putuser,
    postuser,
    deleteuser

}