const express = require('express');
const router = express.Router();
const {protect} = require('../middlewere/aurthmiddlwere')
router.use(express.json());
const  {registeruser,loginuser} = require('../controler/todocontroler')
router.post('/',registeruser);
router.post('/login',loginuser)
// router.get('/me', protect,getMe)
// router.put('/',updateuser)
// router.delete('/',deleteuser)




module.exports = router;