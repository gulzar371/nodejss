const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getcourse,addcourse} = require('../../controler/studentcontrolles/studentcoursecontrollers')

Router.get("/",getcourse)
Router.post("/",addcourse)

module.exports = Router