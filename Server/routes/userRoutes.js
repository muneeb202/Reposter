const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/userController')

router.get('/', userContoller.get)
router.post('/add', userContoller.addUser)
router.post('/login', userContoller.loginUser)

module.exports = router