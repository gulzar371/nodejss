const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {protect} = require('../middlewere/aurthmiddlwere')
const {getwishg, postwishg } = require("../controler/WishingControler")

Router.get("/",protect,getwishg )
Router.post("/",protect,postwishg )


module.exports = Router