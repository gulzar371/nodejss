const mongoose = require('mongoose')

const condb = async()=>{
    try{
        const con =await mongoose.connect(process.env.MONGO_URL)
       //  console.log("hello this resulr==>",con)

    }catch(error){
        console.log("error",error)
process.exit(1)
    }
    
}
module.exports =condb;