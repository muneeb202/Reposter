const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Job = sequelize.define('Job', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contractRequirements: {
        type: DataTypes.STRING
    },
    socialMediaContent: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    },
    priceRange: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    projectSize: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    sampleRequired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    employeeRequirement: {
        type: DataTypes.STRING
    },
    selectedSkills: {
        type: DataTypes.JSON
    },
    proposalCount: {
        type: DataTypes.INTEGER
    },
    alloted: {
        type: DataTypes.BOOLEAN
    },
    rating: {
        type: DataTypes.INTEGER
    },
    uploadFiles: {
        type: DataTypes.JSON
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'jobs',
    timestamps: false,
    underscored: true
});

module.exports = Job;
