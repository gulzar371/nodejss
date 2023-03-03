const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {getprofile,postprofile} = require('../controler/profilecontroler')

Router.get("/:id",getprofile);
Router.post("/:id",postprofile)



module.exports = Router