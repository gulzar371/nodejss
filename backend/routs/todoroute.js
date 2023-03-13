const express = require('express');
const router = express.Router();
const {protect} = require('../middlewere/aurthmiddlwere')
router.use(express.json());
const  {registeruser,loginuser} = require('../controler/todocontroler')
router.post('/',registeruser);
router.post('/login',loginuser)





module.exports = router;