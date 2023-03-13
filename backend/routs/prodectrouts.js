const express = require('express')
const Router = express.Router()
const { getpdt,findpdt,postpdt,putpdt,deletepdt } = require("../controler/prodectcontroler")
Router.use(express.json())

Router.get("/",getpdt)
Router.get("/find/:_id",findpdt)
Router.post("/",postpdt)
Router.put("/:_id",putpdt)
Router.delete("/:_id",deletepdt)


module.exports = Router;