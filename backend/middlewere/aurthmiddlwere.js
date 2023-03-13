const jwt = require('jsonwebtoken')
const asyncHendler = require('express-async-handler')
const user = require('../model/userAuthschema')

const protect = asyncHendler(async (req, res) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //grt token form header
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user=decoded.id;
            // req.user = await user.findById(decoded.id).select('-password')

        }
        catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('new authorzid on token')
    }
})
module.exports = {
    protect
}