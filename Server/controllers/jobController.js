const Job = require('../models/Job');
const multer = require('multer');
const path = require('path');
const sequelize = require('../database.js');

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/job-posts/');
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
    }
}).array('uploadFile'); // Allow multiple files with field name 'uploadFiles'

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|mp4|avi|mp3/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Unsupported file type!');
    }
}

const create = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        // Upload files
        upload(req, res, async function (err) {
            if (err) {
                return res.status(400).json({ error: err });
            } else {
                try {
                    // Extract form data from request body
                    // const { formData, selectedSkills } = req.body.data;
                    const jobData = req.body
                    selectedSkills = jobData.selectedSkills;

                    console.log(jobData, "\n", req.files, "\n", selectedSkills)

                    const userId = req.userId;

                    // Get file paths
                    const uploadFiles = req.files.map(file => file.path);

                    // Create the job
                    const newJob = await Job.create({
                        ...jobData,
                        proposalCount: 0,
                        alloted: false,
                        rating: 5,
                        uploadFiles: uploadFiles,
                        userId: userId
                    }, { transaction });

                    await transaction.commit();

                    res.status(201).json(newJob);
                } catch (error) {
                    if (transaction) await transaction.rollback();
                    console.error('Error creating job:', error);
                    res.status(500).json({ error: 'Internal server error' });
                }
            }
        });
    } catch (error) {
        if (transaction) await transaction.rollback();
        console.error('Error creating job:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error getting jobs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getByUserId = async (req, res) => {
    const userId = req.userId;
    try {
        const jobs = await Job.findAll({ where: { userId: userId } });
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Error getting jobs by user ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    create,
    getAllJobs,
    getByUserId
};