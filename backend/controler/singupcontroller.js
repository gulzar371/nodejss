
const jwt =require('jsonwebtoken')
const singup =require('../model/singupmodel')

const getsing=async(req,res)=>{
    const data=await singup.findOne({});
    
}

const postsing = async(req,res)=>{
    const {firstname,lastname,email,password,gender}=req.body
    const data =await singup.create({
        firstname,
        lastname,
        email,
        password,
        gender
    })
    res.status(201).json({
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.pawword,
        gender:data.gender,
        token:generateToken(data._id) 
    })
}

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}
module.exports={
    getsing,
    postsing
    
}
