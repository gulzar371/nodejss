const express= require('express');
const { getaddcard, postaddcard } = require("../../controler/carproduct/carprdtcontroler");
const router = express.Router();
router.use(express.json())


router.get('/',getaddcard)    
router.post('/',postaddcard)


module.exports = router;