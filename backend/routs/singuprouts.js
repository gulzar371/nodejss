const express= require('express');
const app = express()
const router = express.Router()
router.use(express.json())
const {getsing,postsing} = require('../controler/singupcontroller')

router.get("/",getsing);
router.post("/",postsing)


module.exports = router