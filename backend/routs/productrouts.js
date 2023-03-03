const express = require('express')
const Router = express.Router()
const { getproduct, postproduct, putproduct, detproduct } = require('../controler/productcoltroler')
Router.use(express.json())
Router.get('', getproduct)

Router.post('', postproduct)

Router.put('/:id', putproduct)
    
Router.delete('/:id', detproduct)


module.exports = Router;