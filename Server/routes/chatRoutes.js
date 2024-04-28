const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { verifyToken } = require('../jwtToken');

router.get('/chats/messages', verifyToken, chatController.getChatMessages);
router.post('/chats/messages', verifyToken, chatController.sendMessage);

module.exports = router;