const express= require('express');
const { getaddcard, postaddcard } = require("../../controler/carproduct/carprdtcontroler");
const {protect} = require('../../middlewere/aurthmiddlwere')
const router = express.Router();
router.use(express.json())


router.get('/getaddcard',protect,getaddcard)    
router.post('/postaddcard',protect,postaddcard)


module.exports = router;