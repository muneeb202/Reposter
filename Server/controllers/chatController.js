const { Message, Chat } = require('../models/chatModel');
const User = require('../models/userModel');
const sequelize = require('../database');

const sendMessage = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const { text } = req.body;
        const userId = req.userId;

        let chat;
        let user = await User.findByPk(userId);

        if (!user.chatId) {
            chat = await Chat.create({ userId1: userId }, { transaction });
            user.chatId = chat.id;
            console.log(user.chatId, ": id")
            await user.save({ transaction });
        } else {
            chat = await Chat.findByPk(user.chatId);
        }

        const message = await Message.create({ chatId: chat.id, text }, { transaction });

        await transaction.commit();

        res.status(201).json(message);
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getChatMessages = async (req, res) => {
    try {
        const userId = req.userId;
        console.log(userId)
        const user = await User.findByPk(userId);

        if (!user || !user.chatId) {
            return res.status(404).json({ error: 'Chat not found for the user' });
        }

        const chatId = user.chatId;
        const messages = await Message.findAll({ where: { chatId } });

        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getChatMessages: getChatMessages,
    sendMessage: sendMessage
}
