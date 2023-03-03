const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())

const {addstudent} = require('../../controler/studentcontrolles/studentcontrollers')
// Router.post("/",addstudent)

module.exports = Router