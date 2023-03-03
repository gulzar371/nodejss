const mongoose = require('mongoose')

const employschema = new mongoose.Schema({
    employid: {
        type: String
    },
    employname: {
        type: String
    },
    employemail: {
        type: String
    },
    employnumber: {
        type: String
    },
    employdob: {
        type: String
    },
    employment: {
        type: String
    },
    employaddress: {
        type: String
    },

})

module.exports=mongoose.model('employ',employschema)