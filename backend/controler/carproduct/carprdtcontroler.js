const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs')
const addtocard = require('../../model/carproductmodel/carprdtmodel');
const asyncHandler = require('express-async-handler');



const getaddcard =asyncHandler(async (req, res) => {
    let data = await addtocard.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
})



const postaddcard =  asyncHandler(async (req, res) => {

    const { title, dis, price, reting,img,color,size, quentity } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !quentity ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await addtocard.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        quentity
    });
    console.log("====>", data);
    res.status(200).json(data)
})



module.exports = {
    getaddcard,
    postaddcard
}