const express = require('express')
const router = express.Router()
const userContoller = require('../controllers/userController')

router.post('/', userContoller.get)

module.exports = router