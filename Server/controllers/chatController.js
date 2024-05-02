const { Message, Chat } = require('../models/Chat');
const User = require('../models/User');
const sequelize = require('../database');
const multer = require('multer');
const path = require('path');

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Init multer upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
        console.log(file);
    }
}).array('uploadFile'); // Allow multiple files with field name 'uploadFile'

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only!');
    }
}

const createChat = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();
        
        // Upload files
        upload(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ error: err });
            } else {
                try {
                    // Extract form data from multer
                    const formData = req.body;

                    const problemSubject = formData.problemSubject;
                    const problemDescription = formData.problemDescription;
                    const userId = req.userId;
                    
                    const uploadFiles = req.files; // Get file paths
                    let filenames = '';
                    uploadFiles.forEach((file) => {
                        filenames += file.filename + ' : ';
                    });
                    console.log(filenames)
                    // Create the chat
                    const newChat = await Chat.create({
                        problemSubject,
                        problemDescription,
                        uploadFile: filenames, // Store file paths as JSON array
                        userId,
                        status: 0 // Set status to 'Pending'
                    }, { transaction });

                    await transaction.commit();
                    // console.log(req.files)
                    res.status(201).json(newChat);
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    console.error('Error creating chat:', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            }
        });
        // console.log(req.files)
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error('Error creating chat:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const uploadFiles = async (req, res) => {
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.log('inside');
            // A Multer error occurred when uploading.
            res.status(500).send({ error: { message: `Multer uploading error: ${err.message}` } }).end();
            return;
        } else if (err) {
            // An unknown error occurred when uploading.
            if (err.name == 'ExtensionError') {
                res.status(413).send({ error: { message: err.message } }).end();
            } else {
                res.status(500).send({ error: { message: `unknown uploading error: ${err.message}` } }).end();
            }
            return;
        }
        console.log('file : ', req.files)
        console.log(req.body)
        // Everything went fine.
        // show file `req.files`
        // show body `req.body`
        res.status(200).end('Your files uploaded.');
    })
}

// Send a message in a chat
const sendMessage = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const { text } = req.body;
        const userId = req.userId;
        const chatId = req.chatId;

        // Create the message
        const message = await Message.create({ chatId, userId, text }, { transaction });

        await transaction.commit();

        res.status(201).json(message);
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get messages in a chat
const getChatMessages = async (req, res) => {
    try {
        const userId = req.userId;
        const chatId = req.params.chatId;

        // Check if the user is authorized to access the chat
        const chat = await Chat.findByPk(chatId);
        if (!chat || chat.userId !== userId) {
            return res.status(404).json({ error: 'Chat not found' });
        }

        // Get messages in the chat
        const messages = await Message.findAll({ where: { chatId } });

        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createChat,
    sendMessage,
    getChatMessages,
    uploadFiles
};
