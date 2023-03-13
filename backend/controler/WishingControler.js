const wishing = require('../model/WishingModel')

const getwishg = async (req,res)=>{
    try{
        const data = await wishing.find({})
        if(!data){
            res.status(404).json("data is mising")
        }
        res.status(200).json(data)
    }catch(error){
        res.status(404).json(error)
    }
}

const postwishg = async (req,res)=>{
    try{
        const { title, image, dis,prize } = req.body
        if(!title || !image   || !dis || !prize){
            res.status(400).json({error:"something is missing"})
        }
        const data = await wishing.create({
            title,
            dis,
            image,
            prize
        })
        res.status(200).json(data)
    }catch(error){
        res.status(404).json(error)
    }
}

module.exports={getwishg,postwishg}