const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { verifyToken } = require('../jwtToken');

router.post('/create', verifyToken, chatController.createChat)
router.get('/messages', verifyToken, chatController.getChatMessages);
router.post('/messages', verifyToken, chatController.sendMessage);
router.post('/upload', verifyToken, chatController.uploadFiles);

module.exports = router;