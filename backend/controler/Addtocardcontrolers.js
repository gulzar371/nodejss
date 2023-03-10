const addcart =require('../model/Addtocardmodel')
const asynchendler = require('express-async-handler')
const getadd = async (req,res)=>{
    try{
        const data = await addcart.find({})
        if(!data){
            res.status(404).json("data is missing")
        }
        res.status(200).json(data)
    }catch(error){
        res.status(404).json(error)
    }
}

const postadd = async (req,res)=>{
    try{
        const {title, image, price, rating, dis,quantity}=req.body
        if (!title || !image || !price || !rating || !dis || !quantity) {
            res.status(400).json({ error: "missing the fild" })
        }
        const data = await addcart.create({
            title,
            price,
            dis,
            rating,
            image,
            quantity
        })
        res.status(200).json(data)
    }catch(error){
        res.status(404).json(error)
    }
}

module.exports={ getadd,postadd}