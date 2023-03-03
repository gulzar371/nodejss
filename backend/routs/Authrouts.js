const express = require('express');
const router = express.Router();
router.use(express.json( ))
const { registerUser, loginUser, getMe } = require('../controler/userAuthcontrol')

const {protect}=require('../middlewere/aurthmiddlwere')

router.post('/', registerUser);
// router.post('/login', loginUser);
router.get('/me',protect, getMe);

module.exports = router;