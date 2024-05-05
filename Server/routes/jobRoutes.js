const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const { verifyToken } = require('../jwtToken');

router.post('/create', verifyToken, jobController.create)
router.get('/user/jobs', verifyToken, jobController.getByUserId)

module.exports = router;