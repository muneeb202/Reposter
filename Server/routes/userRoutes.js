const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/userController')

router.post('/register', userContoller.addUser)
router.post('/login', userContoller.loginUser)
router.post('/auth/google', userContoller.googleLogin)

module.exports = router