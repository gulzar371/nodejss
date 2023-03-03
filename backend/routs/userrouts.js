const express = require ('express')
const router = express.Router()
const { getuser,putuser,postuser,deleteuser} =require('../controler/usercontroler')

// router.get('/',getuser)
// router.post('/',putuser)
// router.put('/:id',postuser)
// router.delete('/:id',deleteuser)

router.route('/').get(getuser).post(postuser);
router.route('/:id').delete(deleteuser).put(putuser)
module.exports=router;
