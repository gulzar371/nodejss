const express = require('express');
const Router = express.Router();
Router.use(express.json( ))
const { getadd, postadd} = require('../controler/Addtocardcontrolers')

Router.post('/', postadd);
Router.get('/',getadd);

module.exports = Router;